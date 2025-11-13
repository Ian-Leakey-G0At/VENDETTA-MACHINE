import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
          The Collection
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {schematics.slice(0, 9).map((schematic) => (
          <SchematicCard key={schematic.id} schematic={schematic} />
        ))}
      </div>
    </main>
  );
}
