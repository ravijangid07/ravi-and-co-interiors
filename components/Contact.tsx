"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#090909] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1fr] lg:gap-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#c7a15a]">
            Let&apos;s Create Together
          </p>

          <h2 className="text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Your dream space
            <span className="block italic text-[#c7a15a]">
              starts here.
            </span>
          </h2>

          <p className="mt-7 text-sm leading-7 text-white/50 md:text-base">
            Tell us about your project and our team will get in touch with
            you to discuss your vision, requirements and ideas.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-10 space-y-6">

            {/* PHONE */}
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

            {/* EMAIL */}
            <a
              href="mailto:raviodhana19@gmail.com"
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
                  raviodhana19@gmail.com
                </span>
              </span>
            </a>

            {/* LOCATION */}
            <div className="flex items-center gap-4 text-white/70">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10">
                <MapPin size={17} />
              </span>

              <span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Serving
                </span>

                <span className="mt-1 block text-sm">
                  Mumbai &amp; Pune, Maharashtra
                </span>
              </span>
            </div>

          </div>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/919680647191"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#c7a15a]/50 px-6 py-3 text-xs uppercase tracking-[0.18em] text-[#c7a15a] transition-all duration-300 hover:bg-[#c7a15a] hover:text-black"
          >
            WhatsApp Us
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-[2rem] border border-white/10 bg-[#111111] p-7 md:p-10"
        >
          <div className="mb-8">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#c7a15a]">
              Start Your Project
            </p>

            <h3 className="text-2xl text-white md:text-3xl">
              Book a Consultation
            </h3>

            <p className="mt-2 text-sm text-white/40">
              Share a few details about your project.
            </p>
          </div>

          <form
            action="https://formsubmit.co/raviodhana19@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Interior Design Enquiry - Ravi & Co."
            />

            <input
              type="hidden"
              name="_captcha"
              value="false"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
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
              className="w-full rounded-xl border border-white/10 bg-[#111111] px-5 py-4 text-sm text-white/60 outline-none focus:border-[#c7a15a]/60"
            >
              <option value="" disabled>
                Select Project Type
              </option>

              <option value="Home Interior">
                Home Interior
              </option>

              <option value="Flat Interior">
                Flat Interior
              </option>

              <option value="Villa / Bungalow">
                Villa / Bungalow
              </option>

              <option value="Office / Workspace">
                Office / Workspace
              </option>

              <option value="Custom Furniture">
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
              className="flex w-full items-center justify-center gap-3 rounded-full bg-[#c7a15a] px-6 py-4 text-sm font-semibold text-black transition-transform duration-300 hover:scale-[1.01]"
            >
              Send Enquiry
              <ArrowUpRight size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}