// ============================================
// ARCHIVO: /components/ui/TestimonioCard.tsx
// ============================================
import { Testimonio } from "@/lib/types";
import { Quote } from "lucide-react";

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
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
          <span className="font-playfair font-bold text-gold text-base">
            {testimonio.nombre.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold text-navy">{testimonio.nombre}</h4>
          <p className="text-sm text-gold-light font-medium">{testimonio.ciudad}, {testimonio.region}</p>
        </div>
      </div>
    </div>
  );
}
