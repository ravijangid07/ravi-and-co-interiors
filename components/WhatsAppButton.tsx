"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919680647191?text=Hello%20Ravi%20%26%20Co.%20Interiors%2C%20I%20want%20to%20discuss%20an%20interior%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Ravi & Co. Interiors on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle size={27} fill="currentColor" />
    </a>
  );
}