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
    <section id="about" className="bg-[#090909] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">

        {/* MAIN ABOUT */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c7a15a] sm:text-xs">
              About Ravi & Co.
            </p>

            <h2 className="text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
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
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#c7a15a]/50 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#c7a15a] transition-all duration-300 hover:bg-[#c7a15a] hover:text-black"
            >
              Work With Us
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* RIGHT INTERIOR IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515] sm:min-h-[540px]">

              <img
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=90"
                alt="Luxury interior design"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              {/* TOP LABEL */}
              <div className="absolute left-7 top-7">
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#c7a15a]">
                  Our Philosophy
                </p>
              </div>

              {/* BOTTOM TEXT */}
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                <div className="border-t border-white/20 pt-5">
                  <p className="text-2xl text-white sm:text-3xl">
                    Design. Detail. Craft.
                  </p>

                  <p className="mt-2 text-xs text-white/60">
                    Built around your lifestyle.
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* FEATURES */}
        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
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