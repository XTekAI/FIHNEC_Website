// ============================================
// ARCHIVO: /components/sections/Reuniones.tsx
// ============================================
import { Users, Heart, Zap, Baby, HeartHandshake } from "lucide-react";

const reuniones = [
  {
    icon: <Users size={32} />,
    titulo: "Hombres",
    descripcion:
      "Hombres de toda condición — obreros, comerciantes, profesionales — se reúnen en desayunos, almuerzos y cenas para testificar cómo Dios ha cambiado sus vidas.",
  },
  {
    icon: <Heart size={32} />,
    titulo: "Mujeres",
    descripcion:
      "Un espacio donde mujeres comparten abiertamente su experiencia con Cristo, se apoyan mutuamente y crecen en fe sin importar su trasfondo o denominación.",
  },
  {
    icon: <Zap size={32} />,
    titulo: "Jóvenes Varones y Damas",
    descripcion:
      "Su propio espacio mensual para descubrir propósito, construir comunidad y crecer en fe. NJ, PA y VA.",
  },
  {
    icon: <HeartHandshake size={32} />,
    titulo: "Parejas",
    descripcion:
      "Eventos mensuales para matrimonios y parejas. Conexión, fe compartida y crecimiento juntos. NJ, PA y VA.",
  },
  {
    icon: <Baby size={32} />,
    titulo: "Niños",
    descripcion:
      "Los más pequeños también son parte de FIHNEC. Desde temprana edad aprenden que tienen un Dios que los ama y una comunidad que los recibe.",
  },
];

export default function Reuniones() {
  return (
    <section className="py-24 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">
            Reuniones para Toda la Familia
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            En FIHNEC creemos que la fe transforma a toda la familia. Por eso
            contamos con reuniones para cada uno de sus miembros.
          </p>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reuniones.map((r) => (
            <div
              key={r.titulo}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/10 hover:border-gold/40 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold mb-6 group-hover:bg-gold/20 transition-colors">
                {r.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-white mb-3">
                {r.titulo}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {r.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
