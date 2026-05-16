import Image from "next/image";

export default function Fundador() {
  return (
    <section className="bg-navy py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Historia y Legado</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4 mt-2">
            Demos Shakarian
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Fundador de la Fraternidad Internacional de Hombres de Negocios del Evangelio Completo — 1952
          </p>
          <div className="w-20 h-1 bg-gold mx-auto rounded-full mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Photo 1 */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/fundador-1.jpeg"
                alt="Demos Shakarian – Fundador FGBMFI"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-navy/80 backdrop-blur-sm border-t border-gold/20 p-6 flex-1 flex items-center">
              <p className="text-gray-200 text-sm md:text-base leading-relaxed italic text-center">
                &ldquo;El espíritu parecía decir: no quiero una gran organización centralizada. Reunanse en algunas ocasiones como un grupo colectivo que se inspiren y alienten mutuamente, y enciendan un fuego brillante que muchos puedan ver.&rdquo;
              </p>
            </div>
          </div>

          {/* Photo 2 */}
          <div className="flex flex-col rounded-2xl overflow-hidden border border-gold/20 shadow-2xl">
            <div className="relative w-full h-[420px]">
              <Image
                src="/images/fundador-2.jpeg"
                alt="Demos Shakarian – Fundador FGBMFI"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="bg-navy/80 backdrop-blur-sm border-t border-gold/20 p-6 flex-1 flex items-center">
              <p className="text-gray-200 text-sm md:text-base leading-relaxed italic text-center">
                &ldquo;Las convenciones nacieron en el corazón de Dios. Por eso es que sucede el gran derramamiento del Espíritu Santo, a los que obedecen este mandato.&rdquo;
              </p>
            </div>
          </div>

        </div>

        <div className="mt-10 text-center">
          <p className="font-playfair text-gold text-lg font-semibold italic">
            &ldquo;La Gente Más Feliz de la Tierra&rdquo;
          </p>
          <p className="text-gray-400 text-sm mt-1">— Demos Shakarian, 1952</p>
        </div>

      </div>
    </section>
  );
}
