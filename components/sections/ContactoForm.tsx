// ============================================
// ARCHIVO: /components/sections/ContactoForm.tsx
// ============================================
"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    region: "",
    capitulo: "",
    mensaje: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío a API route
    console.log("Enviando datos:", formData);
    
    // TODO: Conectar con /app/api/contacto/route.ts
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        region: "",
        capitulo: "",
        mensaje: ""
      });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="font-playfair text-2xl font-bold text-navy mb-6">Envíanos un Mensaje</h3>
      
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          ¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-navy/80 mb-2">Nombre Completo *</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              required
              value={formData.nombre}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-md border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[48px]"
              placeholder="Ej. Juan Pérez"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-navy/80 mb-2">Correo Electrónico *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-md border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[48px]"
              placeholder="ejemplo@correo.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="telefono" className="block text-sm font-medium text-navy/80 mb-2">Teléfono</label>
            <input 
              type="tel" 
              id="telefono" 
              name="telefono" 
              value={formData.telefono}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-md border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[48px]"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-navy/80 mb-2">Región de Interés</label>
            <select 
              id="region" 
              name="region" 
              value={formData.region}
              onChange={handleChange}
              className="w-full px-4 py-3.5 rounded-md border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white min-h-[48px]"
            >
              <option value="">Selecciona una región</option>
              <option value="NJ">New Jersey</option>
              <option value="PHL">Philadelphia</option>
              <option value="AMBOS">Ambos</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium text-navy/80 mb-2">Mensaje o Pregunta *</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            required
            rows={4}
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
            placeholder="¿Cómo podemos ayudarte?"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gold hover:bg-gold-light text-navy font-bold py-4 rounded-md transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>Enviar Mensaje <Send size={20} /></>
          )}
        </button>
      </form>
    </div>
  );
}
