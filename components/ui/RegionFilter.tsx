// ============================================
// ARCHIVO: /components/ui/RegionFilter.tsx
// ============================================
"use client";

interface Props {
  activeRegion: "TODOS" | "NJ" | "PHL";
  onRegionChange: (region: "TODOS" | "NJ" | "PHL") => void;
}

export default function RegionFilter({ activeRegion, onRegionChange }: Props) {
  const regions: { id: "TODOS" | "NJ" | "PHL"; label: string }[] = [
    { id: "TODOS", label: "Todos" },
    { id: "NJ", label: "New Jersey" },
    { id: "PHL", label: "Philadelphia" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      {regions.map((region) => (
        <button
          key={region.id}
          onClick={() => onRegionChange(region.id)}
          className={`px-4 sm:px-6 py-2.5 text-sm sm:text-base rounded-full font-bold transition-all min-h-[44px] ${
            activeRegion === region.id
              ? "bg-navy text-white shadow-md"
              : "bg-white text-navy border border-gray-200 hover:border-gold hover:text-gold"
          }`}
        >
          {region.label}
        </button>
      ))}
    </div>
  );
}
