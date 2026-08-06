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
      className="bg-[#090909] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
              What We Do
            </p>

            <h2 className="max-w-3xl text-4xl leading-tight tracking-tight text-white md:text-6xl">
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
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative min-h-[330px] bg-[#101010] p-8 transition-all duration-500 hover:bg-[#17140f] md:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-[#c7a15a]">
                    {service.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-500 group-hover:border-[#c7a15a]/50 group-hover:text-[#c7a15a]">
                    <Icon size={21} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
                  <h3 className="text-2xl text-white md:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-white/45">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#c7a15a]">
                    Explore Service
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}