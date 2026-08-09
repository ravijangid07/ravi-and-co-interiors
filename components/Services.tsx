"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Home,
  Sofa,
  Store,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Home Interior",
    description:
      "Warm, elegant and functional interiors designed around your lifestyle.",
    icon: Home,
  },
  {
    number: "02",
    title: "Flat Interior",
    description:
      "Smart space planning and premium finishes that make every corner count.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Villa & Bungalow",
    description:
      "Sophisticated interiors for spacious homes with a strong personal identity.",
    icon: Sofa,
  },
  {
    number: "04",
    title: "Office & Workspace",
    description:
      "Professional workspaces designed for productivity, comfort and brand image.",
    icon: Store,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#080808] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 sm:mb-16 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#c7a15a] sm:text-xs">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Interior solutions
              <span className="block italic text-[#c7a15a]">
                made for you.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/45 sm:leading-7">
            From concept to completion, we create beautiful spaces with
            thoughtful planning, premium materials and detailed execution.
          </p>
        </motion.div>

        {/* SERVICES */}
        <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 md:grid-cols-2 md:rounded-[2rem]">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
                className="group relative min-h-[340px] bg-[#101010] p-6 transition-all duration-500 hover:bg-[#17140f] sm:min-h-[360px] sm:p-8 md:p-10"
              >
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#c7a15a]">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-500 group-hover:border-[#c7a15a]/50 group-hover:text-[#c7a15a] sm:h-12 sm:w-12">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 md:bottom-10 md:left-10 md:right-10">
                  <h3 className="text-2xl tracking-[-0.02em] text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/45 sm:mt-4">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#c7a15a] sm:mt-6 sm:text-xs">
                    Explore Service

                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                {/* HOVER LINE */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#c7a15a] transition-all duration-500 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div className="mt-8 flex items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/30 sm:mt-10">
          <span className="h-px w-8 bg-[#c7a15a]/50" />
          <span>Concept • Design • Execution</span>
        </div>
      </div>
    </section>
  );
}