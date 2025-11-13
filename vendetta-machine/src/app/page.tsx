import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

export default function Home() {
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tighter">
          Create, Buy & Sell NFTs
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Discover unique digital art and schematics from a curated collection of
          visionary artists.
        </p>
        <button className="mt-8 px-8 py-3 text-lg font-bold text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity">
          View Market
        </button>
      </div>

      <div className="mb-12">
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
