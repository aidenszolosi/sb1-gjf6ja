import React, { useEffect, useRef } from 'react';

const AudioVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bars = 50;
    const barWidth = canvas.width / bars;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bars; i++) {
        const height = Math.random() * canvas.height;
        const hue = (i / bars) * 360;

        ctx.fillStyle = `hsla(${hue}, 100%, 50%, 0.5)`;
        ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 1, height);
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="glassmorphic p-4">
      <canvas ref={canvasRef} width="640" height="100" className="w-full rounded-lg" />
    </div>
  );
};

export default AudioVisualizer;