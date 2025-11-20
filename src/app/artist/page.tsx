import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";
import Image from "next/image";
import { Twitter, Instagram, Globe } from 'lucide-react';

const ARTIST_AVATAR_URL =
  "https://ui-avatars.com/api/?name=Amir+123&background=8b5cf6&color=fff&size=128";

export default function ArtistPage() {
  const artistSchematics = schematics.slice(0, 4);

  return (
    <main className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col items-center mb-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src={ARTIST_AVATAR_URL}
            alt="Artist Avatar"
            width={128}
            height={128}
            className="relative w-32 h-32 rounded-full border-4 border-[var(--color-background)] ring-2 ring-[var(--color-primary)] object-cover"
          />
        </div>
        <h1 className="mt-6 text-4xl font-extrabold text-[var(--color-text-primary)] tracking-tighter">
          Amir_123
        </h1>
        <p className="text-[var(--color-text-secondary)] font-mono text-sm mt-1">@amir_123</p>

        <div className="flex gap-4 mt-6">
          <a href="#" className="p-3 rounded-full glass-button hover:text-[var(--color-accent)] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 rounded-full glass-button hover:text-[var(--color-accent)] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 rounded-full glass-button hover:text-[var(--color-accent)] transition-colors">
            <Globe size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16 glass-panel rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Transmission</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
          Hi! I&apos;m Amir, I am specialized in creating cool and colorful illustrations.
          My work explores the intersection of technology and emotion, bringing digital
          canvases to life with vibrant energy and minimalist design.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
          Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {artistSchematics.map((schematic) => (
            <SchematicCard key={schematic.id} schematic={schematic} />
          ))}
        </div>
      </div>
    </main>
  );
}
