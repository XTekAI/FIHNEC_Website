import { Metadata } from "next";
import ContactoForm from "@/components/sections/ContactoForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | FIHNEC Zona Noreste",
  description: "Ponte en contacto con FIHNEC — Zona Noreste. Capítulos en New Jersey, Pennsylvania, Virginia y Maryland.",
};

const regionContacts = [
  {
    estado: "Pennsylvania",
    badge: "PA",
    telefonos: ["+1 (267) 444-2776", "+1 (267) 770-4356", "+1 (971) 915-3378"],
  },
  {
    estado: "New Jersey",
    badge: "NJ",
    telefonos: ["+1 (609) 495-7525", "+1 (609) 356-2965", "+1 (848) 245-3353", "+1 (848) 245-2950"],
  },
  {
    estado: "Maryland",
    badge: "MD",
    telefonos: ["+1 (240) 805-2940", "+1 (240) 805-2953"],
  },
  {
    estado: "Virginia",
    badge: "VA",
    telefonos: ["+1 (571) 478-1175", "+1 (571) 282-9992", "+1 (571) 831-2874", "+1 (571) 494-3624"],
  },
  {
    estado: "Washington DC",
    badge: "DC",
    telefonos: ["+1 (786) 690-1570", "+1 (571) 282-8451"],
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Contáctanos
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

      {/* General contact + form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-4">Estamos Para Ayudarte</h2>
              <p className="text-navy/70">
                Si tienes preguntas sobre nuestros capítulos, eventos o cómo unirte a la fraternidad, no dudes en escribirnos.
                Responderemos a la brevedad posible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Oficina Central</h4>
                  <p className="text-navy/70">28610 HWY 290, Suite F09 # 235<br/>Cypress, TX 77433</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Teléfono</h4>
                  <a href="tel:+18333426387" className="text-navy/70 hover:text-gold transition-colors">+1 (833) 342-6387</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Correo Electrónico</h4>
                  <a href="mailto:operations@fgbmfiusa.org" className="text-navy/70 hover:text-gold transition-colors">operations@fgbmfiusa.org</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactoForm />
          </div>

        </div>
      </div>

      {/* Regional contacts */}
      <div className="bg-navy py-20 px-4">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Zona Noreste</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
              Directores y Contactos de la Región
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
          </div>

          {/* Regional directors */}
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-8 md:p-10 mb-12 max-w-2xl mx-auto text-center">
            <p className="text-gold text-xs font-bold uppercase tracking-widest mb-4">Directores — Región Noreste</p>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              <div>
                <p className="font-playfair text-xl font-bold text-white">Freddy España</p>
                <a href="tel:+12672376348" className="flex items-center justify-center gap-2 text-gray-300 hover:text-gold transition-colors mt-2 text-sm">
                  <Phone size={14} />
                  +1 (267) 237-6348
                </a>
              </div>
              <div className="hidden sm:block w-px bg-gold/20" />
              <div>
                <p className="font-playfair text-xl font-bold text-white">Rosi España</p>
                <a href="tel:+12673041687" className="flex items-center justify-center gap-2 text-gray-300 hover:text-gold transition-colors mt-2 text-sm">
                  <Phone size={14} />
                  +1 (267) 304-1687
                </a>
              </div>
            </div>
          </div>

          {/* State contacts grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionContacts.map(({ estado, badge, telefonos }) => (
              <div key={estado} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/30 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-bold px-3 py-1 rounded-full">{badge}</span>
                  <h3 className="font-playfair text-lg font-bold text-white">{estado}</h3>
                </div>
                <ul className="space-y-3">
                  {telefonos.map((tel) => {
                    const href = "tel:+" + tel.replace(/\D/g, "");
                    return (
                      <li key={tel}>
                        <a href={href} className="flex items-center gap-2 text-gray-300 hover:text-gold transition-colors text-sm">
                          <Phone size={14} className="text-gold shrink-0" />
                          {tel}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
