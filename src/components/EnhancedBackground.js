import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Enhanced Particle System with Interactive Effects
export const EnhancedParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 150;
    const mouse = { x: 0, y: 0 };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        this.originalSize = this.size;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Mouse interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.size = this.originalSize * 2;
          this.opacity = 0.8;
        } else {
          this.size = this.originalSize;
          this.opacity = Math.random() * 0.5 + 0.2;
        }

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Mouse move event
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw connections
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.save();
            ctx.globalAlpha = (100 - distance) / 100 * 0.3;
            ctx.strokeStyle = '#3b82f6';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

// Animated Gradient Waves
export const GradientWaves = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
      
      <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 60% 40%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.2) 0%, transparent 50%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />
    </div>
  );
};

// Interactive Light Rays
export const LightRays = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [i * 45, i * 45 + 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-1 h-96 bg-gradient-to-t from-transparent via-blue-400/20 to-transparent origin-bottom"
          style={{ transform: `translate(-50%, -50%) rotate(${i * 45}deg)` }}
        />
      ))}
    </div>
  );
};

// Floating Geometric Shapes
export const FloatingShapes = () => {
  const shapes = [
    { type: 'circle', size: 'w-32 h-32', color: 'from-blue-500/20 to-purple-500/20' },
    { type: 'square', size: 'w-24 h-24', color: 'from-purple-500/20 to-pink-500/20' },
    { type: 'triangle', size: 'w-20 h-20', color: 'from-pink-500/20 to-red-500/20' },
    { type: 'hexagon', size: 'w-28 h-28', color: 'from-cyan-500/20 to-blue-500/20' }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, Math.random() * 200 - 100],
            y: [0, Math.random() * 200 - 100],
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20 + index * 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute ${shape.size} bg-gradient-to-r ${shape.color} rounded-full blur-xl`}
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 25}%`
          }}
        />
      ))}
    </div>
  );
};

// Premium Background with All Effects
export const PremiumBackground = () => {
  return (
    <>
      <EnhancedParticleBackground />
      <GradientWaves />
      <LightRays />
      <FloatingShapes />
    </>
  );
};

export default PremiumBackground;
