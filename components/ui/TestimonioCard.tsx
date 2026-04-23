// ============================================
// ARCHIVO: /components/ui/TestimonioCard.tsx
// ============================================
import { Testimonio } from "@/lib/types";
import { Quote } from "lucide-react";
import Image from "next/image";

interface Props {
  testimonio: Testimonio;
}

export default function TestimonioCard({ testimonio }: Props) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative mt-8">
      <div className="absolute -top-6 left-8 bg-gold w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
        <Quote className="text-white" size={24} fill="currentColor" />
      </div>
      
      <p className="text-navy/80 italic mb-6 mt-4 relative z-10 text-base sm:text-lg">
        &ldquo;{testimonio.texto}&rdquo;
      </p>
      
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gold">
          <Image 
            src={testimonio.avatar || "/images/avatar-placeholder.jpg"} 
            alt={`Avatar de ${testimonio.nombre}`}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-navy">{testimonio.nombre}</h4>
          <p className="text-sm text-gold-light font-medium">{testimonio.ciudad}, {testimonio.region}</p>
        </div>
      </div>
    </div>
  );
}
