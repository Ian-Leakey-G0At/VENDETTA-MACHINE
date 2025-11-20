import Link from "next/link";
import Image from "next/image";
import { Schematic } from "@/lib/schematics";

const SchematicCard = ({ schematic }: { schematic: Schematic }) => (
  <Link href={`/art/${schematic.id}`} className="group block h-full">
    <div className="relative overflow-hidden rounded-2xl glass-panel h-full flex flex-col transition-all duration-500 hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] hover:border-[var(--color-accent)]/50">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <Image
          src={schematic.image_url}
          alt={schematic.name}
          width={640}
          height={360}
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
        />
      </div>
      <div className="p-3 flex flex-col flex-grow relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <h3 className="text-sm font-bold text-[var(--color-text-primary)] mb-0.5 group-hover:text-[var(--color-accent)] transition-colors truncate">{schematic.name}</h3>
        <p className="text-[10px] text-[var(--color-text-secondary)] font-medium tracking-wider uppercase opacity-70 truncate">{schematic.artist}</p>
      </div>
    </div>
  </Link>
);

export default SchematicCard;
