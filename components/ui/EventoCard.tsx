// ============================================
// ARCHIVO: /components/ui/EventoCard.tsx
// ============================================
import { Evento } from "@/lib/types";
import { Calendar, Clock, MapPin } from "lucide-react";
import Image from "next/image";

interface Props {
  evento: Evento;
}

export default function EventoCard({ evento }: Props) {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300">
      <div className="relative md:w-2/5 h-48 md:h-auto bg-gray-200">
        <Image 
          src={evento.imagen || "/images/evento-placeholder.jpg"} 
          alt={evento.titulo}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wider">
          {evento.region === "AMBOS" ? "NJ & PHL" : evento.region}
        </div>
      </div>
      
      <div className="p-6 md:w-3/5 flex flex-col justify-center">
        <h3 className="font-playfair text-xl sm:text-2xl font-bold text-navy mb-2">
          {evento.titulo}
        </h3>
        
        <p className="text-navy/70 mb-4 line-clamp-2">
          {evento.descripcion}
        </p>
        
        <div className="space-y-2 text-sm font-medium text-navy/90 mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="text-gold" size={16} />
            <span>{evento.fecha}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="text-gold" size={16} />
            <span>{evento.hora}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="text-gold shrink-0 mt-0.5" size={16} />
            <span>{evento.lugar}, {evento.ciudad}</span>
          </div>
        </div>
        
        <div>
          <button className="text-gold font-bold hover:text-navy transition-colors flex items-center gap-1 group">
            Más información 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
