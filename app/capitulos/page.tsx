import { Metadata } from "next";
import Link from "next/link";
import CapitulosNJ from "@/components/sections/CapitulosNJ";
import CapitulosPHL from "@/components/sections/CapitulosPHL";
import CapitulosVA from "@/components/sections/CapitulosVA";
import CapitulosMD from "@/components/sections/CapitulosMD";

export const metadata: Metadata = {
  title: "Capítulos – Zona Noreste | FIHNEC NJ · PA · VA · MD",
  description: "Encuentra el capítulo de FIHNEC más cercano en la Zona Noreste: New Jersey, Pennsylvania, Virginia y Maryland.",
};

const estados = [
  { label: "New Jersey", badge: "NJ", href: "/capitulos/new-jersey" },
  { label: "Pennsylvania", badge: "PA", href: "/capitulos/philadelphia" },
  { label: "Virginia", badge: "VA", href: "/capitulos/virginia" },
  { label: "Maryland", badge: "MD", href: "/capitulos/maryland" },
];

export default function CapitulosPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <div className="bg-navy py-16 text-center px-4">
        <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">FGBMFI · FIHNEC</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Zona Noreste
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Más de 35 capítulos activos en New Jersey, Pennsylvania, Virginia y Maryland reuniéndose cada semana.
        </p>
        {/* State badges */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {["NJ", "PA", "VA", "MD"].map((s) => (
            <span key={s} className="bg-gold/20 border border-gold/40 text-gold font-bold px-4 py-1.5 rounded-full text-sm">
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Filter buttons */}
      <div className="bg-gray-soft py-8 px-4">
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {estados.map(({ label, badge, href }) => (
            <Link
              key={badge}
              href={href}
              className="bg-white hover:border-gold border border-gray-200 text-navy font-bold py-3 px-6 rounded-md shadow-sm transition-colors min-h-[44px] inline-flex items-center gap-2"
            >
              <span className="bg-navy text-white text-xs font-bold px-2 py-0.5 rounded">{badge}</span>
              Ver solo {label}
            </Link>
          ))}
        </div>
      </div>

      <CapitulosNJ />
      <CapitulosPHL />
      <CapitulosVA />
      <CapitulosMD />
    </div>
  );
}
