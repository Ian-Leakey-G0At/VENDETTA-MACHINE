import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8 flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-[var(--color-primary)] to-[var(--color-secondary)] tracking-tighter">
          VENDETTA MACHINE
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl text-lg">
          Curated digital artifacts from the resistance.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {schematics.slice(0, 10).map((schematic) => (
          <SchematicCard key={schematic.id} schematic={schematic} />
        ))}
      </div>
    </main>
  );
}
