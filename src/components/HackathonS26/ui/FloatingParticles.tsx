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
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);

        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useEffect(() => {
        const sizeMultiplier = isDesktop ? 2 : 1;
        const baseSize = 2;
        const sizeRange = 2;

        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const startY = i < count * 0.3
                ? Math.random() * 20 - 10
                : Math.random() * -20 - 10;
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: startY,
                size: (Math.random() * sizeRange + baseSize) * sizeMultiplier,
                vx: (Math.random() - 0.5) * 0.1,
                vy: Math.random() * 0.08 + 0.05,
                opacity: Math.random() * 0.4 + 0.6,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2,
            });
        }
        setParticles(newParticles);

        const animate = () => {
            setParticles((prev) =>
                prev.map((p) => {
                    let newX = p.x + p.vx;
                    let newY = p.y + p.vy;
                    let newVx = p.vx;
                    let newRotation = p.rotation + p.rotationSpeed;

                    newVx += Math.sin(p.y * 0.01) * 0.002;

                    newVx = Math.max(-0.2, Math.min(0.2, newVx));

                    if (newY > 110) {
                        newY = Math.random() * -20 - 10;
                        newX = Math.random() * 100;
                        newVx = (Math.random() - 0.5) * 0.1;
                        p.vy = Math.random() * 0.08 + 0.05;
                        p.opacity = Math.random() * 0.4 + 0.6;
                    }

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
