// ============================================
// ARCHIVO: /components/sections/TrustBar.tsx
// ============================================
import { Globe2, Users, Building2, MapPin } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { icon: <Building2 size={24} />, label: "Fundada en 1952" },
    { icon: <Globe2 size={24} />, label: "+95 Naciones" },
    { icon: <MapPin size={24} />, label: "Capítulos en NJ & PHL" },
    { icon: <Users size={24} />, label: "Comunidad Latina" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-gold mb-4">
                {stat.icon}
              </div>
              <h3 className="font-playfair text-sm sm:text-base md:text-lg font-bold text-navy">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
