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

  const relatedArtworks = schematics.filter(
    (s) => s.artist === schematic.artist && s.id !== schematic.id
  ).slice(0, 4);


  return (
    <main className="flex-1">
      <div className="py-8 px-4 md:px-10">
        <div className="flex flex-wrap gap-2 pb-8">
          <Link
            className="text-[#cbbc90] text-sm font-medium leading-normal hover:text-primary"
            href="/"
          >
            Home
          </Link>
          <span className="text-[#cbbc90] text-sm font-medium leading-normal">/</span>
          <Link
            className="text-[#cbbc90] text-sm font-medium leading-normal hover:text-primary"
            href="/"
          >
            Schematics
          </Link>
          <span className="text-[#cbbc90] text-sm font-medium leading-normal">/</span>
          <span className="text-white text-sm font-medium leading-normal">
            {schematic.name}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-24">
          <div className="w-full">
            <div
              className="aspect-square w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-lg min-h-80"
              style={{ backgroundImage: `url("${schematic.image_url}")` }}
            ></div>
          </div>
          <div className="flex flex-col">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                {schematic.name}
              </h1>
              <a
                className="text-[#cbbc90] text-lg font-normal leading-normal hover:text-primary transition-colors"
                href="#"
              >
                By {schematic.artist}
              </a>
            </div>
            <div className="py-8">
              <div className="flex border-b border-[#685a31] gap-8">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-primary text-white pb-[13px] pt-4"
                  href="#"
                >
                  <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">
                    Description
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#cbbc90] pb-[13px] pt-4 hover:border-b-primary/50 hover:text-white transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Details
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#cbbc90] pb-[13px] pt-4 hover:border-b-primary/50 hover:text-white transition-colors"
                  href="#"
                >
                  <p className="text-sm font-bold leading-normal tracking-[0.015em]">
                    Shipping
                  </p>
                </a>
              </div>
              <div className="py-6">
                <p className="text-[#cbbc90] text-base font-normal leading-relaxed">
                  {schematic.description}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 pt-4 mt-auto">
              <div>
                <p className="text-sm text-[#cbbc90]">Price</p>
                <p className="text-white text-4xl font-bold">${schematic.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={schematic.polar_checkout_url}
                  className="flex-1 flex items-center justify-center rounded-lg h-12 px-6 bg-primary text-background-dark text-base font-bold hover:opacity-80 transition-opacity"
                >
                  Acquire
                </a>
                <button className="flex-1 flex items-center justify-center rounded-lg h-12 px-6 border-2 border-primary/50 text-white text-base font-bold hover:bg-primary/20 hover:border-primary transition-colors">
                  Make an Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 px-4 md:px-10">
        <div className="border-t border-[#493f22] pt-12">
          <h3 className="text-white text-3xl font-bold tracking-tight mb-8">
            Related Artworks
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedArtworks.map((relatedSchematic) => (
                <SchematicCard key={relatedSchematic.id} schematic={relatedSchematic} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
