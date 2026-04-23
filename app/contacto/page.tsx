// ============================================
// ARCHIVO: /app/contacto/page.tsx
// ============================================
import { Metadata } from "next";
import ContactoForm from "@/components/sections/ContactoForm";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto | FIHNEC NJ & Philadelphia",
  description: "Ponte en contacto con la Fraternidad de Hombres de Negocios Cristianos en New Jersey o Philadelphia.",
};

export default function ContactoPage() {
  return (
    <div className="pt-24 bg-gray-soft min-h-screen">
      <div className="bg-navy py-16 text-center px-4">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
          Contáctanos
        </h1>
        <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
      </div>

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
                  <p className="text-navy/70">123 Main St, Suite 100<br/>Newark, NJ 07102</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Teléfono</h4>
                  <p className="text-navy/70">(555) 123-4567<br/>(Lunes a Viernes, 9am - 5pm)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Correo Electrónico</h4>
                  <p className="text-navy/70">info@fihnecnjphl.org<br/>contacto@fihnecnjphl.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactoForm />
          </div>

        </div>
      </div>
    </div>
  );
}
