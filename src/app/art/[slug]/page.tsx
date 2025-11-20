import { schematics } from "@/lib/schematics";
import Link from "next/link";
import { notFound } from "next/navigation";
import SchematicCard from "@/components/ui/SchematicCard";
import Image from "next/image";

export async function generateStaticParams() {
  return schematics.map((schematic) => ({
    slug: schematic.id,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const schematic = schematics.find((s) => s.id === params.slug);

  if (!schematic) {
    notFound();
  }

  const relatedArtworks = schematics
    .filter((s) => s.artist === schematic.artist && s.id !== schematic.id)
    .slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-panel rounded-2xl p-1 overflow-hidden">
          <Image
            src={schematic.image_url}
            alt={schematic.name}
            width={1920}
            height={1080}
            className="w-full h-auto aspect-[16/9] object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="glass-panel rounded-2xl p-8 flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tighter">
              {schematic.name}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] flex items-center gap-2">
              By{" "}
              <Link
                href="/artist"
                className="text-[var(--color-primary)] hover:underline font-semibold"
              >
                {schematic.artist}
              </Link>
            </p>
            <div className="h-px bg-[var(--color-border)] w-full" />
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {schematic.description}
            </p>
            <div className="mt-8 flex flex-col gap-6">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[var(--color-text-secondary)] uppercase tracking-widest">Price</span>
                <p className="text-3xl font-bold text-white">${schematic.price}</p>
              </div>
              <a
                href={schematic.polar_checkout_url}
                className="glass-button w-full text-center text-lg font-bold hover:scale-[1.02] active:scale-[0.98] bg-[var(--color-accent)]/20 border-[var(--color-accent)]/50 text-white glow-purple transition-all duration-300"
              >
                Acquire Asset
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
          Related Artifacts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {relatedArtworks.map((relatedSchematic) => (
            <SchematicCard key={relatedSchematic.id} schematic={relatedSchematic} />
          ))}
        </div>
      </div>
    </main>
  );
}
