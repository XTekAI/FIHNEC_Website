// ============================================
// ARCHIVO: /components/sections/Hero.tsx
// ============================================
"use client";

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from "next/link";
import { motion } from "framer-motion";

// Custom hook for smooth animations
const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime);
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [callback]);
};

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

export default function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Initialize particles (larger "stars")
  useEffect(() => {
    const newParticles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.05,
      vy: (Math.random() - 0.5) * 0.05,
      size: Math.random() * 4 + 4, // Larger size
      opacity: Math.random() * 0.4 + 0.2
    }));
    setParticles(newParticles);
  }, []);
  
  // Animation loop for particles
  useAnimationFrame(useCallback((deltaTime: number) => {
    setParticles(prevParticles => 
      prevParticles.map(particle => {
        let newX = particle.x + particle.vx;
        let newY = particle.y + particle.vy;
        
        // Wrap around
        if (newX < 0) newX = 100;
        if (newX > 100) newX = 0;
        if (newY < 0) newY = 100;
        if (newY > 100) newY = 0;
        
        return { ...particle, x: newX, y: newY };
      })
    );
  }, []));
  
  return (
    <section ref={containerRef} className="advanced-hero-container pt-20">
      {/* Background layer */}
      <div className="absolute inset-0 bg-navy z-0" />
      
      {/* Stars layer */}
      <div className="particles-layer">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size}px rgba(201, 168, 76, 0.4)` // Subtle glow for stars
            }}
          />
        ))}
      </div>
      
      <div className="glow-effect" />
      
      <div className="content-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-block"
          >
            <span className="bg-gold/20 text-gold-light border border-gold/40 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase">
              Desde 1952 | +95 Países | NJ & PHL
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight text-white"
          >
            Transformando Vidas en <span className="text-gold">New Jersey</span> y <span className="text-gold">Philadelphia</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl text-balance font-light"
          >
            No somos una religión, somos una fraternidad de hombres de negocios y profesionales que hemos experimentado un cambio de vida y lo compartimos con otros.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/capitulos" className="bg-gold hover:bg-gold-light text-navy px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg shadow-gold/20 flex items-center justify-center">
              Encuentra tu Capítulo
            </Link>
            <Link href="/quienes-somos" className="bg-transparent hover:bg-white/10 text-white border border-white/30 px-8 py-4 rounded-md font-bold text-lg transition-colors flex items-center justify-center">
              Conoce FIHNEC
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
