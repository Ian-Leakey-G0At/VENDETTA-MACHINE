import Link from "next/link";
import { Schematic } from "@/lib/schematics";

const SchematicCard = ({ schematic }: { schematic: Schematic }) => (
  <Link href={`/art/${schematic.id}`} className="group block">
    <div className="relative overflow-hidden bg-surface rounded-lg">
      <div className="aspect-[3/4] w-full">
        <img
          src={schematic.image_url}
          alt={schematic.name}
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
    </div>
    <div className="mt-4">
      <h3 className="text-lg font-bold text-text-primary">{schematic.name}</h3>
      <p className="text-sm text-text-secondary">{schematic.artist}</p>
    </div>
  </Link>
);

export default SchematicCard;
