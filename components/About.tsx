"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

const points = [
  "Custom furniture & interior solutions",
  "Residential & commercial projects",
  "Premium materials & finishing",
  "Complete project execution",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
              About Ravi & Co.
            </p>

            <h2 className="text-4xl leading-tight tracking-tight text-white md:text-6xl">
              Spaces that feel
              <span className="block italic text-[#c7a15a]">
                uniquely yours.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              We create thoughtful interiors that combine elegant design,
              practical planning and quality craftsmanship. From modern homes
              to luxury villas and workspaces, every project is designed
              around the people who live and work in it.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/45">
              Our approach is simple — understand your vision, refine every
              detail and deliver a space that feels timeless.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#c7a15a]/50 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#c7a15a] transition-all hover:bg-[#c7a15a] hover:text-black"
            >
              Work With Us
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#252019] via-[#151515] to-[#090909]">

              <div className="absolute left-8 top-8 text-[9px] uppercase tracking-[0.35em] text-[#c7a15a]">
                Our Philosophy
              </div>

              <div className="absolute bottom-0 left-[12%] h-[65%] w-[76%] rounded-t-[3rem] border border-white/10 bg-gradient-to-t from-black/80 to-white/[0.04]" />

              <div className="absolute bottom-[12%] left-[22%] h-[28%] w-[56%] rounded-t-3xl border border-[#c7a15a]/20 bg-[#18140e]" />

              <div className="absolute bottom-[40%] right-[18%] h-[30%] w-[14%] rounded-t-full border border-white/10 bg-white/[0.03]" />

              <div className="absolute bottom-8 left-8 right-8 border-t border-white/10 pt-5">
                <p className="text-2xl text-white/80">
                  Design. Detail. Craft.
                </p>

                <p className="mt-1 text-xs text-white/35">
                  Built around your lifestyle.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <motion.div
              key={point}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c7a15a]/10 text-[#c7a15a]">
                <Check size={12} />
              </div>

              <p className="text-sm leading-6 text-white/55">
                {point}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}