import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isAdmin, onToggleAdmin }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-800/80 bg-neutral-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single Text Element Wordmark */}
        <a 
          href="#top" 
          className="text-lg font-bold tracking-tight text-neutral-100 hover:text-white transition-colors"
        >
          Mahmoud
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-400">
          <a href="#spotlight" className="hover:text-neutral-100 transition-colors">
            Spotlight
          </a>
          <a href="#arsenal" className="hover:text-neutral-100 transition-colors">
            Technical Arsenal
          </a>
          <a href="#projects" className="hover:text-neutral-100 transition-colors">
            Projects Gallery
          </a>
          <a href="#education" className="hover:text-neutral-100 transition-colors">
            DECI Training
          </a>
          <a href="#contact" className="hover:text-neutral-100 transition-colors">
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="flex items-center gap-3">
          {/* Subtle simulation toggle for testing admin email requirement */}
          <button
            onClick={onToggleAdmin}
            title={isAdmin ? "Currently simulating: mahmoudrofa5656@gmail.com" : "Click to test admin email"}
            className={`hidden sm:inline-flex text-xs px-2.5 py-1 rounded border transition-colors ${
              isAdmin 
                ? 'border-emerald-600/60 bg-emerald-950/40 text-emerald-400' 
                : 'border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-neutral-200'
            }`}
          >
            {isAdmin ? 'Admin View Active' : 'Test Admin Mode'}
          </button>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium text-neutral-950 bg-neutral-100 rounded-md hover:bg-white transition-colors whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-100 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-neutral-950 px-5 py-4 space-y-3">
          <a 
            href="#spotlight" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white py-1"
          >
            Spotlight
          </a>
          <a 
            href="#arsenal" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white py-1"
          >
            Technical Arsenal
          </a>
          <a 
            href="#projects" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white py-1"
          >
            Projects Gallery
          </a>
          <a 
            href="#education" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white py-1"
          >
            DECI Training
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm text-neutral-300 hover:text-white py-1"
          >
            Contact
          </a>

          <div className="pt-2 border-t border-neutral-800 flex items-center justify-between">
            <span className="text-xs text-neutral-400">Admin Email:</span>
            <button
              onClick={() => {
                onToggleAdmin();
                setMobileMenuOpen(false);
              }}
              className="text-xs text-emerald-400 underline"
            >
              {isAdmin ? 'Disable' : 'Enable'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
