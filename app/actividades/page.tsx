import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Ticket, CheckCircle, Zap, HeartHandshake, BedDouble } from "lucide-react";

export const metadata: Metadata = {
  title: "Actividades y Eventos | FIHNEC NJ & Philadelphia",
  description: "Convención Regional FGBMFI Zona Noreste — DoubleTree by Hilton, Philadelphia, PA. Entrada $150, incluye cena del viernes y almuerzo del sábado.",
};

const MAPS_URL =
  "https://maps.google.com/?q=DoubleTree+by+Hilton+Hotel+Philadelphia+Center+City,+237+S+Broad+St,+Philadelphia,+PA+19107";

export default function ActividadesPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">

      {/* Hero Banner */}
      <div className="bg-navy py-16 text-center px-4">
        <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Convención Regional — Zona Noreste</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Próximas Actividades
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto">
          Toda la región reunida en Philadelphia. ¡Prepárate para lo que Dios tiene para ti!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Convention Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gold/20 overflow-hidden">
          <div className="flex flex-col md:flex-row">

            {/* Flyer Image */}
            <div className="md:w-2/5 shrink-0 bg-navy">
              <Image
                src="/images/convencion-regional-noreste.jpeg"
                alt="Convención Regional FGBMFI Zona Noreste — DoubleTree by Hilton Philadelphia"
                width={1022}
                height={1600}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="p-8 space-y-8">
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-navy">
                  Convención Regional FGBMFI
                </h2>
                <p className="text-gold font-semibold mt-1">Zona Noreste — Estados Unidos</p>
              </div>

              {/* Event Details */}
              <div className="grid grid-cols-1 gap-4 bg-gray-soft rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Fecha</p>
                    <p className="text-navy font-bold">Viernes y Sábado</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Lugar</p>
                    <p className="text-navy font-bold">DoubleTree by Hilton Philadelphia Center City</p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy/60 text-sm hover:text-gold transition-colors underline underline-offset-2"
                    >
                      237 S Broad St, Philadelphia, PA 19107
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket size={20} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Entrada</p>
                    <p className="text-navy font-bold text-xl">$150</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-playfair text-xl font-bold text-navy mb-3">Una Región, Una Fraternidad</h3>
                <p className="text-navy/70 leading-relaxed">
                  Los capítulos de New Jersey, Pennsylvania, New York, Maryland y Virginia nos reunimos en el corazón de Philadelphia para dos días de testimonios, comunión y fraternidad. ¡Trae a otro fraterno contigo!
                </p>
              </div>

              {/* Ticket Includes */}
              <div className="bg-navy rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Ticket size={20} className="text-gold" />
                  <h3 className="font-playfair text-lg font-bold text-white">Tu entrada de $150 incluye</h3>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Cena del viernes",
                    "Almuerzo del sábado",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-gold/80 text-sm mt-4">
                  <BedDouble size={16} className="shrink-0" />
                  <span>Hospedaje no incluido</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-6 py-3 rounded-lg transition-colors shadow-lg text-center"
                >
                  Cómo llegar →
                </a>
                <Link
                  href="/contacto"
                  className="inline-block border border-gold text-navy hover:bg-gold/10 font-semibold px-6 py-3 rounded-lg transition-colors text-center"
                >
                  Más información
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Eventos Mensuales */}
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy mb-2 text-center">
            Eventos Mensuales
          </h3>
          <p className="text-navy/50 text-sm text-center mb-8">Activos en New Jersey, Pennsylvania y Virginia</p>

          <div className="space-y-6">

            {/* Jóvenes Varones y Damas */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-white font-bold text-lg">Jóvenes Varones y Damas</h4>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest">Mensual</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-navy/70 text-sm leading-relaxed mb-5">
                  Reuniones mensuales para jóvenes varones y damas. Un espacio de comunidad, propósito y fe donde cada generación descubre su llamado en Dios.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["New Jersey", "Pennsylvania", "Virginia"].map((state) => (
                    <span key={state} className="bg-gray-100 text-navy text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <MapPin size={11} className="text-gold" /> {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Eventos de Parejas */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-navy px-6 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-gold/20 border border-gold/40 rounded-full flex items-center justify-center shrink-0">
                  <HeartHandshake size={16} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-playfair text-white font-bold text-lg">Eventos de Parejas</h4>
                  <p className="text-gold text-xs font-semibold uppercase tracking-widest">Mensual</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-navy/70 text-sm leading-relaxed mb-5">
                  Encuentros mensuales diseñados para matrimonios y parejas. Un tiempo especial para crecer juntos en fe, fortalecer el hogar y compartir experiencias transformadoras.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["New Jersey", "Pennsylvania", "Virginia"].map((state) => (
                    <span key={state} className="bg-gray-100 text-navy text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <MapPin size={11} className="text-gold" /> {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
