// ============================================
// ARCHIVO: /components/sections/ComoUnirse.tsx
// ============================================
import { Search, Map, Users, Sparkles } from "lucide-react";

export default function ComoUnirse() {
  const pasos = [
    {
      icon: <Search size={32} />,
      title: "Busca",
      description: "Encuentra el capítulo más cercano a ti en New Jersey o Philadelphia.",
    },
    {
      icon: <Map size={32} />,
      title: "Visita",
      description: "Asiste a una de nuestras reuniones en restaurantes u hoteles. Sin compromisos.",
    },
    {
      icon: <Users size={32} />,
      title: "Conecta",
      description: "Conoce a otros hombres de negocios que compartirán sus experiencias reales.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Transforma",
      description: "Experimenta el cambio positivo en tu vida personal, familiar y profesional.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
            Cómo Unirse
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Línea conectora visible solo en desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0"></div>

          {pasos.map((paso, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border-4 border-gold rounded-full flex items-center justify-center text-navy mb-6 shadow-lg hover:bg-gold hover:text-white transition-colors duration-300">
                {paso.icon}
              </div>
              <h3 className="font-playfair text-xl font-bold text-navy mb-3">
                {index + 1}. {paso.title}
              </h3>
              <p className="text-navy/70 text-sm sm:text-base">
                {paso.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
