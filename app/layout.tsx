import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi & Co. Interiors | Luxury Interior Design in Mumbai & Pune",
  description:
    "Ravi & Co. Interiors creates luxury interior designs and custom furniture for homes, flats, villas, bungalows and workspaces in Mumbai and Pune.",
  keywords: [
    "luxury interior design Mumbai",
    "luxury interior design Pune",
    "interior designer Mumbai",
    "interior designer Pune",
    "home interior design",
    "flat interior design",
    "villa interior design",
    "bungalow interior design",
    "office interior design",
    "custom furniture",
    "Ravi & Co. Interiors",
  ],
  authors: [{ name: "Ravi & Co. Interiors" }],
  creator: "Ravi & Co. Interiors",
  publisher: "Ravi & Co. Interiors",

  openGraph: {
    title: "Ravi & Co. Interiors | Luxury Interior Design",
    description:
      "Bespoke luxury interiors and custom furniture for modern homes, villas, apartments and workspaces in Mumbai & Pune.",
    type: "website",
    locale: "en_IN",
    siteName: "Ravi & Co. Interiors",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}