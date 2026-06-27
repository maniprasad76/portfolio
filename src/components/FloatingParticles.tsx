import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(30, Math.floor((width * height) / 40000)); // Responsive particle density

    // Mouse coordinates to add a gentle repellent force
    const mouse = { x: -1000, y: -1000, radius: 120 };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25, // Slow horizontal drift
        vy: (Math.random() - 0.5) * 0.25 - 0.15, // Upward drift
        radius: Math.random() * 2 + 1, // 1px to 3px dots
        alpha: Math.random() * 0.4 + 0.1,
        targetAlpha: Math.random() * 0.4 + 0.1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        // Drift movement
        p.x += p.vx;
        p.y += p.vy;

        // Push away from mouse gently
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          // Gently nudge away
          p.x += Math.cos(angle) * force * 1.2;
          p.y += Math.sin(angle) * force * 1.2;
        }

        // Wrap around boundaries
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        
        // Alternate between subtle red accent and subtle charcoal dust
        const isAccent = p.radius > 2.2;
        const baseColor = isAccent ? '246, 36, 64' : '27, 27, 27';
        ctx.fillStyle = `rgba(${baseColor}, ${p.alpha})`;
        ctx.fill();

        // Subtle alpha breathing
        if (Math.random() < 0.01) {
          p.targetAlpha = Math.random() * 0.4 + 0.1;
        }
        p.alpha += (p.targetAlpha - p.alpha) * 0.05;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animationFrameId);
      } else {
        draw();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full select-none"
      style={{ mixBlendMode: 'multiply', opacity: 0.8 }}
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;
