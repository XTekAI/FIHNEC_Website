// ============================================
// ARCHIVO: /app/page.tsx
// ============================================
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PresidenteNacional from "@/components/sections/PresidenteNacional";
import QuienesSomos from "@/components/sections/QuienesSomos";
import CapitulosNJ from "@/components/sections/CapitulosNJ";
import CapitulosPHL from "@/components/sections/CapitulosPHL";
import Actividades from "@/components/sections/Actividades";
import Testimonios from "@/components/sections/Testimonios";
import Reuniones from "@/components/sections/Reuniones";
import Fundador from "@/components/sections/Fundador";
import ComoUnirse from "@/components/sections/ComoUnirse";
import CTABanner from "@/components/sections/CTABanner";

// Metadatos definidos globalmente en layout.tsx, pero se podrían sobreescribir aquí
export default function Home() {
  return (
    <>
      {/* JSON-LD: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "FIHNEC Zona Noreste",
            "alternateName": "Fraternidad Internacional de Hombres de Negocios del Evangelio Completo — Sección Noreste",
            "url": "https://fihnec-nj-phl.org",
            "logo": "https://fihnec-nj-phl.org/images/logo.png",
            "foundingDate": "1952",
            "description": "FIHNEC Zona Noreste es una fraternidad laica abierta a hombres, mujeres, jóvenes y niños sin distinción de religión, raza o posición social. Nuestras reuniones laicas son un espacio donde personas de toda condición comparten testimonios de vida y superación. Si estás pasando por problemas económicos, familiares o emocionales, ven a conocer a La Gente Más Feliz de la Tierra.",
            "slogan": "La Gente Más Feliz de la Tierra",
            "knowsAbout": [
              "Testimonio de vida", "Superación personal",
              "Apoyo comunitario", "Familia y hogar", "Hombres de negocios",
              "Comunidad latina", "Salud emocional",
              "Recuperación personal", "Propósito de vida", "Fraternidad laica"
            ],
            "areaServed": [
              { "@type": "State", "name": "New Jersey" },
              { "@type": "City", "name": "Newark, NJ" },
              { "@type": "City", "name": "Elizabeth, NJ" },
              { "@type": "City", "name": "Paterson, NJ" },
              { "@type": "City", "name": "Jersey City, NJ" },
              { "@type": "City", "name": "Union City, NJ" },
              { "@type": "State", "name": "Pennsylvania" },
              { "@type": "City", "name": "Philadelphia, PA" },
              { "@type": "City", "name": "North Philadelphia, PA" },
              { "@type": "City", "name": "South Philadelphia, PA" },
              { "@type": "State", "name": "Virginia" },
              { "@type": "State", "name": "Maryland" }
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Hombres, mujeres, jóvenes y niños de cualquier religión, denominación o posición social"
            },
            "sameAs": [
              "https://www.facebook.com/fihnecnjphl",
              "https://www.instagram.com/fihnecnjphl"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Información general",
              "availableLanguage": ["Spanish", "English"]
            }
          })
        }}
      />

      {/* JSON-LD: FAQPage — captura búsquedas de intención espiritual, emocional y económica */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es FIHNEC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FIHNEC (Fraternidad Internacional de Hombres de Negocios del Evangelio Completo) es una fraternidad laica con más de 35 capítulos en la Zona Noreste — New Jersey, Pennsylvania, Virginia y Maryland. Nos reunimos en cenas, almuerzos y desayunos donde personas de toda condición — obreros, amas de casa, comerciantes y profesionales — comparten testimonios de vida y superación personal."
                }
              },
              {
                "@type": "Question",
                "name": "¿FIHNEC es solo para hombres?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Aunque FIHNEC nació como una fraternidad de hombres de negocios, hoy contamos con capítulos mixtos y reuniones para hombres, mujeres, jóvenes y niños. Toda la familia es bienvenida."
                }
              },
              {
                "@type": "Question",
                "name": "¿Tengo que pertenecer a alguna iglesia para asistir a FIHNEC?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. FIHNEC no es una iglesia ni pertenece a ninguna denominación. Somos una fraternidad laica abierta a personas de cualquier religión, trasfondo o posición social. Nuestras reuniones no son cultos religiosos — son encuentros informales donde se comparten testimonios de vida."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo puede FIHNEC ayudarme si estoy pasando por problemas económicos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En nuestras reuniones laicas escucharás testimonios reales de personas que han superado crisis económicas, pérdidas de negocio y dificultades financieras. No ofrecemos soluciones materiales, pero sí la esperanza y la comunidad que muchas personas necesitan como primer paso hacia una nueva vida."
                }
              },
              {
                "@type": "Question",
                "name": "¿Pueden ayudarme en FIHNEC si tengo problemas emocionales o depresión?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. Muchos de nuestros miembros han vivido en depresión, ansiedad y desesperanza. En nuestras reuniones laicas encontrarás personas que entienden tu dolor y que han encontrado libertad emocional y un nuevo propósito de vida. Ven y escucha sus historias."
                }
              },
              {
                "@type": "Question",
                "name": "¿FIHNEC puede ayudar a mi matrimonio o familia en crisis?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nuestro objetivo es que a través de una relación personal con Jesucristo, seamos mejores esposos, mejores padres, mejores hijos y mejores ciudadanos. Muchas familias han sido restauradas a través de los testimonios que se comparten en nuestras reuniones."
                }
              },
              {
                "@type": "Question",
                "name": "¿Dónde se reúne FIHNEC en New Jersey?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FIHNEC Zona Noreste tiene capítulos activos en Newark, Elizabeth, Paterson, Jersey City y Union City, NJ. Las reuniones laicas se realizan en formato de desayuno, almuerzo o cena en restaurantes y salones de la comunidad, abiertas a todo público."
                }
              },
              {
                "@type": "Question",
                "name": "¿Dónde se reúne FIHNEC en Philadelphia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FIHNEC Zona Noreste cuenta con capítulos en North Philadelphia, South Philadelphia y Kensington. Si estás en el área de Philadelphia y quieres conocer más sobre nuestras reuniones laicas, contáctanos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cómo puedo encontrar a Dios si nunca he ido a una iglesia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "FIHNEC es precisamente para personas que quizás nunca pisarían una iglesia. Nuestras reuniones laicas se realizan en ambientes informales — desayunos, almuerzos, cenas — donde escucharás historias reales de personas que transformaron sus vidas. No necesitas ningún conocimiento religioso para venir. Solo ven."
                }
              },
              {
                "@type": "Question",
                "name": "¿Las reuniones de FIHNEC son en español?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. La mayoría de nuestros capítulos en la Zona Noreste (NJ, PA, VA y MD) operan principalmente en español para servir mejor a la comunidad latina de la región."
                }
              }
            ]
          })
        }}
      />
      <Hero />
      <TrustBar />
      <PresidenteNacional />
      <QuienesSomos />
      <Fundador />
      <Reuniones />
      <CapitulosNJ />
      <CapitulosPHL />
      <Actividades />
      <Testimonios />
      <ComoUnirse />
      <CTABanner />
    </>
  );
}
