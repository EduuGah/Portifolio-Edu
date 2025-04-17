import { useRef, useEffect } from 'react';

export default function PurpleParticles() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = Array.from({ length: 150 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 2,
            speed: Math.random() * 0.005 + 0.5,
            opacity: Math.random() * 0.5 + 0.2
        }));

        function draw() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(138,43,226,${p.opacity})`;
                ctx.fill();

                p.y += p.speed;
                if (p.y - p.radius > height) {
                    p.y = -p.radius;
                    p.x = Math.random() * width;
                }
            });
            requestAnimationFrame(draw);
        }
        draw();

        const onResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: -1    
            }}
        />
    );
}
