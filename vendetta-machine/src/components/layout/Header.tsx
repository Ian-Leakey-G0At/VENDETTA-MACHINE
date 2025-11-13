import Link from "next/link";
import Logo from "@/components/icons/Logo";

const Header = () => (
  <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 bg-background-dark/80 px-4 py-3 backdrop-blur-sm sm:px-6 lg:px-10">
    <div className="flex items-center gap-4 text-white">
      <div className="size-6 text-primary">
        <Logo />
      </div>
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
        Vendetta Machine
      </h2>
    </div>
    <nav className="hidden items-center gap-8 md:flex">
      <Link
        href="/"
        className="text-white text-sm font-medium leading-normal transition-colors hover:text-primary"
      >
        Schematics
      </Link>
      <Link
        href="/artist"
        className="text-[#888888] text-sm font-medium leading-normal transition-colors hover:text-primary"
      >
        Artist
      </Link>
    </nav>
    <div className="flex items-center gap-4">
      <button className="md:hidden text-white">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </div>
  </header>
);

export default Header;
