import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParametricScrollPathProps {
  triggerElement?: string;
}

interface BezierPoint {
  x: number;
  y: number;
}

const ParametricScrollPath = ({
  triggerElement,
}: ParametricScrollPathProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const containerDimensionsRef = useRef({ width: 0, height: 0 });
  const pathLengthRef = useRef(0);
  const [bezierPoints, setBezierPoints] = useState<BezierPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load bezier points from JSON file
  useEffect(() => {
    const loadBezierPoints = async () => {
      try {
        const response = await fetch('/s26/bezier-points-1769750280934.json');
        const data = await response.json();
        
        if (data.formattedForBezier?.allPoints) {
          setBezierPoints(data.formattedForBezier.allPoints);
        } else if (data.points && Array.isArray(data.points)) {
          setBezierPoints(data.points.map((p: any) => ({ x: p.x, y: p.y })));
        }
      } catch (error) {
        console.error('Failed to load bezier points:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadBezierPoints();
  }, []);

  useEffect(() => {
    if (!containerRef.current || !dotRef.current || !pathRef.current || !svgRef.current || isLoading || bezierPoints.length < 2) {
      return;
    }

    const container = containerRef.current;
    const dot = dotRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;

    // Get container dimensions - use offsetWidth/offsetHeight for more reliable sizing
    // that matches the coordinate system (these are relative to the container's coordinate space)
    const updateContainerDimensions = () => {
      const width = container.offsetWidth || container.getBoundingClientRect().width || window.innerWidth;
      const height = container.offsetHeight || container.getBoundingClientRect().height || window.innerHeight;
      containerDimensionsRef.current = { width, height };
      return { width, height };
    };
    
    // Build Catmull-Rom spline path that passes through all points
    const buildPath = (width: number, height: number) => {
      const pathParts: string[] = [];
      
      for (let i = 0; i < bezierPoints.length - 1; i++) {
        const p0 = i > 0 ? bezierPoints[i - 1] : bezierPoints[i];
        const p1 = bezierPoints[i];
        const p2 = bezierPoints[i + 1];
        const p3 = i < bezierPoints.length - 2 ? bezierPoints[i + 2] : bezierPoints[i + 1];
        
        // Convert percentage to pixel coordinates
        const x0 = (p0.x / 100) * width;
        const y0 = (p0.y / 100) * height;
        const x1 = (p1.x / 100) * width;
        const y1 = (p1.y / 100) * height;
        const x2 = (p2.x / 100) * width;
        const y2 = (p2.y / 100) * height;
        const x3 = (p3.x / 100) * width;
        const y3 = (p3.y / 100) * height;
        
        // Catmull-Rom to Bezier conversion
        const cp1x = x1 + (x2 - x0) / 6;
        const cp1y = y1 + (y2 - y0) / 6;
        const cp2x = x2 - (x3 - x1) / 6;
        const cp2y = y2 - (y3 - y1) / 6;
        
        if (i === 0) {
          pathParts.push(`M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
        } else {
          pathParts.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`);
        }
      }
      
      return pathParts.join(" ");
    };

    const rebuildPath = () => {
      const { width, height } = updateContainerDimensions();
      containerDimensionsRef.current = { width, height };

      const pathData = buildPath(width, height);
      path.setAttribute("d", pathData);

      svg.setAttribute("width", width.toString());
      svg.setAttribute("height", height.toString());
      svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

      void svg.offsetHeight;
      pathLengthRef.current = path.getTotalLength();
    };

    rebuildPath();
    
    // Function to get point on path at progress (0-1)
    const getPointOnPath = (progress: number) => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const point = path.getPointAtLength(clampedProgress * pathLengthRef.current);
      return { x: point.x, y: point.y };
    };

    const setDotAtProgress = (progress: number) => {
      const point = getPointOnPath(progress);
      gsap.set(dot, {
        x: point.x,
        y: point.y,
        xPercent: -50,
        yPercent: -50,
      });
    };

    // Create ScrollTrigger animation
    const trigger = triggerElement ? document.querySelector(triggerElement) : container;

    const createScrollTrigger = () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: trigger || container,
        start: "top bottom",
        end: "+=1500",
        scrub: 1,
        onUpdate: (self) => {
          setDotAtProgress(self.progress);
        },
      });
    };

    createScrollTrigger();
    setDotAtProgress(scrollTriggerRef.current?.progress ?? 0);

    // Handle window resize - this is the working path (zoom fixes it)
    const handleResize = () => {
      rebuildPath();
      setDotAtProgress(scrollTriggerRef.current?.progress ?? 0);
      ScrollTrigger.refresh();
    };
    
    // Monitor container size changes - use the same handleResize function that works for zoom
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        
        if (newWidth !== containerDimensionsRef.current.width || newHeight !== containerDimensionsRef.current.height) {
          // Use the same handleResize function that works for zoom
          handleResize();
        }
      }
    });
    
    resizeObserver.observe(container);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
    };
  }, [bezierPoints, isLoading, triggerElement]);

  if (isLoading || bezierPoints.length < 2) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full z-10 pointer-events-none"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <path
          ref={pathRef}
          d=""
          fill="none"
          stroke="rgba(0, 0, 0, 0.2)"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>
      <div
        ref={dotRef}
        className="absolute bg-black pointer-events-none"
        style={{
          width: "14px",
          height: "14px",
          left: "0px",
          top: "0px",
        }}
      />
    </div>
  );
};

export default ParametricScrollPath;
