// ============================================
// ARCHIVO: /components/sections/Testimonios.tsx
// ============================================
"use client";

import { testimonios } from "@/data/testimonios";
import TestimonioCard from "../ui/TestimonioCard";

export default function Testimonios() {
  return (
    <section className="py-24 bg-gray-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
            Lo Que Dicen Nuestros Hermanos
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-navy/70 max-w-2xl mx-auto">
            Miles de hombres han experimentado un cambio radical en sus vidas y negocios al permitir que Dios sea el centro de sus decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12">
          {testimonios.map((testimonio) => (
            <TestimonioCard key={testimonio.id} testimonio={testimonio} />
          ))}
        </div>
      </div>
    </section>
  );
}
