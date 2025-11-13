import { schematics } from "@/lib/schematics";
import Link from "next/link";
import { notFound } from "next/navigation";
import SchematicCard from "@/components/ui/SchematicCard";

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
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Art Image */}
        <div>
          <img
            src={schematic.image_url}
            alt={schematic.name}
            className="w-full h-auto aspect-square object-cover rounded-xl"
          />
        </div>

        {/* Art Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary tracking-tighter">
            {schematic.name}
          </h1>
          <p className="mt-2 text-lg text-text-secondary">
            By{" "}
            <Link href="/artist" className="text-primary hover:underline">
              {schematic.artist}
            </Link>
          </p>

          <div className="mt-8 bg-surface p-6 rounded-lg">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-text-secondary">Price</p>
                <p className="text-2xl font-bold text-text-primary">
                  ${schematic.price.toFixed(2)}
                </p>
              </div>
              <div>
                <p className="text-sm text-text-secondary">Highest Bid</p>
                <p className="text-2xl font-bold text-text-primary">
                  ${(schematic.price * 1.15).toFixed(2)}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="flex gap-4 border-b border-border">
              <button className="py-3 px-4 text-sm font-semibold text-text-primary border-b-2 border-primary">
                About
              </button>
              <button className="py-3 px-4 text-sm font-semibold text-text-secondary hover:text-text-primary">
                Details
              </button>
              <button className="py-3 px-4 text-sm font-semibold text-text-secondary hover:text-text-primary">
                Bids
              </button>
            </div>
            <div className="py-6">
              <p className="text-text-secondary leading-relaxed">
                {schematic.description}
              </p>
            </div>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <a
              href={schematic.polar_checkout_url}
              className="flex-1 px-8 py-3 text-center text-lg font-bold text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Buy Now
            </a>
            <button className="flex-1 px-8 py-3 text-center text-lg font-bold text-text-primary bg-surface border border-border rounded-lg hover:bg-border transition-colors">
              Place a Bid
            </button>
          </div>
        </div>
      </div>

      {/* Related Artworks */}
      <div className="mt-24">
        <h2 className="text-3xl font-bold text-text-primary tracking-tight mb-8">
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
