// ============================================
// ARCHIVO: /components/sections/Actividades.tsx
// ============================================
"use client";

import { useState } from "react";
import Link from "next/link";
import { actividades } from "@/data/actividades";
import EventoCard from "../ui/EventoCard";
import RegionFilter from "../ui/RegionFilter";

export default function Actividades() {
  const [activeRegion, setActiveRegion] = useState<"TODOS" | "NJ" | "PHL">("TODOS");

  const filteredEventos = actividades.filter(evento => {
    if (activeRegion === "TODOS") return true;
    if (evento.region === "AMBOS") return true;
    return evento.region === activeRegion;
  }).slice(0, 4); // Limitar a 4 para la landing

  return (
    <section className="py-24 bg-navy relative">
      {/* Elemento decorativo de fondo */}
      <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gold opacity-5 rounded-bl-[100%] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Próximas Actividades
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8"></div>
          
          <RegionFilter 
            activeRegion={activeRegion} 
            onRegionChange={setActiveRegion} 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredEventos.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
          {filteredEventos.length === 0 && (
            <div className="col-span-1 lg:col-span-2 text-center py-12">
              <p className="text-gray-400 text-lg">No hay eventos programados para esta región en este momento.</p>
            </div>
          )}
        </div>

        <div className="text-center">
          <Link 
            href="/actividades" 
            className="inline-block border border-gold text-gold hover:bg-gold hover:text-navy px-8 py-3 rounded-md font-bold transition-colors"
          >
            Ver Calendario Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
