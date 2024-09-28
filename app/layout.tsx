import "./globals.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const cabinetGrotesk = localFont({
  src: "./fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Olatunji Tajudeen - Product Designer",
  description: "Crafting impactful user experiences and profitable solutions",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cabinetGrotesk.variable}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
