// ============================================
// ARCHIVO: /app/capitulos/page.tsx
// ============================================
import { Metadata } from "next";
import Link from "next/link";
import CapitulosNJ from "@/components/sections/CapitulosNJ";
import CapitulosPHL from "@/components/sections/CapitulosPHL";

export const metadata: Metadata = {
  title: "Capítulos en New Jersey y Philadelphia | FIHNEC",
  description: "Encuentra el capítulo de FIHNEC más cercano a ti en New Jersey o Philadelphia y únete a nuestra próxima reunión.",
};

export default function CapitulosPage() {
  return (
    <div className="pt-24">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Nuestros Capítulos
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Encuentra tu lugar. Tenemos capítulos en toda la región reuniéndose semanalmente.
        </p>
      </div>

      <div className="bg-gray-soft py-8 flex justify-center gap-4">
        <Link href="/capitulos/new-jersey" className="bg-white hover:border-gold border border-gray-200 text-navy font-bold py-3 px-6 rounded-md shadow-sm transition-colors min-h-[44px] inline-flex items-center">
          Ver solo New Jersey
        </Link>
        <Link href="/capitulos/philadelphia" className="bg-white hover:border-gold border border-gray-200 text-navy font-bold py-3 px-6 rounded-md shadow-sm transition-colors min-h-[44px] inline-flex items-center">
          Ver solo Philadelphia
        </Link>
      </div>

      <CapitulosNJ />
      <CapitulosPHL />
    </div>
  );
}
