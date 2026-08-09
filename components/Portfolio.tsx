"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Home Interior",
    title: "Modern Luxury Living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "02",
    category: "Bedroom Interior",
    title: "Elegant Master Suite",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "03",
    category: "Villa Interior",
    title: "Contemporary Villa",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "04",
    category: "Office & Workspace",
    title: "Premium Office",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=90",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#080808] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c7a15a] sm:text-xs">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Spaces we&apos;ve
            <span className="block italic text-[#c7a15a]">
              brought to life.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
            A selection of interiors designed with refined materials,
            thoughtful details and a timeless approach to modern living.
          </p>
        </motion.div>

        {/* Portfolio Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
              }}
              className="group relative min-h-[430px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#151515] sm:min-h-[500px] sm:rounded-[2rem]"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={`${project.title} - Ravi & Co. Interiors`}
                loading={index < 2 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/5" />

              {/* Category */}
              <div className="absolute left-5 right-5 top-5 flex items-center gap-3 sm:left-8 sm:right-8 sm:top-8">
                <span className="text-xs text-[#c7a15a]">
                  {project.number}
                </span>

                <span className="h-px w-7 bg-[#c7a15a]/50 sm:w-8" />

                <span className="text-[9px] uppercase tracking-[0.18em] text-white/75 sm:text-[10px]">
                  {project.category}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <h3 className="text-2xl tracking-[-0.02em] text-white sm:text-3xl">
                  {project.title}
                </h3>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#c7a15a] sm:text-xs"
                >
                  View Project
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Detail */}
        <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/30">
          <span className="h-px w-8 bg-[#c7a15a]/50" />
          <span>Designed in Pune • Crafted for Living</span>
        </div>
      </div>
    </section>
  );
}