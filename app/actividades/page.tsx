// ============================================
// ARCHIVO: /app/actividades/page.tsx
// ============================================
import { Metadata } from "next";
import { actividades } from "@/data/actividades";
import EventoCard from "@/components/ui/EventoCard";

export const metadata: Metadata = {
  title: "Actividades y Eventos | FIHNEC NJ & Philadelphia",
  description: "Calendario de actividades, cenas, desayunos y convenciones de la Fraternidad Internacional de Hombres de Negocios en NJ y PHL.",
};

export default function ActividadesPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Próximas Actividades
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Te invitamos a participar en nuestros eventos especiales diseñados para inspirarte y equiparte.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col space-y-8">
          {actividades.map((evento) => (
            <EventoCard key={evento.id} evento={evento} />
          ))}
        </div>
      </div>
    </div>
  );
}
