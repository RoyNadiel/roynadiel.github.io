import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray = [];
    
    const mouse = {
      x: null,
      y: null,
      radius: 150 // Radio de conexión con el cursor
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(148, 163, 184, 0.5)'; // Puntos sutiles
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const numberOfParticles = (canvas.width * canvas.height) / 7000;
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 1.5) + 0.5;
        const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        const directionX = (Math.random() * 0.8) - 0.4;
        const directionY = (Math.random() * 0.8) - 0.4;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        // Conectar puntos entre sí de manera muy sutil
        for (let b = a; b < particlesArray.length; b++) {
          let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
          
          if (distance < 5000) {
             opacityValue = 1 - (distance / 5000);
             ctx.strokeStyle = `rgba(148, 163, 184, ${opacityValue * 0.15})`;
             ctx.lineWidth = 0.5;
             ctx.beginPath();
             ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
             ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
             ctx.stroke();
          }
        }

        // Conectar al cursor (Efecto Antigravity principal)
        if (mouse.x && mouse.y) {
          let dx = particlesArray[a].x - mouse.x;
          let dy = particlesArray[a].y - mouse.y;
          let distance = dx * dx + dy * dy;
            
          if (distance < mouse.radius * mouse.radius) {
             opacityValue = 1 - (distance / (mouse.radius * mouse.radius));
             
             // Línea hacia el mouse
             ctx.strokeStyle = `rgba(99, 102, 241, ${opacityValue * 0.6})`; // Indigo
             ctx.lineWidth = 1.2;
             ctx.beginPath();
             ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
             ctx.lineTo(mouse.x, mouse.y);
             ctx.stroke();
             
             // Resaltar el punto cuando el mouse está cerca
             ctx.beginPath();
             ctx.arc(particlesArray[a].x, particlesArray[a].y, particlesArray[a].size + (opacityValue * 2), 0, Math.PI * 2);
             ctx.fillStyle = `rgba(139, 92, 246, ${opacityValue * 0.8})`; // Purple
             ctx.fill();
          }
        }
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
