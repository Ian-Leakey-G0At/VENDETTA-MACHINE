import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero removed per design — tightened spacing before the collection */}

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-text-primary tracking-tight">
          The Collection
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {schematics.map((schematic) => (
          <SchematicCard key={schematic.id} schematic={schematic} />
        ))}
      </div>
    </main>
  );
}
