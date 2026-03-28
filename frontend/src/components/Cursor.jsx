import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const { x, y } = mouse.current;
      const radius = 100; // Size of the pixelation circle
      const dotSize = 4;  // Size of the "pixels"
      const spacing = 6;  // Gap between circles

      // We only draw within the bounding box of the cursor for performance
      for (let i = x - radius; i < x + radius; i += spacing) {
        for (let j = y - radius; j < y + radius; j += spacing) {
          
          // Calculate distance from mouse to create the circular shape
          const dx = i - x;
          const dy = j - y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < radius) {
            // Fade the circles at the edges for a "pressure" look
            const opacity = 1 - distance / radius;
            
            ctx.beginPath();
            ctx.arc(i, j, dotSize * opacity, 0, Math.PI * 2);
            
            // Using your portfolio's accent pink with dynamic opacity
            ctx.fillStyle = `rgba(244, 114, 182, ${opacity * 0.5})`;
            ctx.fill();
          }
        }
      }
      animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999] mix-blend-screen"
    />
  );
}