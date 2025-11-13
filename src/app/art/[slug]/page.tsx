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
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={schematic.image_url}
            alt={schematic.name}
            width={500}
            height={500}
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tighter">
            {schematic.name}
          </h1>
          <p className="mt-2 text-lg text-[var(--color-text-secondary)]">
            By{" "}
            <Link
              href="/artist"
              className="text-[var(--color-primary)] hover:underline"
            >
              {schematic.artist}
            </Link>
          </p>

          <div className="mt-8">
            <div className="flex gap-4 border-b border-[var(--color-border)]">
              <button className="py-3 px-4 text-sm font-semibold text-[var(--color-text-primary)] border-b-2 border-[var(--color-primary)]">
                Description
              </button>
              <button className="py-3 px-4 text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]">
                Details
              </button>
            </div>
            <div className="py-6">
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {schematic.description}
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <a
              href={schematic.polar_checkout_url}
              className="flex-1 px-8 py-3 text-center text-lg font-bold text-white bg-[var(--color-primary)] rounded-lg hover:opacity-90 transition-opacity"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8">
          Related Artworks
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {relatedArtworks.map((relatedSchematic) => (
            <SchematicCard key={relatedSchematic.id} schematic={relatedSchematic} />
          ))}
        </div>
      </div>
    </main>
  );
}
