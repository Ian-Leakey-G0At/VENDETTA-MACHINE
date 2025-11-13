import Link from "next/link";
import { Schematic } from "@/lib/schematics";

const SchematicCard = ({ schematic }: { schematic: Schematic }) => (
  <Link href={`/art/${schematic.id}`}>
    <div className="group relative aspect-[3/4] overflow-hidden rounded-xl">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-105"
        style={{ backgroundImage: `url("${schematic.image_url}")` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 rounded-xl border border-transparent transition-all duration-300 group-hover:border-primary"></div>
      <div className="relative flex h-full flex-col justify-end p-4">
        <div className="translate-y-4 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-white text-lg font-bold leading-tight">{schematic.name}</p>
          <p className="text-[#888888] text-sm">{schematic.artist}</p>
        </div>
      </div>
    </div>
  </Link>
);

export default SchematicCard;
