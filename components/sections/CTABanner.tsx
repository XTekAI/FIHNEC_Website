// ============================================
// ARCHIVO: /components/sections/CTABanner.tsx
// ============================================
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gold relative overflow-hidden">
      {/* Pattern de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-navy mb-6">
          ¿Listo Para un Cambio en tu Vida y tus Negocios?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-navy/80 mb-10 font-medium">
          Te invitamos a nuestra próxima reunión. No hay membresías que pagar, solo ven, cena con nosotros y escucha un testimonio que podría cambiar tu rumbo.
        </p>
        <Link 
          href="/contacto" 
          className="inline-block bg-navy hover:bg-navy/90 text-white px-10 py-4 rounded-md font-bold text-lg shadow-xl transition-all hover:scale-105"
        >
          Contáctanos Hoy Mismo
        </Link>
      </div>
    </section>
  );
}
