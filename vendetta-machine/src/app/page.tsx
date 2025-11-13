import { schematics } from "@/lib/schematics";
import SchematicCard from "@/components/ui/SchematicCard";

export default function Home() {
  return (
    <div className="flex flex-1 justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-7xl flex-col gap-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-bold leading-tight tracking-[-0.033em] lg:text-5xl">
              The Collection
            </h1>
            <p className="text-[#888888] text-base font-normal leading-normal">
              Explore the available schematics from our featured artists.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4 text-sm font-medium leading-normal text-white transition-colors hover:bg-white/10">
            <span>Filter by Series</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4 text-sm font-medium leading-normal text-white transition-colors hover:bg-white/10">
            <span>Filter by Artist</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4 text-sm font-medium leading-normal text-white transition-colors hover:bg-white/10">
            <span>Filter by Medium</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4 text-sm font-medium leading-normal text-white transition-colors hover:bg-white/10">
            <span>Sort by Newest</span>
            <span className="material-symbols-outlined text-base">expand_more</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {schematics.map((schematic) => (
            <SchematicCard key={schematic.id} schematic={schematic} />
          ))}
        </div>
        <div className="flex items-center justify-center pt-4">
          <a
            className="flex size-10 items-center justify-center text-[#888888] transition-colors hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">
              chevron_left
            </span>
          </a>
          <a
            className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center rounded-lg bg-primary text-background-dark"
            href="#"
          >
            1
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            href="#"
          >
            2
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            href="#"
          >
            3
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10"
            href="#"
          >
            4
          </a>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#888888]">
            ...
          </span>
          <a
            className="flex size-10 items-center justify-center text-[#888888] transition-colors hover:text-white"
            href="#"
          >
            <span className="material-symbols-outlined text-xl">
              chevron_right
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
