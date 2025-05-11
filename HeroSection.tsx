import React, { useEffect, useRef } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Particle settings
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        
        // Purple to blue gradient for particles
        const purpleHue = Math.floor(Math.random() * 60) + 240; // 240-300 hue range (blue to purple)
        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 30) + 50;
        this.color = `hsla(${purpleHue}, ${saturation}%, ${lightness}%, 0.8)`;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Connect particles with lines if they're close enough
    const connectParticles = () => {
      if (!ctx) return;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(148, 97, 255, ${1 - distance/150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particle animation background */}
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-[#1a0b2e] to-black"
      />
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 mt-20">
        <div className="max-w-3xl">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">
                Transforming Visions
              </span>
              <br />
              Into Digital Reality
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
              Kognify Matrix Labs delivers cutting-edge technology solutions that empower businesses to thrive in the digital landscape.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-3 rounded-full 
                font-medium hover:shadow-[0_0_15px_rgba(146,80,245,0.5)] transition-all duration-300 
                flex items-center justify-center sm:justify-start group w-full sm:w-auto"
              >
                Get a Free Consultation
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#services" 
                className="bg-transparent border border-purple-500 text-white px-8 py-3 rounded-full 
                font-medium hover:bg-purple-900/30 transition-all duration-300 
                flex items-center justify-center sm:justify-start group w-full sm:w-auto"
              >
                Explore Our Services
                <ChevronRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-purple-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-purple-500 rounded-full animate-bounce-slow" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;