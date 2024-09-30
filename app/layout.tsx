import "./globals.css";

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { siteConfig } from "@/lib/constants";

const cabinetGrotesk = localFont({
  src: "./fonts/CabinetGrotesk-Variable.ttf",
  variable: "--font-cabinet-grotesk",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: "@olatunji___",
    creator: "@ekesolonge",
  },
  applicationName: siteConfig.title,
  category: "UI/UX Design, Portfolio, Web Design",
  creator: "Ekeso Longe",
  authors: [{ name: siteConfig.name }],
  keywords: [
    `${siteConfig.name} Portfolio`,
    "UI Designer",
    "UX Designer",
    "Web Design",
    "App Design",
    "Mobile Design",
    "User Interface",
    "User Experience",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  sameAs: [
    "https://x.com/olatunji___",
    "https://www.linkedin.com/in/olatunji-tajudeen",
    "https://www.behance.net/tajudeenismail1",
  ],
  jobTitle: "UI Designer",
  worksFor: {
    "@type": "Organization",
    name: "Freelancer",
  },
  image: `${siteConfig.url}/images/profile.png`,
  description: `${siteConfig.name} is a UI/UX designer specializing in web and mobile design.`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={cabinetGrotesk.variable}>
      <body>
        <Header />
        <main className="mt-[5.375rem] md:mt-[4.75rem]">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
