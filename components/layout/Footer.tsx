// ============================================
// ARCHIVO: /components/layout/Footer.tsx
// ============================================
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-soft py-12 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-4">
            <Image src="/images/logo.png" alt="FIHNEC Logo" width={120} height={60} className="object-contain" />
          </div>
          <p className="text-gray-300 mb-6 max-w-md">
            Fraternidad Internacional de Hombres de Negocios del Evangelio Completo. 
            Conectando hombres latinos con un propósito mayor en New Jersey y Philadelphia.
          </p>
          <div className="flex space-x-4 text-gold">
            {/* TODO: Reemplazar con contenido real - Enlaces sociales */}
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-playfair text-lg font-bold text-white mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gold transition-colors">Inicio</Link></li>
            <li><Link href="/quienes-somos" className="hover:text-gold transition-colors">Quiénes Somos</Link></li>
            <li><Link href="/capitulos" className="hover:text-gold transition-colors">Capítulos</Link></li>
            <li><Link href="/actividades" className="hover:text-gold transition-colors">Actividades</Link></li>
            <li><Link href="/contacto" className="hover:text-gold transition-colors">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-playfair text-lg font-bold text-white mb-4">Contacto</h4>
          <ul className="space-y-3">
            {/* TODO: Reemplazar con contenido real */}
            <li className="flex items-start space-x-3 text-sm">
              <MapPin className="text-gold shrink-0 mt-0.5" size={16} />
              <span>Oficina Central NJ<br/>123 Main St, Newark, NJ</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Phone className="text-gold shrink-0" size={16} />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-3 text-sm">
              <Mail className="text-gold shrink-0" size={16} />
              <span>info@fihnecnjphl.org</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} FIHNEC New Jersey & Philadelphia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
