"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#090909] px-6 py-24 md:px-10 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
              Let's Create Together
            </p>

            <h2 className="text-4xl leading-tight text-white md:text-6xl">
              Your dream space
              <span className="block italic text-[#c7a15a]">
                starts here.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-white/50 md:text-base">
              Tell us about your project and our team will get in touch with
              you to discuss your vision, requirements and ideas.
            </p>

            <div className="mt-10 space-y-6">
              <a
                href="tel:+919680647191"
                className="flex items-center gap-4 text-white/70 transition-colors hover:text-[#c7a15a]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                  <Phone size={17} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Call Us
                  </span>
                  <span className="mt-1 block text-sm">
                    +91 96806 47191
                  </span>
                </span>
              </a>

              <a
                href="mailto:hello@raviandcointeriors.com"
                className="flex items-center gap-4 text-white/70 transition-colors hover:text-[#c7a15a]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                  <Mail size={17} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Email
                  </span>
                  <span className="mt-1 block text-sm">
                    hello@raviandcointeriors.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 text-white/70">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                  <MapPin size={17} />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Location
                  </span>
                  <span className="mt-1 block text-sm">
                    Pune, Maharashtra
                  </span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-[#111111] p-7 md:p-10"
          >
            <div className="mb-8">
              <h3 className="text-2xl text-white">
                Book a Consultation
              </h3>

              <p className="mt-2 text-sm text-white/40">
                Share a few details about your project.
              </p>
            </div>

            <form
              action="https://formsubmit.co/hello@raviandcointeriors.com"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Interior Design Enquiry"
              />

              <input
                type="hidden"
                name="_captcha"
                value="false"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7a15a]/60"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7a15a]/60"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7a15a]/60"
              />

              <select
                name="project_type"
                defaultValue=""
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white/60 outline-none focus:border-[#c7a15a]/60"
              >
                <option value="" disabled className="bg-[#111111]">
                  Select Project Type
                </option>
                <option value="Home Interior" className="bg-[#111111]">
                  Home Interior
                </option>
                <option value="Flat Interior" className="bg-[#111111]">
                  Flat Interior
                </option>
                <option value="Villa / Bungalow" className="bg-[#111111]">
                  Villa / Bungalow
                </option>
                <option value="Office / Workspace" className="bg-[#111111]">
                  Office / Workspace
                </option>
                <option value="Custom Furniture" className="bg-[#111111]">
                  Custom Furniture
                </option>
              </select>

              <textarea
                name="message"
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-[#c7a15a]/60"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-[#c7a15a] px-6 py-4 text-sm font-semibold text-black transition-transform hover:scale-[1.01]"
              >
                Send Enquiry
                <ArrowUpRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}