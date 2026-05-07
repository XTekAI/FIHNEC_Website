import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { capitulosVA } from "@/data/capitulos-va";
import CapituloCard from "@/components/ui/CapituloCard";

export const metadata: Metadata = {
  title: "Capítulos en Virginia | FIHNEC Zona Noreste",
  description: "Encuentra el capítulo de FIHNEC más cercano en Virginia. Zona Noreste — NJ, PA, VA, MD.",
};

export default function CapitulosVAPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">
      <div className="bg-navy py-16 text-center px-4 relative">
        <Link href="/capitulos" className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-medium">
          <ArrowLeft size={16} /> Todos los capítulos
        </Link>
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-2">Zona Noreste</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Capítulos en Virginia
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capitulosVA.map((capitulo) => (
            <CapituloCard key={capitulo.id} capitulo={capitulo} />
          ))}
        </div>
      </div>
    </div>
  );
}
