// ============================================
// ARCHIVO: /components/ui/CapituloCard.tsx
// ============================================
import { Capitulo } from "@/lib/types";
import { MapPin, Clock, Calendar, User } from "lucide-react";
import Image from "next/image";

interface Props {
  capitulo: Capitulo;
}

export default function CapituloCard({ capitulo }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-gold hover:shadow-md transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-48 w-full bg-gray-200">
        <Image 
          src={capitulo.imagen || "/images/capitulo-placeholder.jpg"} 
          alt={`Capítulo ${capitulo.nombre} en ${capitulo.ciudad}`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-navy text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          {capitulo.ciudad}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-playfair text-xl font-bold text-navy mb-4 group-hover:text-gold transition-colors">
          {capitulo.nombre}
        </h3>
        
        <div className="space-y-3 mb-6 flex-grow text-sm text-navy/80">
          <div className="flex items-start gap-3">
            <MapPin className="text-gold shrink-0 mt-0.5" size={16} />
            <span>
              <strong>{capitulo.lugar}</strong><br/>
              {capitulo.direccion}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="text-gold shrink-0" size={16} />
            <span>{capitulo.dia}s</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-gold shrink-0" size={16} />
            <span>{capitulo.hora}</span>
          </div>
          <div className="flex items-center gap-3">
            <User className="text-gold shrink-0" size={16} />
            <span>Líder: {capitulo.lider}</span>
          </div>
        </div>
        
        <a 
          href={`tel:${capitulo.contacto}`} 
          className="block w-full text-center bg-gray-soft text-navy text-sm font-semibold py-3 rounded-lg border border-gray-200 hover:bg-gold hover:text-white hover:border-gold transition-colors min-h-[44px]"
        >
          Contactar: {capitulo.contacto}
        </a>
      </div>
    </div>
  );
}
