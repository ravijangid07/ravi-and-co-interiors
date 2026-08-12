"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#080808] px-5 pb-14 pt-28 sm:px-8 md:min-h-screen md:px-12 md:pb-10 md:pt-32"
    >
      <div className="mx-auto grid max-w-[1450px] items-center gap-12 md:grid-cols-[1.02fr_0.98fr] md:gap-10 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[#c7a15a] sm:text-xs">
            Luxury Interior Design
          </p>

          <h1 className="max-w-3xl text-[3.6rem] leading-[0.9] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[6.4rem] xl:text-[7rem]">
            Where Vision
            <span className="block italic text-[#c7a15a]">
              Becomes
            </span>
            <span className="block">
              a Signature
            </span>
            <span className="block">
              Space.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Bespoke interiors and custom furniture crafted for modern homes,
            villas, apartments and workspaces — where timeless design meets
            exceptional craftsmanship.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="flex min-h-[54px] items-center justify-center gap-3 rounded-full bg-[#c7a15a] px-7 text-sm font-semibold text-black transition-transform hover:scale-[1.02]"
            >
              Book a Consultation
              <ArrowUpRight size={18} />
            </a>

            <a
              href="#portfolio"
              className="flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-white/15 px-7 text-sm text-white transition-all hover:border-[#c7a15a]/60 hover:text-[#c7a15a]"
            >
              Explore Our Work
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* EXPERIENCE */}
          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-[9px] uppercase tracking-[0.22em] text-white/35">
            <span>10+ Years Experience</span>
            <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />
            <span>Mumbai</span>
            <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />
            <span>Pune</span>
            <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />
            <span>Home • Villa • Flat • Workspace</span>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 35, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative z-10"
        >
          <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111] sm:min-h-[520px] md:min-h-[600px] lg:min-h-[680px]">

            <img
              src="/images/hero-interior.png"
              alt="Luxury interior designed by Ravi & Co. Interiors"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* IMAGE OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

            {/* TOP BRAND */}
            <div className="absolute left-6 top-6 text-[9px] uppercase tracking-[0.28em] text-white/60 sm:left-8 sm:top-8">
              Ravi & Co. Interiors
            </div>

            {/* BOTTOM INFO */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="text-[10px] uppercase tracking-[0.28em] text-[#c7a15a]">
                Signature Collection
              </p>

              <h2 className="mt-2 text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                Designed for Living
              </h2>

              <p className="mt-2 text-xs text-white/50">
                Luxury Interiors • Mumbai • Pune
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mx-auto mt-10 flex max-w-[1450px] items-center gap-3 text-[9px] uppercase tracking-[0.25em] text-white/25 md:absolute md:bottom-7 md:left-12 md:mt-0"
      >
        <ArrowDown size={14} />
        Scroll to explore
      </motion.div>
    </section>
  );
}