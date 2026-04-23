// ============================================
// ARCHIVO: /components/sections/CapitulosPHL.tsx
// ============================================
import Link from "next/link";
import { capitulosPHL } from "@/data/capitulos-phl";
import CapituloCard from "../ui/CapituloCard";

export default function CapitulosPHL() {
  // Solo mostramos los primeros 3 para la landing
  const capitulosPreview = capitulosPHL.slice(0, 3);

  return (
    <section className="py-20 bg-gray-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
              Capítulos en Philadelphia
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full"></div>
          </div>
          <Link 
            href="/capitulos/philadelphia" 
            className="hidden md:flex text-gold font-bold hover:text-navy transition-colors items-center gap-1 group mt-4 md:mt-0"
          >
            Ver todos los capítulos PHL <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capitulosPreview.map((capitulo) => (
            <CapituloCard key={capitulo.id} capitulo={capitulo} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link 
            href="/capitulos/philadelphia" 
            className="inline-flex text-gold font-bold hover:text-navy transition-colors items-center gap-1"
          >
            Ver todos los capítulos PHL →
          </Link>
        </div>
      </div>
    </section>
  );
}
