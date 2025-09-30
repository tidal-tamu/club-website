import { useEffect, useState } from "react";

interface Particle {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
}

const FloatingParticles = ({ count = 8 }: { count?: number }) => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        const newParticles: Particle[] = [];
        for (let i = 0; i < count; i++) {
            newParticles.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 6 + 3,
                delay: Math.random() * 3,
                duration: Math.random() * 8 + 6,
            });
        }
        setParticles(newParticles);
    }, [count]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <div
                    key={particle.id}
                    className="absolute rounded-full opacity-80 animate-firefly-dance"
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        backgroundColor: 'hsl(48 100% 70%)',
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`,
                        boxShadow: `0 0 ${particle.size * 3}px hsl(48 100% 70%), 0 0 ${particle.size * 6}px hsl(48 100% 50%)`,
                    }}
                />
            ))}

            {/* Additional floating elements */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full animate-firefly-dance opacity-70" style={{ backgroundColor: 'hsl(48 100% 70%)', boxShadow: '0 0 10px hsl(48 100% 70%)' }} />
            <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full animate-firefly-dance opacity-80" style={{ backgroundColor: 'hsl(48 100% 70%)', boxShadow: '0 0 8px hsl(48 100% 70%)' }} />
            <div className="absolute top-1/2 left-3/4 w-4 h-4 rounded-full animate-firefly-dance opacity-60" style={{ backgroundColor: 'hsl(48 100% 70%)', boxShadow: '0 0 12px hsl(48 100% 70%)' }} />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full animate-firefly-dance opacity-70" style={{ backgroundColor: 'hsl(48 100% 70%)', animationDelay: '2s', boxShadow: '0 0 8px hsl(48 100% 70%)' }} />
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full animate-firefly-dance opacity-60" style={{ backgroundColor: 'hsl(48 100% 70%)', animationDelay: '1s', boxShadow: '0 0 10px hsl(48 100% 70%)' }} />
        </div>
    );
};

export default FloatingParticles;