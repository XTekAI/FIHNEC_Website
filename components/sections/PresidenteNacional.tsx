import Image from "next/image";

export default function PresidenteNacional() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Mensaje de Bienvenida</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-4">
            Presidente Nacional FGBMFI USA
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Photo */}
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
              <Image
                src="/images/presidente-nacional.jpg"
                alt="Gabriel Jacquez – Presidente Nacional FGBMFI USA"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <div className="mt-5 text-center">
              <p className="font-playfair text-xl font-bold text-navy">Gabriel Jacquez</p>
              <p className="text-gold font-semibold text-sm mt-1">Presidente Nacional</p>
              <p className="text-navy/60 text-sm">FGBMFI USA</p>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold text-navy mb-5">
              ¡Bienvenido, has llegado al lugar correcto!
            </h3>

            <div className="space-y-4 text-navy/75 text-base md:text-lg leading-relaxed">
              <p>
                Estamos encantados de tenerte aquí. Te invitamos a explorar este sitio para conocer más sobre nuestra organización, en qué creemos y cómo puedes unirte a nosotros para marcar la diferencia en el desafiante mundo de hoy.
              </p>
              <p>
                <span className="font-semibold text-navy">FGBMFI opera a nivel global</span>, con presencia en más de 90 países. FGBMFI-USA se enorgullece de ser parte de este gran movimiento que nació en el corazón de Dios y llegó a los Estados Unidos en <span className="font-semibold text-navy">1952</span>. Lo que comenzó como un sueño se ha convertido en una red de hombres, mujeres y jóvenes transformados por el poder de Jesucristo.
              </p>
              <p>
                Si estás buscando propósito, comunidad y esperanza genuina — este es tu hogar. ¡Esperamos con entusiasmo conectar contigo!
              </p>
            </div>

            {/* Signature area */}
            <div className="mt-8 pt-6 border-t border-gold/20 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                <span className="font-playfair font-bold text-gold text-lg">G</span>
              </div>
              <div>
                <p className="font-playfair font-bold text-navy text-lg">Gabriel Jacquez</p>
                <p className="text-gold text-sm font-medium">Presidente Nacional, FGBMFI USA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
