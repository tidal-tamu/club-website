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
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:50',message:'useEffect entry - checking refs',data:{hasContainer:!!containerRef.current,hasDot:!!dotRef.current,hasPath:!!pathRef.current,hasSvg:!!svgRef.current,isLoading,bezierPointsCount:bezierPoints.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
    // #endregion
    if (!containerRef.current || !dotRef.current || !pathRef.current || !svgRef.current || isLoading || bezierPoints.length < 2) {
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:52',message:'Early return - missing refs or data',data:{hasContainer:!!containerRef.current,hasDot:!!dotRef.current,hasPath:!!pathRef.current,hasSvg:!!svgRef.current,isLoading,bezierPointsCount:bezierPoints.length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'E'})}).catch(()=>{});
      // #endregion
      return;
    }

    const container = containerRef.current;
    const dot = dotRef.current;
    const path = pathRef.current;
    const svg = svgRef.current;
    
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:58',message:'Refs initialized - checking dot element',data:{dotExists:!!dot,dotOffsetWidth:dot?.offsetWidth,dotOffsetHeight:dot?.offsetHeight,dotComputedDisplay:dot ? window.getComputedStyle(dot).display : 'N/A',dotComputedVisibility:dot ? window.getComputedStyle(dot).visibility : 'N/A',dotComputedZIndex:dot ? window.getComputedStyle(dot).zIndex : 'N/A'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    // Get container dimensions - use offsetWidth/offsetHeight for more reliable sizing
    // that matches the coordinate system (these are relative to the container's coordinate space)
    const updateContainerDimensions = () => {
      const width = container.offsetWidth || container.getBoundingClientRect().width || window.innerWidth;
      const height = container.offsetHeight || container.getBoundingClientRect().height || window.innerHeight;
      containerDimensionsRef.current = { width, height };
      return { width, height };
    };
    
    const { width: containerWidth, height: containerHeight } = updateContainerDimensions();
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:75',message:'Container dimensions calculated',data:{containerWidth,containerHeight,offsetWidth:container.offsetWidth,offsetHeight:container.offsetHeight,boundingRectWidth:container.getBoundingClientRect().width,boundingRectHeight:container.getBoundingClientRect().height},timestamp:Date.now(),sessionId:'debug-session',runId:'run6',hypothesisId:'B'})}).catch(()=>{});
    // #endregion

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

    const pathData = buildPath(containerWidth, containerHeight);
    path.setAttribute("d", pathData);

    // Set SVG dimensions
    svg.setAttribute("width", containerWidth.toString());
    svg.setAttribute("height", containerHeight.toString());
    svg.setAttribute("viewBox", `0 0 ${containerWidth} ${containerHeight}`);

    // Get the path length for animation
    const pathLength = path.getTotalLength();
    pathLengthRef.current = pathLength;
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:120',message:'Path length calculated',data:{pathLength,isNaN:isNaN(pathLength),isFinite:isFinite(pathLength),containerWidth,containerHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'run6',hypothesisId:'D'})}).catch(()=>{});
    // #endregion
    
    // Function to get point on path at progress (0-1)
    const getPointOnPath = (progress: number) => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const currentPathLength = path.getTotalLength(); // Always get fresh path length
      const point = path.getPointAtLength(clampedProgress * currentPathLength);
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:130',message:'getPointOnPath called',data:{progress,clampedProgress,pointX:point.x,pointY:point.y,isNaNX:isNaN(point.x),isNaNY:isNaN(point.y),currentPathLength,storedPathLength:pathLengthRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run6',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      return { x: point.x, y: point.y };
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
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const point = getPointOnPath(progress);

          // Position dot at the point on the path
          // Both SVG and dot are absolute positioned in the same container,
          // so coordinates should match directly
          const dotSize = 12;
          const leftValue = `${point.x - dotSize / 2}px`;
          const topValue = `${point.y - dotSize / 2}px`;
          
          // #region agent log
          const containerRect = container.getBoundingClientRect();
          const svgRect = svg.getBoundingClientRect();
          const currentDims = updateContainerDimensions();
          fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:163',message:'ScrollTrigger onUpdate - BEFORE gsap.set - coordinate systems',data:{progress,pointX:point.x,pointY:point.y,leftValue,topValue,dotSize,containerRect:{left:containerRect.left,top:containerRect.top,width:containerRect.width,height:containerRect.height},svgRect:{left:svgRect.left,top:svgRect.top,width:svgRect.width,height:svgRect.height},storedWidth:containerDimensionsRef.current.width,storedHeight:containerDimensionsRef.current.height,currentWidth:currentDims.width,currentHeight:currentDims.height,widthMismatch:currentDims.width !== containerDimensionsRef.current.width,heightMismatch:currentDims.height !== containerDimensionsRef.current.height,svgViewBox:svg.getAttribute('viewBox'),scrollY:window.scrollY},timestamp:Date.now(),sessionId:'debug-session',runId:'run6',hypothesisId:'B'})}).catch(()=>{});
          // #endregion
          
          // Check if container dimensions have changed and rebuild path if needed
          if (currentDims.width !== containerDimensionsRef.current.width || currentDims.height !== containerDimensionsRef.current.height) {
            // #region agent log
            fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:180',message:'Container dimensions changed during scroll - rebuilding path',data:{oldWidth:containerDimensionsRef.current.width,oldHeight:containerDimensionsRef.current.height,newWidth:currentDims.width,newHeight:currentDims.height,progress,scrollY:window.scrollY,triggeredBy:'ScrollTrigger onUpdate',heightChange:currentDims.height - containerDimensionsRef.current.height},timestamp:Date.now(),sessionId:'debug-session',runId:'run9',hypothesisId:'B'})}).catch(()=>{});
            // #endregion
            
            // Update stored dimensions FIRST before rebuilding
            containerDimensionsRef.current = { width: currentDims.width, height: currentDims.height };
            
            // Rebuild path with new dimensions
            const newPathData = buildPath(currentDims.width, currentDims.height);
            path.setAttribute("d", newPathData);
            svg.setAttribute("width", currentDims.width.toString());
            svg.setAttribute("height", currentDims.height.toString());
            svg.setAttribute("viewBox", `0 0 ${currentDims.width} ${currentDims.height}`);
            
            // Force a reflow to ensure SVG is updated before getting path length
            void svg.offsetHeight;
            
            // Update path length ref
            const newPathLength = path.getTotalLength();
            pathLengthRef.current = newPathLength;
            
            // Immediately recalculate point with new path and update dot
            // Use requestAnimationFrame to ensure DOM updates are complete
            requestAnimationFrame(() => {
              const newPoint = getPointOnPath(progress);
              const newLeftValue = `${newPoint.x - dotSize / 2}px`;
              const newTopValue = `${newPoint.y - dotSize / 2}px`;
              gsap.set(dot, {
                left: newLeftValue,
                top: newTopValue,
              });
              
              // #region agent log
              fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:205',message:'Path rebuilt and dot repositioned during scroll (RAF)',data:{newWidth:currentDims.width,newHeight:currentDims.height,newPathLength,newPointX:newPoint.x,newPointY:newPoint.y,newLeftValue,newTopValue,progress},timestamp:Date.now(),sessionId:'debug-session',runId:'run9',hypothesisId:'B'})}).catch(()=>{});
              // #endregion
            });
            
            // Refresh ScrollTrigger to ensure it uses the new path
            ScrollTrigger.refresh();
            return; // Skip the rest of this update
          }
          
          gsap.set(dot, {
            left: leftValue,
            top: topValue,
          });
          
          // #region agent log
          const dotRect = dot.getBoundingClientRect();
          const dotComputedStyle = window.getComputedStyle(dot);
          const containerRectAfter = container.getBoundingClientRect();
          const svgRectAfter = svg.getBoundingClientRect();
          // Calculate offset: dot center should align with path point
          // Since both are in container coordinate space, we compare directly
          const dotCenterX = point.x; // point.x is already the center X in container space
          const dotCenterY = point.y; // point.y is already the center Y in container space
          const dotActualLeft = parseFloat(dotComputedStyle.left);
          const dotActualTop = parseFloat(dotComputedStyle.top);
          const offsetX = (dotActualLeft + dotSize / 2) - point.x;
          const offsetY = (dotActualTop + dotSize / 2) - point.y;
          fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:167',message:'ScrollTrigger onUpdate - AFTER gsap.set - offset calculation',data:{progress,leftValue,topValue,pointX:point.x,pointY:point.y,dotActualLeft,dotActualTop,dotSize,dotCenterX,dotCenterY,offsetX,offsetY,containerRect:{left:containerRectAfter.left,top:containerRectAfter.top},svgRect:{left:svgRectAfter.left,top:svgRectAfter.top}},timestamp:Date.now(),sessionId:'debug-session',runId:'run3',hypothesisId:'A'})}).catch(()=>{});
          // #endregion
        },
      });
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:147',message:'ScrollTrigger created',data:{hasTrigger:!!trigger,triggerSelector:triggerElement,containerWidth,containerHeight},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'B'})}).catch(()=>{});
      // #endregion
    };

    createScrollTrigger();

    // Handle window resize - this is the working path (zoom fixes it)
    const handleResize = () => {
      const { width: newWidth, height: newHeight } = updateContainerDimensions();
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:245',message:'handleResize called',data:{oldWidth:containerDimensionsRef.current.width,oldHeight:containerDimensionsRef.current.height,newWidth,newHeight,offsetWidth:container.offsetWidth,offsetHeight:container.offsetHeight,scrollY:window.scrollY,scrollTriggerActive:!!scrollTriggerRef.current,scrollTriggerProgress:scrollTriggerRef.current?.progress},timestamp:Date.now(),sessionId:'debug-session',runId:'run10',hypothesisId:'B'})}).catch(()=>{});
      // #endregion

      const oldPathLength = pathLengthRef.current;
      const newPathData = buildPath(newWidth, newHeight);
      path.setAttribute("d", newPathData);

      svg.setAttribute("width", newWidth.toString());
      svg.setAttribute("height", newHeight.toString());
      svg.setAttribute("viewBox", `0 0 ${newWidth} ${newHeight}`);
      
      // Force reflow to ensure SVG is updated
      void svg.offsetHeight;
      
      // Update path length ref
      const newPathLength = path.getTotalLength();
      pathLengthRef.current = newPathLength;
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:262',message:'Path rebuilt in handleResize',data:{newWidth,newHeight,newPathDataLength:newPathData.length,oldPathLength,newPathLength,pathLengthChange:newPathLength - oldPathLength,svgViewBox:svg.getAttribute('viewBox')},timestamp:Date.now(),sessionId:'debug-session',runId:'run10',hypothesisId:'B'})}).catch(()=>{});
      // #endregion

      // If ScrollTrigger is active, immediately recalculate and update dot position
      // Use requestAnimationFrame to ensure DOM updates are complete
      if (scrollTriggerRef.current) {
        requestAnimationFrame(() => {
          const currentProgress = scrollTriggerRef.current?.progress ?? 0;
          const newPoint = getPointOnPath(currentProgress);
          const dotSize = 12;
          gsap.set(dot, {
            left: `${newPoint.x - dotSize / 2}px`,
            top: `${newPoint.y - dotSize / 2}px`,
          });
          // #region agent log
          fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:277',message:'Dot repositioned in handleResize (RAF)',data:{currentProgress,newPointX:newPoint.x,newPointY:newPoint.y,newWidth,newHeight,newPathLength:pathLengthRef.current},timestamp:Date.now(),sessionId:'debug-session',runId:'run10',hypothesisId:'B'})}).catch(()=>{});
          // #endregion
        });
      }

      ScrollTrigger.refresh();
    };
    
    // Monitor container size changes - use the same handleResize function that works for zoom
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/8de09086-80d1-476f-a7f6-5cd0b0d7c1c5',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'ParametricScrollPath.tsx:285',message:'ResizeObserver detected size change',data:{oldWidth:containerDimensionsRef.current.width,oldHeight:containerDimensionsRef.current.height,newWidth,newHeight,contentRectWidth:entry.contentRect.width,contentRectHeight:entry.contentRect.height,scrollY:window.scrollY,triggeredBy:'ResizeObserver',heightChange:newHeight - containerDimensionsRef.current.height},timestamp:Date.now(),sessionId:'debug-session',runId:'run10',hypothesisId:'B'})}).catch(()=>{});
        // #endregion
        
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
        className="absolute bg-red-500 rounded-full pointer-events-none"
        style={{
          width: "12px",
          height: "12px",
          left: "0px",
          top: "0px",
        }}
      />
    </div>
  );
};

export default ParametricScrollPath;
