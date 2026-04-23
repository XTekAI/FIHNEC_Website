// ============================================
// ARCHIVO: /components/layout/Header.tsx
// ============================================
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Quiénes Somos', href: '/quienes-somos' },
    { name: 'Capítulos', href: '/capitulos' },
    { name: 'Actividades', href: '/actividades' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-xl py-4 border-b border-gold/20' : 'bg-navy/75 backdrop-blur-md py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="FIHNEC Logo" width={120} height={60} className="object-contain" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium transition-colors text-gray-200 hover:text-gold">
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gold/30">
            <Link href="/contacto" className="bg-gold hover:bg-gold-light text-navy px-5 py-2.5 rounded-md font-semibold transition-colors">
              Contáctanos
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-gold" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-navy border-t border-gold/20 shadow-xl"
          >
            <div className="px-4 py-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white hover:text-gold text-lg font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold text-navy text-center px-4 py-3 rounded-md font-bold mt-4"
              >
                Contáctanos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
