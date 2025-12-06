import { useEffect, useState, useRef } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    opacity: number;
    opacityDirection: number;
}

const FloatingParticles = ({
    count = 8,
    sizeMultiplier = 1,
}: {
    count?: number;
    sizeMultiplier?: number;
}) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const animationRef = useRef<number>();

    useEffect(() => {
        // Check if desktop (screen width >= 1024px)
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);

        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useEffect(() => {
        // Initialize particles with responsive sizes
        // Desktop: 5.5-11px, Mobile: 2.5-5px
        // Can be scaled up with sizeMultiplier parameter
        const deviceMultiplier = isDesktop ? 2.2 : 1;
        const baseSize = 2.5 * sizeMultiplier;
        const sizeRange = 2.5 * sizeMultiplier;

        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: (Math.random() * sizeRange + baseSize) * deviceMultiplier,
                vx: (Math.random() - 0.5) * 0.2, // Slower random x velocity
                vy: (Math.random() - 0.5) * 0.2, // Slower random y velocity
                opacity: Math.random() * 0.5 + 0.3, // Start with random opacity 0.3-0.8
                opacityDirection: Math.random() > 0.5 ? 1 : -1, // Random fade direction
            });
        }
        setParticles(newParticles);

        // Continuous random motion animation
        const animate = () => {
            setParticles((prev) =>
                prev.map((p) => {
                    let newX = p.x + p.vx;
                    let newY = p.y + p.vy;
                    let newVx = p.vx;
                    let newVy = p.vy;

                    // Wrap around edges instead of bouncing
                    if (newX < 0) newX = 100;
                    if (newX > 100) newX = 0;
                    if (newY < 0) newY = 100;
                    if (newY > 100) newY = 0;

                    // Add subtle random drift
                    newVx += (Math.random() - 0.5) * 0.01;
                    newVy += (Math.random() - 0.5) * 0.01;

                    // Clamp velocity to keep it slow
                    newVx = Math.max(-0.3, Math.min(0.3, newVx));
                    newVy = Math.max(-0.3, Math.min(0.3, newVy));

                    // Update opacity for pulsing effect
                    let newOpacity = p.opacity + p.opacityDirection * 0.003;
                    let newOpacityDirection = p.opacityDirection;

                    // Reverse direction at opacity limits
                    if (newOpacity >= 0.9) {
                        newOpacity = 0.9;
                        newOpacityDirection = -1;
                    } else if (newOpacity <= 0.2) {
                        newOpacity = 0.2;
                        newOpacityDirection = 1;
                    }

                    return {
                        ...p,
                        x: newX,
                        y: newY,
                        vx: newVx,
                        vy: newVy,
                        opacity: newOpacity,
                        opacityDirection: newOpacityDirection,
                    };
                })
            );
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [count, isDesktop, sizeMultiplier]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: `rgba(255, 230, 100, ${particle.opacity})`,
                        boxShadow: `0 0 ${
                            particle.size * 5
                        }px rgba(255, 230, 100, ${
                            particle.opacity * 0.8
                        }), 0 0 ${particle.size * 10}px rgba(255, 200, 50, ${
                            particle.opacity * 0.5
                        })`,
                        transform: "translate(-50%, -50%)",
                        opacity: particle.opacity,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
