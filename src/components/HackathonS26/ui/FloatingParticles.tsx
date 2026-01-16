import { useEffect, useState, useRef } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    vx: number;
    vy: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
}

const FloatingParticles = ({ count = 8 }: { count?: number }) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const animationRef = useRef<number>();

    useEffect(() => {
        // Check if desktop (screen width >= 1024px)
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };
        
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    useEffect(() => {
        // Initialize particles with responsive sizes
        // Desktop: 4-8px, Mobile: 2-4px
        const sizeMultiplier = isDesktop ? 2 : 1;
        const baseSize = 2;
        const sizeRange = 2;
        
        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            // Start particles at random x positions, spread them vertically including visible area
            // Mix of particles starting above viewport and already visible at top
            const startY = i < count * 0.3 
                ? Math.random() * 20 - 10 // Some start visible at top (0-20% from top)
                : Math.random() * -20 - 10; // Others start above viewport
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: startY,
                size: (Math.random() * sizeRange + baseSize) * sizeMultiplier,
                vx: (Math.random() - 0.5) * 0.1, // Slight horizontal drift (reduced)
                vy: Math.random() * 0.08 + 0.05, // Downward fall speed (0.05-0.13, slower)
                opacity: Math.random() * 0.4 + 0.6, // More visible, 0.6-1.0
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2, // Slow rotation
            });
        }
        setParticles(newParticles);

        // Snow falling animation
        const animate = () => {
            setParticles((prev) =>
                prev.map((p) => {
                    let newX = p.x + p.vx;
                    let newY = p.y + p.vy;
                    let newVx = p.vx;
                    let newRotation = p.rotation + p.rotationSpeed;

                    // Add subtle horizontal sway (wind effect)
                    newVx += Math.sin(p.y * 0.01) * 0.002;

                    // Clamp horizontal velocity to keep it subtle
                    newVx = Math.max(-0.2, Math.min(0.2, newVx));

                    // Reset particle to top when it falls off screen
                    if (newY > 110) {
                        newY = Math.random() * -20 - 10;
                        newX = Math.random() * 100;
                        // Reset with new random properties for variety
                        newVx = (Math.random() - 0.5) * 0.1;
                        p.vy = Math.random() * 0.08 + 0.05;
                        p.opacity = Math.random() * 0.4 + 0.6;
                    }

                    // Wrap horizontally
                    if (newX < -5) newX = 105;
                    if (newX > 105) newX = -5;

                    return {
                        ...p,
                        x: newX,
                        y: newY,
                        vx: newVx,
                        rotation: newRotation,
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
    }, [count, isDesktop]);

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
                        backgroundColor: `rgba(255, 255, 255, ${particle.opacity})`,
                        transform: `translate(-50%, -50%) rotate(${particle.rotation}deg)`,
                        opacity: particle.opacity,
                        boxShadow: `0 0 ${particle.size * 0.5}px rgba(255, 255, 255, ${particle.opacity * 0.5})`,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
