"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1400px] items-center px-5 py-16 sm:px-8 lg:min-h-[calc(100vh-7rem)] lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#c7a15a] sm:w-10" />

              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#c7a15a] sm:text-xs sm:tracking-[0.3em]">
                <Sparkles size={13} />
                Luxury Interior Design
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-[900px] text-[clamp(2.8rem,12vw,7.8rem)] leading-[0.88] tracking-[-0.045em] text-white sm:text-[clamp(3.5rem,8vw,7.8rem)]"
            >
              Where Vision
              <br />
              <span className="italic text-[#c7a15a]">Becomes</span>
              <br />
              a Signature Space.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-7 max-w-xl text-sm leading-6 text-white/55 sm:mt-8 sm:text-base sm:leading-7"
            >
              Bespoke interiors and custom furniture crafted for modern homes,
              villas, apartments and workspaces — where timeless design meets
              exceptional craftsmanship.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 flex w-full flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full bg-[#c7a15a] px-6 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.02] sm:w-auto sm:px-7"
              >
                Book a Consultation
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="#portfolio"
                className="group inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm text-white transition-all duration-300 hover:border-[#c7a15a]/50 hover:text-[#c7a15a] sm:w-auto sm:px-7"
              >
                Explore Our Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </motion.div>

            {/* DETAILS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3 text-[9px] uppercase tracking-[0.18em] text-white/35 sm:mt-12 sm:gap-5 sm:text-[10px] sm:tracking-[0.22em]"
            >
              <span>10+ Years Experience</span>

              <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />

              <span>Pune</span>

              <span className="h-1 w-1 rounded-full bg-[#c7a15a]" />

              <span>Home • Villa • Flat • Workspace</span>
            </motion.div>
          </div>

          {/* DESKTOP VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="relative hidden min-h-[550px] lg:block"
          >
            <div className="absolute inset-5 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#24201a] via-[#111111] to-[#080808] shadow-2xl">

              <div className="absolute inset-0 opacity-30">
                <div className="absolute left-[20%] top-0 h-full w-px bg-[#c7a15a]/20" />
                <div className="absolute left-[55%] top-0 h-full w-px bg-white/10" />
                <div className="absolute left-0 top-[30%] h-px w-full bg-white/10" />
              </div>

              <div className="absolute bottom-[14%] left-[10%] h-[35%] w-[70%] rounded-t-[3rem] border border-white/10 bg-gradient-to-t from-black/80 to-white/[0.04]" />

              <div className="absolute bottom-[14%] left-[18%] h-[18%] w-[55%] rounded-t-[2rem] border border-[#c7a15a]/20 bg-[#17130d]" />

              <div className="absolute bottom-[32%] right-[13%] h-[32%] w-[18%] rounded-t-full border border-white/10 bg-gradient-to-b from-white/[0.08] to-transparent" />

              <div className="absolute bottom-7 left-7">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#c7a15a]">
                  Signature Collection
                </p>

                <p className="mt-2 text-xl text-white/80">
                  Designed for Living
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.a
          href="#about"
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/30 md:flex"
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