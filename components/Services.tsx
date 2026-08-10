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
    image: "/images/home-interior.jpg",
  },
  {
    number: "02",
    title: "Flat Interior",
    description:
      "Smart space planning and premium finishes that make every corner count.",
    icon: Building2,
    image: "/images/flat-interior.jpg",
  },
  {
    number: "03",
    title: "Villa & Bungalow",
    description:
      "Sophisticated interiors for spacious homes with a strong personal identity.",
    icon: Sofa,
    image: "/images/villa-interior.jpg",
  },
  {
    number: "04",
    title: "Office & Workspace",
    description:
      "Professional workspaces designed for productivity, comfort and brand image.",
    icon: Store,
    image: "/images/office-interior.jpg",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#090909] px-5 py-20 sm:px-8 md:py-28 lg:px-12"
    >
      <div className="mx-auto max-w-[1400px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-7 md:mb-16 md:flex-row md:items-end"
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

          <p className="max-w-md text-sm leading-7 text-white/45">
            From concept to completion, we create beautiful spaces with
            thoughtful planning, premium materials and detailed execution.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.7,
                }}
                className="group relative min-h-[460px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#111]"
              >
                {/* IMAGE */}
                <img
                  src={service.image}
                  alt={`${service.title} by Ravi & Co. Interiors`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/90" />

                {/* TOP */}
                <div className="absolute left-7 right-7 top-7 flex items-start justify-between sm:left-8 sm:right-8 sm:top-8">
                  <div className="flex items-center gap-3">
                    <span className="text-xs tracking-[0.2em] text-[#c7a15a]">
                      {service.number}
                    </span>

                    <span className="h-px w-8 bg-[#c7a15a]/60" />
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-sm transition-all duration-500 group-hover:border-[#c7a15a]/60 group-hover:text-[#c7a15a]">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-8">
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/60">
                    Interior Design
                  </p>

                  <h3 className="text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c7a15a]">
                    Explore Service

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                {/* GOLD LINE */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c7a15a] transition-all duration-700 group-hover:w-full" />
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