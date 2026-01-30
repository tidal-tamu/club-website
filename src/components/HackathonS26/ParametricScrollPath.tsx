import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParametricScrollPathProps {
  triggerElement?: string;
  onReachEnd?: () => void;
  onLeaveEnd?: () => void;
}

interface BezierPoint {
  x: number;
  y: number;
}

const ParametricScrollPath = ({
  triggerElement,
  onReachEnd,
  onLeaveEnd,
}: ParametricScrollPathProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const animationTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasReachedEndRef = useRef(false);
  const hasStartedRef = useRef(false);
  const containerDimensionsRef = useRef({ width: 0, height: 0 });
  const pathLengthRef = useRef(0);
  const [bezierPoints, setBezierPoints] = useState<BezierPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [debugMode, setDebugMode] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState<number | null>(null);

  // Check for debug mode and saved scroll position
  useEffect(() => {
    // Check URL params for debug mode
    const urlParams = new URLSearchParams(window.location.search);
    const debugParam = urlParams.get('debug');
    const isDebugMode = debugParam === 'true' || debugParam === '1';
    setDebugMode(isDebugMode);

    // Load saved scroll position from localStorage
    const saved = localStorage.getItem('parametricCurveTriggerScroll');
    if (saved) {
      const position = parseFloat(saved);
      if (!isNaN(position)) {
        setSavedScrollPosition(position);
      }
    }
  }, []);

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

  // Debug mode click handler
  useEffect(() => {
    if (!debugMode) return;

    const handleClick = () => {
      const scrollY = window.scrollY;
      const scrollHeight = scrollY;

      console.log('Debug: Scroll position captured:', scrollHeight);
      localStorage.setItem('parametricCurveTriggerScroll', scrollHeight.toString());
      setSavedScrollPosition(scrollHeight);

      // Show visual feedback
      alert(`Scroll position saved: ${scrollHeight}px\n\nThis value will be used as the animation trigger point.`);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [debugMode]);

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

      // Force reflow to ensure path is rendered
      void (svg as any).offsetHeight;
      pathLengthRef.current = path.getTotalLength();
    };

    rebuildPath();

    // Function to get point on path at progress (0-1)
    const getPointOnPath = (progress: number) => {
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const point = path.getPointAtLength(clampedProgress * pathLengthRef.current);
      return { x: point.x, y: point.y };
    };

    // Calculate curvature at a point on the path using a larger sample for better detection
    const getCurvature = (progress: number, sampleDistance: number = 0.02) => {
      const p1 = getPointOnPath(Math.max(0, progress - sampleDistance));
      const p2 = getPointOnPath(progress);
      const p3 = getPointOnPath(Math.min(1, progress + sampleDistance));

      // Calculate vectors
      const dx1 = p2.x - p1.x;
      const dy1 = p2.y - p1.y;
      const dx2 = p3.x - p2.x;
      const dy2 = p3.y - p2.y;

      // Calculate distances
      const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      // Normalize vectors
      const v1x = dist1 > 0 ? dx1 / dist1 : 0;
      const v1y = dist1 > 0 ? dy1 / dist1 : 0;
      const v2x = dist2 > 0 ? dx2 / dist2 : 0;
      const v2y = dist2 > 0 ? dy2 / dist2 : 0;

      // Calculate angle between vectors
      const dot = v1x * v2x + v1y * v2y;
      const angleDiff = Math.acos(Math.max(-1, Math.min(1, dot)));

      // Also consider the rate of change - sharp turns have higher curvature
      return angleDiff;
    };

    // Create a progress mapping that speeds up on straights and slows on curves
    const createCurvatureBasedProgressMap = () => {
      const numSamples = 300; // More samples for better detection
      const curvatureSamples: number[] = [];

      // Sample curvature along the path
      for (let i = 0; i <= numSamples; i++) {
        const progress = i / numSamples;
        curvatureSamples.push(getCurvature(progress));
      }

      // Smooth the curvature samples to avoid jittery speed changes
      const smoothedCurvatures: number[] = [];
      for (let i = 0; i <= numSamples; i++) {
        const windowSize = 5;
        let sum = 0;
        let count = 0;
        for (let j = Math.max(0, i - windowSize); j <= Math.min(numSamples, i + windowSize); j++) {
          sum += curvatureSamples[j];
          count++;
        }
        smoothedCurvatures.push(sum / count);
      }

      // Normalize curvatures and create speed multipliers
      const maxCurvature = Math.max(...smoothedCurvatures);
      const minCurvature = Math.min(...smoothedCurvatures);
      const curvatureRange = maxCurvature - minCurvature;
      
      const speedMultipliers = smoothedCurvatures.map(curvature => {
        // Higher curvature = slower speed (lower multiplier)
        // Lower curvature = faster speed (higher multiplier)
        const normalizedCurvature = curvatureRange > 0 
          ? (curvature - minCurvature) / curvatureRange 
          : 0;
        
        // Use a very aggressive exponential curve (cubed) for extreme slowdown on curves
        // Speed ranges from 8x (straight) to 0.01x (very curved) - extremely drastic
        const curveFactor = Math.pow(normalizedCurvature, 3); // Cube it for extremely drastic effect
        return 0.01 + (1 - curveFactor) * 7.99;
      });

      // Create cumulative distance map
      const cumulativeDistances: number[] = [0];
      for (let i = 1; i <= numSamples; i++) {
        const segmentLength = 1 / numSamples;
        const avgSpeed = (speedMultipliers[i - 1] + speedMultipliers[i]) / 2;
        // Slower segments take more "time" to traverse
        const adjustedLength = segmentLength / avgSpeed;
        cumulativeDistances.push(cumulativeDistances[i - 1] + adjustedLength);
      }

      // Normalize to 0-1 range
      const totalDistance = cumulativeDistances[numSamples];
      const normalizedDistances = cumulativeDistances.map(d => d / totalDistance);

      // Create mapping function: input progress -> output progress
      return (inputProgress: number): number => {
        if (inputProgress <= 0) return 0;
        if (inputProgress >= 1) return 1;

        // Find which segment we're in
        const targetDistance = inputProgress * normalizedDistances[numSamples];
        for (let i = 1; i <= numSamples; i++) {
          if (normalizedDistances[i] >= targetDistance) {
            // Interpolate between samples
            const t = (targetDistance - normalizedDistances[i - 1]) /
              (normalizedDistances[i] - normalizedDistances[i - 1] || 1);
            return ((i - 1 + t) / numSamples);
          }
        }
        return 1;
      };
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

    // Initialize dot at start of path
    setDotAtProgress(0);
    gsap.set(dot, { opacity: 1 });

    // Create discrete animation timeline
    const trigger = triggerElement ? document.querySelector(triggerElement) : container;

    const createAnimation = () => {
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
      }

      // Create curvature-based progress mapping
      const progressMap = createCurvatureBasedProgressMap();

      // Create a progress object to animate
      const progressObj = { progress: 0 };

      // Create timeline that animates along the path
      const timeline = gsap.timeline({
        paused: true,
        onUpdate: () => {
          // Map the linear progress through curvature-adjusted progress
          const mappedProgress = progressMap(progressObj.progress);
          const point = getPointOnPath(mappedProgress);
          gsap.set(dot, {
            x: point.x,
            y: point.y,
            xPercent: -50,
            yPercent: -50,
          });
        },
        onComplete: () => {
          // Mark as reached end
          hasReachedEndRef.current = true;
          // Get the direction at the end of the path to move off screen
          const endPoint = getPointOnPath(1);
          const nearEndPoint = getPointOnPath(0.98);
          const dx = endPoint.x - nearEndPoint.x;
          const dy = endPoint.y - nearEndPoint.y;

          // Move dot off screen quickly in the direction it was traveling
          gsap.to(dot, {
            x: endPoint.x + dx * 10,
            y: endPoint.y + dy * 10,
            duration: 0.2,
            ease: "power2.out",
            onComplete: () => {
              // Immediately trigger callback without delay
              if (onReachEnd) {
                onReachEnd();
              }
            },
          });
        },
      });

      // Animate progress from 0 to 1 (faster)
      timeline.to(progressObj, {
        progress: 1,
        duration: 1.5,
        ease: "none",
      });

      animationTimelineRef.current = timeline;

      // Create ScrollTrigger to play animation when in view
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      // Determine trigger start based on saved scroll position or default
      let triggerStart: string | (() => string);
      if (savedScrollPosition !== null) {
        // Use a function to calculate trigger dynamically
        triggerStart = () => {
          const triggerEl = (trigger || container) as HTMLElement;
          if (!triggerEl) return "top bottom";
          const triggerTop = triggerEl.getBoundingClientRect().top + window.scrollY;
          const offsetFromTop = savedScrollPosition! - triggerTop;
          // Return format: "offset top" means trigger when element is offset pixels from top of viewport
          return `${Math.round(offsetFromTop)} top`;
        };
      } else {
        // Default trigger
        triggerStart = "top bottom";
      }

      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: trigger || container,
        start: triggerStart,
        end: "bottom top",
        onEnter: () => {
          if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            hasReachedEndRef.current = false;
            gsap.set(dot, { opacity: 1 });
            setDotAtProgress(0);
            timeline.restart();
          }
        },
        onLeave: () => {
          if (hasReachedEndRef.current && onLeaveEnd) {
            hasReachedEndRef.current = false;
            hasStartedRef.current = false;
            timeline.pause();
            timeline.progress(0);
            gsap.to(dot, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                onLeaveEnd();
              },
            });
          }
        },
        onEnterBack: () => {
          if (!hasStartedRef.current) {
            hasStartedRef.current = true;
            hasReachedEndRef.current = false;
            gsap.set(dot, { opacity: 1 });
            setDotAtProgress(0);
            timeline.restart();
          }
        },
        onLeaveBack: () => {
          if (hasReachedEndRef.current && onLeaveEnd) {
            hasReachedEndRef.current = false;
            hasStartedRef.current = false;
            timeline.pause();
            timeline.progress(0);
            gsap.to(dot, {
              opacity: 0,
              duration: 0.3,
              onComplete: () => {
                onLeaveEnd();
              },
            });
          }
        },
      });
    };

    createAnimation();

    // Handle window resize - this is the working path (zoom fixes it)
    const handleResize = () => {
      rebuildPath();
      // Recreate animation with new path
      createAnimation();
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
      if (animationTimelineRef.current) {
        animationTimelineRef.current.kill();
        animationTimelineRef.current = null;
      }
    };
  }, [bezierPoints, isLoading, triggerElement, onReachEnd, onLeaveEnd, savedScrollPosition]);

  if (isLoading || bezierPoints.length < 2) {
    return null;
  }

  return (
    <>
      {debugMode && (
        <div
          className="fixed top-4 left-4 z-50 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg font-bold"
          style={{ pointerEvents: 'auto' }}
        >
          <div>🐛 DEBUG MODE ACTIVE</div>
          <div className="text-sm mt-1">Click anywhere to capture scroll position</div>
          {savedScrollPosition !== null && (
            <div className="text-xs mt-1">Saved: {savedScrollPosition}px</div>
          )}
        </div>
      )}
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
    </>
  );
};

export default ParametricScrollPath;
