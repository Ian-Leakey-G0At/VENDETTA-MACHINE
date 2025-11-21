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
          Kelly Boesch AI Art
        </h1>
        <p className="text-[var(--color-text-secondary)] font-mono text-sm mt-1">@glitchplease</p>

        <div className="flex gap-4 mt-6">
          <a href="https://www.meta.ai/@glitchplease/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full glass-button hover:text-[var(--color-accent)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M8.07 5.002c-1.595-.11-2.865.816-3.753 1.979c-.893 1.17-1.522 2.72-1.87 4.268c-.346 1.547-.433 3.189-.154 4.564c.272 1.336.964 2.71 2.42 3.145c1.389.415 2.635-.175 3.587-.976c.954-.802 1.78-1.946 2.446-3.051c.522-.867.968-1.75 1.318-2.504c.35.753.796 1.637 1.317 2.504c.666 1.105 1.492 2.249 2.446 3.051c.952.801 2.198 1.391 3.587.976c1.456-.435 2.148-1.809 2.42-3.145c.28-1.375.192-3.017-.154-4.564c-.348-1.548-.977-3.099-1.87-4.268c-.887-1.163-2.157-2.09-3.752-1.979c-1.734.12-2.97 1.469-3.687 2.488a11 11 0 0 0-.307.465a10 10 0 0 0-.308-.465c-.717-1.02-1.953-2.367-3.687-2.488Zm2.85 5.025c-.283.715-.97 2.348-1.888 3.873c-.621 1.032-1.313 1.958-2.02 2.552s-1.262.728-1.725.59c-.396-.118-.817-.56-1.034-1.627c-.208-1.027-.157-2.375.146-3.728c.304-1.353.838-2.614 1.508-3.493c.675-.885 1.369-1.242 2.024-1.196c.766.053 1.53.705 2.188 1.642c.368.523.643 1.052.8 1.386Zm2.288 0c.282.715.97 2.348 1.887 3.873c.622 1.032 1.314 1.958 2.02 2.552c.708.595 1.262.728 1.726.59c.395-.118.816-.56 1.033-1.627c.209-1.027.158-2.375-.146-3.728s-.837-2.614-1.508-3.493c-.675-.885-1.368-1.242-2.024-1.196c-.766.053-1.53.705-2.188 1.642a9.6 9.6 0 0 0-.8 1.386Z" /></g></svg>
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-16 glass-panel rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">Transmission</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm font-light opacity-80">
          Hi friends, it’s Kelly Boesch AI Art here on Meta making shorts and having fun. Thanks for following or watching ❤️❤️❤️
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
