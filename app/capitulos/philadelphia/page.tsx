// ============================================
// ARCHIVO: /app/capitulos/philadelphia/page.tsx
// ============================================
import { Metadata } from "next";
import { capitulosPHL } from "@/data/capitulos-phl";
import CapituloCard from "@/components/ui/CapituloCard";

export const metadata: Metadata = {
  title: "Capítulos en Philadelphia | FIHNEC",
  description: "Encuentra el capítulo de FIHNEC más cercano a ti en Philadelphia.",
};

export default function CapitulosPHLPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Capítulos en Philadelphia
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capitulosPHL.map((capitulo) => (
            <CapituloCard key={capitulo.id} capitulo={capitulo} />
          ))}
        </div>
      </div>
    </div>
  );
}
