import React, { useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  isCross?: boolean;
}

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useApp();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const isDark = theme === 'dark';
    const particlesCount = Math.min(Math.floor(window.innerWidth / 30), 45);

    const colors = isDark
      ? ['rgba(56, 189, 248, 0.25)', 'rgba(45, 212, 191, 0.22)', 'rgba(129, 140, 248, 0.18)', 'rgba(94, 234, 212, 0.2)']
      : ['rgba(2, 132, 199, 0.18)', 'rgba(13, 148, 136, 0.16)', 'rgba(59, 130, 246, 0.14)', 'rgba(16, 185, 129, 0.15)'];

    const particles: Particle[] = [];

    for (let i = 0; i < particlesCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 24 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        isCross: Math.random() > 0.75, // 25% of particles are gentle medical crosses
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render connected soothing lines if close
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${0.08 * (1 - dist / 120)})`
              : `rgba(13, 148, 136, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        // Soft mouse reaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (140 - dist) / 140;
          p.x -= (dx / dist) * force * 0.6;
          p.y -= (dy / dist) * force * 0.6;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -40) p.x = width + 40;
        if (p.x > width + 40) p.x = -40;
        if (p.y < -40) p.y = height + 40;
        if (p.y > height + 40) p.y = -40;

        if (p.isCross) {
          // Draw soft medical cross
          ctx.save();
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 3;
          ctx.lineCap = 'round';
          const arm = p.radius * 0.65;
          ctx.beginPath();
          ctx.moveTo(p.x - arm, p.y);
          ctx.lineTo(p.x + arm, p.y);
          ctx.moveTo(p.x, p.y - arm);
          ctx.lineTo(p.x, p.y + arm);
          ctx.stroke();
          ctx.restore();
        } else {
          // Draw soothing glowing orbs
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
          gradient.addColorStop(0, p.color);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Gentle ambient colored blurs on background corners */}
      <div className="absolute -top-28 -left-28 w-96 h-96 rounded-full bg-teal-400/10 dark:bg-teal-500/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-sky-400/10 dark:bg-sky-500/10 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '3s' }} />
      <div className="absolute -bottom-28 left-1/4 w-96 h-96 rounded-full bg-emerald-400/10 dark:bg-emerald-500/10 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '5s' }} />
    </div>
  );
};
