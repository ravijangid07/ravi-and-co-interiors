"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090909]">
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-[1400px] items-center px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#c7a15a]" />

              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
                <Sparkles size={13} />
                Luxury Interior Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.84] tracking-[-0.045em] text-white"
            >
              Where Vision
              <br />
              <span className="italic text-[#c7a15a]">Becomes</span>
              <br />
              a Signature Space.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base"
            >
              Bespoke interiors and custom furniture crafted for modern homes,
              villas, apartments and workspaces — where timeless design meets
              exceptional craftsmanship.
            </motion.p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#c7a15a] px-7 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02]"
              >
                Book a Consultation
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 text-sm text-white transition-all duration-300 hover:border-[#c7a15a]/50 hover:text-[#c7a15a]"
              >
                Explore Our Work
                <ArrowUpRight size={17} />
              </a>
            </div>

            {/* DETAILS */}
            <div className="mt-12 flex flex-wrap items-center gap-5 text-[10px] uppercase tracking-[0.22em] text-white/35">
              <span>10+ Years Experience</span>

              <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />

              <span>Mumbai</span>

              <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />

              <span>Pune</span>

              <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />

              <span>Home • Villa • Flat • Workspace</span>
            </div>
          </div>

          {/* RIGHT HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden min-h-[550px] lg:block"
          >
            <div className="group relative min-h-[550px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] shadow-2xl">

              <img
                src="/images/hero-interior.png"
                alt="Luxury bright living room interior designed by Ravi & Co. Interiors"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

              {/* TOP LABEL */}
              <div className="absolute left-7 top-7">
                <p className="text-[9px] uppercase tracking-[0.35em] text-white/80">
                  Ravi &amp; Co. Interiors
                </p>
              </div>

              {/* BOTTOM TEXT */}
              <div className="absolute bottom-7 left-7 right-7">
                <div className="border-t border-white/20 pt-5">

                  <p className="text-[9px] uppercase tracking-[0.35em] text-[#c7a15a]">
                    Signature Collection
                  </p>

                  <p className="mt-2 text-2xl text-white sm:text-3xl">
                    Designed for Living
                  </p>

                  <p className="mt-1 text-xs text-white/60">
                    Luxury interiors • Mumbai • Pune
                  </p>

                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL */}
        <motion.a
          href="#about"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 md:flex"
        >
          <span className="text-[9px] uppercase tracking-[0.35em]">
            Scroll to explore
          </span>

          <ArrowDown size={16} />
        </motion.a>
      </div>
    </section>
  );
}