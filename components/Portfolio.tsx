"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Home Interior",
    title: "Modern Luxury Living",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "02",
    category: "Bedroom Interior",
    title: "Elegant Master Suite",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "03",
    category: "Villa Interior",
    title: "Contemporary Villa",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    number: "04",
    category: "Workspace",
    title: "Premium Office",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-16">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-4xl leading-tight text-white md:text-6xl">
            Spaces we&apos;ve
            <span className="block italic text-[#c7a15a]">
              brought to life.
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#151515]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute left-8 top-8 flex items-center gap-3">
                <span className="text-xs text-[#c7a15a]">
                  {project.number}
                </span>

                <span className="h-px w-8 bg-[#c7a15a]/50" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-2xl text-white md:text-3xl">
                  {project.title}
                </h3>

                <button
                  type="button"
                  className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c7a15a]"
                >
                  View Project
                  <ArrowUpRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}