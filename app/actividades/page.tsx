import { Metadata } from "next";
import Image from "next/image";
import { Calendar, MapPin, Ticket, CheckCircle, Users, Zap, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Actividades y Eventos | FIHNEC NJ & Philadelphia",
  description: "Convención Nacional FGBMFI USA 2026 — Houston, TX. 5-6 Junio 2026. Un solo Cuerpo, un solo Espíritu.",
};

export default function ActividadesPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">

      {/* Hero Banner */}
      <div className="bg-navy py-16 text-center px-4">
        <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Convención Nacional 2026</p>
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Próximas Actividades
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full mb-6" />
        <p className="text-gray-300 max-w-xl mx-auto">
          Una cita divina que marcará tu historia. ¡Prepárate para lo que Dios tiene para ti!
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Convention Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gold/20 overflow-hidden">

          {/* Flyer Image */}
          <div className="relative w-full h-72 sm:h-96">
            <Image
              src="/images/convention-2026.jpg"
              alt="FGBMFI 2026 National Convention"
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-white">
                Convención Nacional FGBMFI-USA 2026
              </h2>
              <p className="text-gold font-semibold mt-1 italic">
                &ldquo;Un solo Cuerpo, un solo Espíritu&rdquo; — Efesios 4:4
              </p>
            </div>
          </div>

          <div className="p-8 space-y-8">

            {/* Event Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-soft rounded-xl p-5">
              <div className="flex items-start gap-3">
                <Calendar size={20} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Fecha</p>
                  <p className="text-navy font-bold">5–6 Junio 2026</p>
                  <p className="text-navy/60 text-sm">Viernes y Sábado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Lugar</p>
                  <p className="text-navy font-bold">Hilton Houston North</p>
                  <p className="text-navy/60 text-sm">12400 Greenspoint Dr, Houston, TX 77060</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Ticket size={20} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-navy/50 uppercase tracking-wide font-semibold">Early Bird</p>
                  <p className="text-navy font-bold text-xl">$160 <span className="text-sm font-normal text-navy/40 line-through">$200</span></p>
                  <p className="text-gold text-sm font-semibold">¡Precio limitado!</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-navy mb-3">Una Cita Divina</h3>
              <p className="text-navy/70 leading-relaxed">
                Este 5 y 6 de junio de 2026 nos reuniremos en Houston, Texas, no solo para un evento, sino para un poderoso movimiento de Dios. Esta Convención Nacional será aún mejor que las anteriores — hemos sido testigos de milagros y testimonios asombrosos, pero creemos firmemente que <span className="font-semibold text-navy">la gloria postrera será mayor que la primera</span>.
              </p>
            </div>

            {/* Why Attend */}
            <div>
              <h3 className="font-playfair text-xl font-bold text-navy mb-4">¿Por qué no puedes perdértela?</h3>
              <div className="space-y-4">
                {[
                  { icon: Star, title: "Oradores de Clase Mundial", desc: "Oradores nacionales e internacionales con una palabra de fuego y dirección para este tiempo." },
                  { icon: Zap, title: "Poder y Unción", desc: "La atmósfera estará cargada de fe para sanación, milagros y avances espirituales." },
                  { icon: Users, title: "Unidad y Fraternidad", desc: "Fortalece los lazos con hermanos de toda la nación. ¡Trae a otro fraterno contigo!" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-bold text-navy">{title}</p>
                      <p className="text-navy/65 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ticket Includes */}
            <div className="bg-navy rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Ticket size={20} className="text-gold" />
                <h3 className="font-playfair text-lg font-bold text-white">Tu boleto de $160 incluye</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Entrada completa a la Convención",
                  "Acceso a todas las sesiones generales",
                  "Talleres de capacitación y liderazgo",
                  "3 comidas incluidas durante el evento",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-gold shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-gold/70 text-xs mt-4 italic">
                ⚠️ Precio limitado. Una vez agotadas las entradas Early Bird, el costo sube a $200 sin excepciones.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-2">
              <a
                href="https://www.fgbmfiusa.org/es/event/fgbmfi-usa-2026-convencion-nacional-68/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold hover:bg-gold-light text-navy font-bold text-lg px-10 py-4 rounded-lg transition-colors shadow-lg"
              >
                Registrarme ahora →
              </a>
              <p className="text-navy/50 text-sm mt-3">Serás redirigido al sitio oficial de FGBMFI USA</p>
            </div>

          </div>
        </div>

        {/* Próximamente locales */}
        <div>
          <h3 className="font-playfair text-xl font-bold text-navy mb-6 text-center">
            Eventos Locales — Próximamente
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {["New Jersey", "Philadelphia"].map((region) => (
              <div key={region} className="bg-white rounded-xl border border-gray-200 p-8 text-center shadow-sm">
                <p className="text-gold font-bold text-lg mb-2">{region}</p>
                <p className="text-navy/60 text-sm leading-relaxed">
                  Los eventos locales de {region} serán anunciados próximamente. ¡Mantente al tanto!
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
