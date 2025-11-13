import Link from "next/link";
import Logo from "@/components/icons/Logo";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const Header = () => (
  <header className="sticky top-0 z-50 w-full bg-surface/80 backdrop-blur-sm border-b border-border">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-8 w-8 text-primary">
              <Logo />
            </div>
            <span className="text-xl font-bold text-text-primary">
              Vendetta Machine
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Schematics
          </Link>
          <Link
            href="/artist"
            className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
          >
            Artist
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 text-sm font-medium text-text-primary bg-surface border border-border rounded-lg hover:bg-border transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm font-bold text-white bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-text-primary">
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
