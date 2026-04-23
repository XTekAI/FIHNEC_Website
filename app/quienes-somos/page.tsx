// ============================================
// ARCHIVO: /app/quienes-somos/page.tsx
// ============================================
import { Metadata } from "next";
import QuienesSomos from "@/components/sections/QuienesSomos";
import Reuniones from "@/components/sections/Reuniones";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Quiénes Somos | FIHNEC NJ & Philadelphia",
  description: "Conoce más sobre la Fraternidad Internacional de Hombres de Negocios del Evangelio Completo. Nuestra historia, creencias y visión.",
};

export default function QuienesSomosPage() {
  return (
    <div className="pt-24">
      <div className="bg-navy py-16 text-center">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Nuestra Historia y Misión
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <QuienesSomos />
      <Reuniones />

      {/* Fundador */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold font-semibold uppercase tracking-widest text-sm mb-3">Biografía del Fundador</p>
            <h2 className="font-playfair text-4xl font-bold text-navy mb-4">Demos Shakarian</h2>
            <p className="text-navy/50 text-lg">1913 – 1993</p>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-4"></div>
          </div>

          <div className="bg-gray-soft rounded-2xl p-8 md:p-12 border border-gray-100 space-y-6 text-lg text-navy/80 leading-relaxed">
            <p>
              Demos Shakarian fue un hombre lleno del Espíritu Santo, un hombre que caminó con Dios y que amó a la gente. Demos fue un productor de leche y vendedor de bienes raíces. Con su padre Isaac construyeron la más grande e independiente lechería del mundo.
            </p>
            <p>
              Demos fue verdaderamente un pilar de su comunidad. Inició la Fraternidad Internacional de Hombres de Negocios del Evangelio Completo con tan solo 21 hombres. Hoy hay capítulos en más de 65 naciones del mundo, con más de un millón de personas que asisten semanalmente a sus reuniones.
            </p>
            <p>
              Adicionalmente, él y su esposa Rose contribuyeron para escribir el libro{" "}
              <span className="font-semibold text-navy italic">"La Gente Más Feliz de la Tierra"</span>,
              {" "}que narra la historia del nacimiento de la Fraternidad — usada por Dios para cambiar las vidas de hombres y mujeres de todo el mundo.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
