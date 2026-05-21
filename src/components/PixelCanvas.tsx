import { useEffect, useRef } from 'react';

export default function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const pixels: { x: number; y: number; size: number; speedY: number; opacity: number; color: string }[] = [];
    const colors = ['#9333EA', '#3B82F6', '#8B5CF6', '#ffffff'];

    for (let i = 0; i < 100; i++) {
      pixels.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      pixels.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);

        p.y -= p.speedY; // Float upwards
        // Flicker effect
        p.opacity += (Math.random() - 0.5) * 0.1;
        p.opacity = Math.max(0.1, Math.min(1, p.opacity));

        // Reset when out of screen (at the top)
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
      });

      requestAnimationFrame(draw);
    };

    const frameId = requestAnimationFrame(draw);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
