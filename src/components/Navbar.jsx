import { Mountain, Search, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60 bg-neutral-900/70 border-b border-white/10 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-neutral-900">
              <Mountain size={18} />
            </div>
            <span className="font-semibold tracking-tight">TrekQuest</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-200">
            <a href="#treks" className="hover:text-white transition">Treks</a>
            <a href="#reviews" className="hover:text-white transition">Reviews</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700 transition">
              <Search size={16} />
              <span>Search</span>
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition">
              <User size={16} />
              <span>Sign in</span>
            </button>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-200 hover:bg-neutral-800">
            <span className="sr-only">Toggle menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#treks" className="block rounded-md px-3 py-2 hover:bg-neutral-800">Treks</a>
            <a href="#reviews" className="block rounded-md px-3 py-2 hover:bg-neutral-800">Reviews</a>
            <a href="#about" className="block rounded-md px-3 py-2 hover:bg-neutral-800">About</a>
            <a href="#contact" className="block rounded-md px-3 py-2 hover:bg-neutral-800">Contact</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700 transition">
                <Search size={16} />
                <span>Search</span>
              </button>
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition">
                <User size={16} />
                <span>Sign in</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
