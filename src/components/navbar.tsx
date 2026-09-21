"use client";

import Link from "next/link";
import { Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by ensuring the component is mounted before showing the theme icon
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    // 1. Keeps the navbar pinned to the top full-width (sticky top-0 w-full)
    // 2. Applies the Liquid Glass: extreme blur (backdrop-blur-xl), slight white tint (bg-white/5), and a glossy bottom edge (border-white/10)
    <header className="sticky top-0 z-50 w-full bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      
      <div className="container mx-auto flex h-24 items-center justify-between px-6 md:px-12">
        
        {/* Left Section - Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
          Portfolio<span className="text-blue-500">.</span>
        </Link>

        {/* Center Section - Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-300">
          
          {/* Active state for Home - already highlighted */}
          <Link href="/" className="px-4 py-2 rounded-full text-blue-400 bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
            Home
          </Link>
          
          {/* Hover states for the other links */}
          <Link href="#about" className="px-4 py-2 rounded-full border border-transparent transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-lg">
            About
          </Link>
          <Link href="#skills" className="px-4 py-2 rounded-full border border-transparent transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-lg">
            Skills
          </Link>
          <Link href="#Projects" className="px-4 py-2 rounded-full border border-transparent transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-lg">
            Projects
          </Link>
          <Link href="#portfolio" className="px-4 py-2 rounded-full border border-transparent transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-lg">
            Portfolio
          </Link>
          <Link href="#contact" className="px-4 py-2 rounded-full border border-transparent transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border-white/10 hover:shadow-lg">
            Contact
          </Link>
          
        </nav>
        
        {/* Right Section - Theme Toggle & Call to Action */}
        <div className="flex items-center gap-6">
          
          {/* Interactive Theme Toggle Button */}
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-300 hover:text-white" />
            )}
          </button>
          
          {/* Maintained the standard rounded corners for the button */}
          <a 
            href="/Ajay_resume.pdf" 
            target="_blank"
            className="flex items-center gap-2 rounded-md bg-[#e11d48] px-6 py-2.5 text-sm font-semibold text-white hover:bg-[#be123c] transition-colors shadow-lg shadow-rose-500/20"
          >
            Download CV <Download size={16} />
          </a>
          
        </div>
      </div>
    </header>
  );
}