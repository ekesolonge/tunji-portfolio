import type { Metadata } from "next";

import Experience from "@/components/experience";
import Profile from "@/components/profile";
import Tinkering from "@/components/tinkering";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: "Designing with purpose, creating with impact",
  openGraph: {
    title: `About | ${siteConfig.title}`,
    description: "Designing with purpose, creating with impact",
    images: ["/images/profile.png"],
    url: `${siteConfig.url}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.title}`,
    description: "Designing with purpose, creating with impact",
    images: ["/images/profile.png"],
  },
};

export default function About() {
  return (
    <div className="container space-y-12 py-16 md:space-y-[5.25rem] md:py-[6.5rem]">
      <Profile />
      <Experience />
      <Tinkering />
    </div>
  );
}
