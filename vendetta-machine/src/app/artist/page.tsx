import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

const ARTIST_AVATAR_URL =
  "https://lh3.googleusercontent.com/a/ACg8ocK_s-2a3-q5-4-Q5-Q5-Q5-Q5-Q5-Q5-Q5-Q5=s96-c";

export default function ArtistPage() {
  const artistSchematics = schematics.slice(0, 4);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={ARTIST_AVATAR_URL}
            alt="Artist Avatar"
            className="w-32 h-32 rounded-full border-4 border-[var(--color-surface)] ring-2 ring-[var(--color-primary)]"
          />
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tighter">
          Amir_123
        </h1>
        <p className="text-[var(--color-text-secondary)]">@amir_123</p>
        <div className="flex gap-4 mt-4">
          <a
            href="https://twitter.com/amir_123"
            className="text-[var(--color-primary)] hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com/amir_123"
            className="text-[var(--color-primary)] hover:underline"
          >
            Instagram
          </a>
        </div>
        <p className="mt-6 text-[var(--color-text-secondary)] leading-relaxed">
          Hi! I'm Amir, I am specialized in creating cool and colorful illustrations.
          My work explores the intersection of technology and emotion, bringing digital
          canvases to life with vibrant energy and minimalist design.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight mb-8">
          Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {artistSchematics.map((schematic) => (
            <SchematicCard key={schematic.id} schematic={schematic} />
          ))}
        </div>
      </div>
    </main>
  );
}
