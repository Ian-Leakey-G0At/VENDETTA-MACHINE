"use client";

import Link from "next/link";
import Logo from "@/components/icons/Logo";
import { useState } from "react";

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--color-surface)] border-b border-[var(--color-border)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 text-[var(--color-primary)]">
                <Logo />
              </div>
              <span className="text-xl font-bold text-[var(--color-text-primary)]">
                Vendetta Machine
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Schematics
            </Link>
            <Link
              href="/artist"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
            >
              Artist
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              className="text-[var(--color-text-primary)]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-4 mt-4 bg-[var(--color-surface)] p-4 rounded-lg">
            <Link
              href="/"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Schematics
            </Link>
            <Link
              href="/artist"
              className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artist
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
