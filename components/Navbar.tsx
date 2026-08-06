"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        
        <Link href="#home">
          <div className="leading-none">
            <div className="text-2xl font-semibold tracking-wide text-white">
              Ravi <span className="text-[#c7a15a]">&amp; Co.</span>
            </div>

            <div className="mt-1 text-[9px] uppercase tracking-[0.45em] text-white/40">
              Interiors
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-[#c7a15a]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <a
          href="https://wa.me/919680647191"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-[#c7a15a]/50 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#c7a15a] transition-all hover:bg-[#c7a15a] hover:text-black lg:flex"
        >
          Book Consultation
          <ArrowUpRight size={15} />
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="text-white lg:hidden"
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="border-t border-white/10 bg-[#090909] px-6 py-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-white/80 hover:text-[#c7a15a]"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="https://wa.me/919680647191"
                target="_blank"
                rel="noreferrer"
                className="mt-3 flex w-fit items-center gap-2 rounded-full bg-[#c7a15a] px-5 py-3 text-sm font-medium text-black"
              >
                Book Consultation
                <ArrowUpRight size={17} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}