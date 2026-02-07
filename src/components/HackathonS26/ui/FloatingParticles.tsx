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

const FloatingParticles = ({
    count = 8,
    speedMultiplier = 1,
    sizeMultiplier = 1,
}: {
    count?: number;
    speedMultiplier?: number;
    sizeMultiplier?: number;
}) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const animationRef = useRef<number>();
    const mouseRef = useRef({ x: 50, y: 50, active: false });

    useEffect(() => {
        const checkDesktop = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkDesktop();
        window.addEventListener("resize", checkDesktop);

        return () => window.removeEventListener("resize", checkDesktop);
    }, []);

    useEffect(() => {
        const handleMove = (event: MouseEvent) => {
            mouseRef.current = {
                x: (event.clientX / window.innerWidth) * 100,
                y: (event.clientY / window.innerHeight) * 100,
                active: true,
            };
        };

        const handleLeave = () => {
            mouseRef.current = {
                ...mouseRef.current,
                active: false,
            };
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("mouseleave", handleLeave);
        window.addEventListener("blur", handleLeave);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseleave", handleLeave);
            window.removeEventListener("blur", handleLeave);
        };
    }, []);

    useEffect(() => {
        const deviceMultiplier = isDesktop ? 2 : 1;
        const baseSize = 2;
        const sizeRange = 2;
        const mouseRadius = 12;
        const mouseStrength = 0.6;

        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            const startY = i < count * 0.3
                ? Math.random() * 20 - 10
                : Math.random() * -20 - 10;
            const baseVy = Math.random() * 0.08 + 0.05;
            const baseVx = (Math.random() - 0.5) * 0.1;
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: startY,
                size:
                    (Math.random() * sizeRange + baseSize) *
                    deviceMultiplier *
                    sizeMultiplier,
                vx: baseVx * speedMultiplier,
                vy: baseVy * speedMultiplier,
                opacity: Math.random() * 0.4 + 0.6,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 2 * speedMultiplier,
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

                    newVx += Math.sin(p.y * 0.01) * 0.002 * speedMultiplier;

                    const vxClamp = 0.2 * speedMultiplier;
                    newVx = Math.max(-vxClamp, Math.min(vxClamp, newVx));

                    if (isDesktop && mouseRef.current.active) {
                        const dx = p.x - mouseRef.current.x;
                        const dy = p.y - mouseRef.current.y;
                        const distance = Math.hypot(dx, dy);
                        if (distance > 0 && distance < mouseRadius) {
                            const force = (1 - distance / mouseRadius) * mouseStrength;
                            newX += (dx / distance) * force;
                            newY += (dy / distance) * force;
                        }
                    }

                    if (newY > 110) {
                        newY = Math.random() * -20 - 10;
                        newX = Math.random() * 100;
                        newVx = (Math.random() - 0.5) * 0.1;
                        p.vy = (Math.random() * 0.08 + 0.05) * speedMultiplier;
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
