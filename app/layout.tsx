import type { Metadata, Viewport } from "next";
import { Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: '--font-source-serif'
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "FIHNEC New Jersey & Philadelphia | Comunidad Cristiana para Toda la Familia",
  description: "FIHNEC es una fraternidad cristiana en New Jersey y Philadelphia abierta a toda la familia — hombres, mujeres, jóvenes y niños. Sin distinción de religión, raza o posición social. Si estás pasando por problemas económicos, familiares o emocionales, aquí encontrarás apoyo y esperanza en Cristo.",
  keywords: [
    // Búsquedas de identidad / quiénes son
    "FIHNEC New Jersey", "FIHNEC Philadelphia", "Fraternidad Internacional de Hombres de Negocios del Evangelio Completo NJ",
    "comunidad cristiana New Jersey", "comunidad cristiana Philadelphia", "fraternidad cristiana latina NJ",
    "grupos de fe en New Jersey", "grupos de fe en Philadelphia", "iglesia no denominacional NJ",
    // Búsquedas por tipo de reunión
    "desayuno cristiano New Jersey", "almuerzo cristiano Philadelphia", "cena de hombres cristianos NJ",
    "reuniones de mujeres cristianas NJ", "grupos de jóvenes cristianos Philadelphia", "grupos familiares cristianos NJ",
    // Búsquedas por necesidad espiritual / emocional / económica
    "cómo encontrar a Dios en New Jersey", "comunidad espiritual para hombres NJ",
    "apoyo espiritual para hombres en crisis NJ", "ayuda espiritual problemas económicos New Jersey",
    "depresión ayuda espiritual New Jersey", "problemas de matrimonio ayuda cristiana NJ",
    "ansiedad y fe Philadelphia", "crisis personal apoyo cristiano NJ",
    "hombres en crisis espiritual New Jersey", "dónde encontrar propósito de vida NJ",
    "grupos de apoyo emocional latinos New Jersey", "superación personal cristiana Philadelphia",
    // Búsquedas por ciudad NJ
    "comunidad cristiana Newark NJ", "grupos religiosos Elizabeth NJ", "iglesia Paterson NJ",
    "grupos de fe Jersey City NJ", "Union City NJ comunidad cristiana",
    // Búsquedas por ciudad PHL
    "comunidad cristiana North Philadelphia", "grupos religiosos South Philadelphia", "fe en Kensington Philadelphia",
    // Búsquedas generales
    "hombres de negocios cristianos", "mujeres de fe Philadelphia", "jóvenes cristianos NJ",
    "familia cristiana New Jersey", "testimonio de fe NJ", "La Gente Más Feliz de la Tierra",
  ].join(", "),
  openGraph: {
    title: "FIHNEC NJ & Philadelphia — Reuniones Cristianas para Toda la Familia",
    description: "Una fraternidad donde hombres, mujeres, jóvenes y niños testifican del poder de Dios. Sin distinción de religión o posición social. Capítulos en NJ y Philadelphia.",
    url: "https://fihnec-nj-phl.org",
    siteName: "FIHNEC NJ & PHL",
    images: [
      {
        url: "/images/og-placeholder.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_US",
    type: "website",
  },
  icons: {
    icon: [{ url: '/images/logo.png', type: 'image/png' }],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${sourceSerif.variable} font-serif antialiased bg-gray-soft text-navy min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
