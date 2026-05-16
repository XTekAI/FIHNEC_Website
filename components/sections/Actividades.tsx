"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Globe, Ticket, Zap, HeartHandshake } from "lucide-react";

export default function Actividades() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold opacity-5 rounded-bl-[100%] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold opacity-5 rounded-tr-[100%] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Agenda</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
            Próximas Actividades
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* National Convention — Featured */}
        <div className="bg-white/5 border border-gold/30 rounded-2xl overflow-hidden mb-10 hover:border-gold/60 transition-colors">
          <div className="bg-gold/10 border-b border-gold/20 px-6 py-3 flex items-center gap-2">
            <Globe size={16} className="text-gold" />
            <span className="text-gold text-sm font-bold uppercase tracking-widest">Convención Nacional — ¡No te la pierdas!</span>
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-80 h-64 md:h-auto shrink-0">
              <Image
                src="/images/convention-2026.jpg"
                alt="FGBMFI 2026 National Convention"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-10">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-white mb-1">
                Convención Nacional 2026
              </h3>
              <p className="text-gold font-semibold text-lg mb-5">FGBMFI USA</p>

              <p className="text-gray-300 italic border-l-2 border-gold/50 pl-4 mb-6 text-sm md:text-base">
                &ldquo;Un solo Cuerpo, un solo Espíritu&rdquo; — Efesios 4:4
              </p>

              <p className="text-gray-300 mb-6 leading-relaxed text-sm md:text-base">
                Una cita divina que marcará tu historia. Oradores de clase mundial, poder, unción y fraternidad como nunca antes. Dios tiene algo especial preparado para ti.
              </p>

              <div className="flex flex-col gap-3 mb-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-gold shrink-0" />
                  <span>5–6 Junio 2026 &nbsp;·&nbsp; Viernes y Sábado</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={15} className="text-gold shrink-0" />
                  <span>Hilton Houston North — Houston, TX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Ticket size={15} className="text-gold shrink-0" />
                  <span>Early Bird: <span className="text-gold font-bold">$160 USD</span> <span className="line-through text-gray-500">$200</span></span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.fgbmfiusa.org/es/event/fgbmfi-usa-2026-convencion-nacional-68/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold hover:bg-gold-light text-navy font-bold px-6 py-2.5 rounded-md transition-colors text-sm text-center"
                >
                  Registrarme ahora →
                </a>
                <Link
                  href="/actividades"
                  className="inline-block border border-gold/50 text-gold hover:border-gold text-sm font-semibold px-6 py-2.5 rounded-md transition-colors text-center"
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Eventos Mensuales */}
        <div className="mb-4">
          <h3 className="text-gold font-semibold uppercase tracking-widest text-sm text-center mb-6">
            Eventos Mensuales
          </h3>
        </div>

        {/* Jóvenes Varones y Damas */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6 hover:border-gold/40 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold shrink-0">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="font-playfair text-white font-bold text-lg">Jóvenes Varones y Damas</h4>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest">Mensual</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            Reuniones mensuales para jóvenes varones y damas. Un espacio de comunidad, propósito y fe donde cada generación descubre su llamado en Dios.
          </p>
          <div className="flex flex-wrap gap-2">
            {["New Jersey", "Pennsylvania", "Virginia"].map((state) => (
              <span key={state} className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin size={11} className="text-gold" /> {state}
              </span>
            ))}
          </div>
        </div>

        {/* Eventos de Parejas */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-12 hover:border-gold/40 transition-colors">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold shrink-0">
              <HeartHandshake size={18} />
            </div>
            <div>
              <h4 className="font-playfair text-white font-bold text-lg">Eventos de Parejas</h4>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest">Mensual</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm mb-5 leading-relaxed">
            Encuentros mensuales diseñados para matrimonios y parejas. Un tiempo especial para crecer juntos en fe, fortalecer el hogar y compartir experiencias transformadoras.
          </p>
          <div className="flex flex-wrap gap-2">
            {["New Jersey", "Pennsylvania", "Virginia"].map((state) => (
              <span key={state} className="bg-white/10 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <MapPin size={11} className="text-gold" /> {state}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
