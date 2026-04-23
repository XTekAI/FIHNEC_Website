// ============================================
// ARCHIVO: /components/sections/QuienesSomos.tsx
// ============================================
"use client";

import { useState } from "react";
import { Info, Heart, Target, Star, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Tab {
  title: string;
  icon: React.ReactNode;
  content: string | string[];
  bullets?: boolean;
  slogan?: string;
}

export default function QuienesSomos() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: Tab[] = [
    {
      title: "Lo Que Somos",
      icon: <Info size={24} />,
      content: [
        "Somos un grupo de hombres y mujeres que nos desenvolvemos en el medio, algunos obreros, amas de casa, comerciantes o profesionales. Nos reunimos con el propósito de exaltar el nombre de nuestro Señor Jesucristo, testificando de lo que Él ha hecho en nuestras vidas, como lo hemos conocido y como Él ha cambiado nuestras vidas.",
        "No venimos a predicar pues somos un grupo sin distinción de religión, denominación, raza o posición social, pues lo que nos une es Cristo. No queremos parcializar con ninguna doctrina — hablamos específicamente de Jesús. Sin embargo, el Señor nos permite de vez en cuando escuchar su palabra a través de siervos y siervas suyas, pero nuestro propósito principal es testificar.",
      ],
    },
    {
      title: "En Qué Creemos",
      icon: <Heart size={24} />,
      bullets: true,
      content: [
        "Creemos en la iglesia y en congregarnos como un mandato que Jesucristo dejó establecido. Aunque no nos reunimos como una iglesia ni bajo ninguna denominación, sí le exhortamos a que busque con la ayuda del Espíritu Santo un lugar donde congregarse.",
        "Creemos en la divina Trinidad: el Padre, el Hijo y el Espíritu Santo.",
        "Creemos en las mismas manifestaciones del Espíritu Santo.",
        "Creemos que solo hay un camino para llegar a Dios y ese es a través de su Hijo Jesucristo.",
        "Creemos en la Biblia como la Palabra de Dios y en la pronta venida de nuestro Señor Jesucristo, para la cual nos estamos preparando.",
      ],
    },
    {
      title: "Nuestra Visión",
      icon: <Target size={24} />,
      content: "La visión es la gente. La visión es el Espíritu Santo que cambia y transforma vidas. La visión es Dios rompiendo las cadenas de opresión en las personas que aún no tienen una relación con Jesucristo, pero cuando Él llega a sus vidas las hace libres espiritual, psicológica y físicamente. Estas personas pasan de muerte a vida.",
    },
    {
      title: "Lo Que No Somos",
      icon: <XCircle size={24} />,
      bullets: true,
      content: [
        "No somos una nueva religión, denominación o doctrina.",
        "No somos un grupo social como los que funcionan en la localidad.",
        "No somos profesionales de la fe ni pastores — somos hombres en proceso de conversión con la misma o mayor necesidad que usted.",
      ],
    },
    {
      title: "Nuestro Objetivo",
      icon: <Star size={24} />,
      content: "Entablar una relación personal con Jesucristo para que con su ayuda seamos mejores esposos, mejores padres, mejores hijos, mejores ciudadanos, mejores empresarios, mejores hombres y mujeres de negocios. Por eso le invitamos — si siente en su corazón servir en cualquiera de nuestros capítulos, ya sea en un desayuno, almuerzo o cena, venga a formar parte de:",
      slogan: "La Gente Más Feliz de la Tierra",
    },
  ];

  const current = tabs[activeTab];

  return (
    <section className="py-24 bg-gray-soft relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl font-bold text-navy mb-4">La Fraternidad</h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Tab buttons — horizontal scroll en mobile */}
          <div className="flex flex-row overflow-x-auto scrollbar-hide border-b border-gray-100">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`shrink-0 flex-1 min-w-[110px] py-3 px-3 sm:py-4 sm:px-4 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm font-bold transition-colors ${
                  activeTab === index
                    ? "bg-navy text-white"
                    : "text-navy/70 hover:bg-gray-50 hover:text-navy"
                }`}
              >
                <span className={`shrink-0 ${activeTab === index ? "text-gold" : ""}`}>{tab.icon}</span>
                <span className="text-center leading-tight">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6 md:p-12 min-h-[240px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full text-center"
              >
                <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
                  {current.title}
                </h3>

                {/* Bullet list */}
                {current.bullets && Array.isArray(current.content) ? (
                  <ul className="text-left text-base text-navy/80 leading-relaxed max-w-xl mx-auto space-y-4">
                    {(current.content as string[]).map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={`font-bold mt-0.5 shrink-0 text-lg ${current.title === "Lo Que No Somos" ? "text-red-400" : "text-gold"}`}>
                          {current.title === "Lo Que No Somos" ? "✗" : "✓"}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Paragraph(s) */
                  <div className="text-base text-navy/80 leading-relaxed max-w-xl mx-auto space-y-4 text-left">
                    {Array.isArray(current.content)
                      ? (current.content as string[]).map((p, i) => <p key={i}>{p}</p>)
                      : <p>{current.content as string}</p>
                    }
                  </div>
                )}

                {/* Slogan callout */}
                {current.slogan && (
                  <div className="mt-8 border-t border-gold/30 pt-6">
                    <p className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-gold italic">
                      &ldquo;{current.slogan}&rdquo;
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
