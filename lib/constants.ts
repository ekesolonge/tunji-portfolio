export const siteConfig = {
  name: "Olatunji Tajudeen",
  title: "Olatunji Tajudeen - Product Designer",
  description: "Crafting impactful user experiences and profitable solutions",
  url: "https://tunji-portfolio.vercel.app",
  image: "#", // TODO: add favicon 260x260
};

export const PROJECTS = [
  {
    name: "BLUKARD",
    description: "Digitizing paper business cards to enhance professional networking",
    tags: ["WEB DESIGN", "WEB APP", "MOBILE APP"],
    image: "/images/projects/blukard.png",
  },
  {
    name: "AFF FLAGIT",
    description: "Enhancing the accountability of govt agencies on societal \n issues",
    tags: ["MOBILE APP"],
    image: "/images/projects/flagit.png",
  },
  {
    name: "PADSHARE",
    description: "Improving the sanitary hygiene of underprivileged women and girls",
    tags: ["MOBILE APP"],
    image: "/images/projects/padshare.png",
  },
  {
    name: "4PAY",
    description: "Facilitating payments for individuals and businesses across Africa",
    tags: ["MOBILE APP"],
    image: "/images/projects/4pay.png",
  },
  {
    name: "THE NIGERIAN INCENTIVE BASED RISK SHARING SYSTEM FOR AGRICULTURAL LENDING (NIRSAL)",
    description: "Redefining agribusiness credit risks in Nigeria",
    tags: ["WEB APP", "MOBILE APP"],
    image: "/images/projects/nirsal.png",
  },
  {
    name: "FEDERAL ROAD SAFETY \n COMMISSION",
    description: "Curbing high rate of road accidents through innovative devices",
    tags: ["WEB DESIGN", "WEB APP", "MOBILE APP"],
    image: "/images/projects/frsc.png",
  },
];

export type Project = (typeof PROJECTS)[number];

export const EXPERIENCE = [
  { organisation: "Palmview Technologies", role: "Product Designer", year: "2022-Present" },
  { organisation: "Lemonwares Technologies", role: "Product Designer", year: "2024" },
  { organisation: "Oriz", role: "Product Designer", year: "2023-2024" },
  { organisation: "Codeboulevard Systems Ltd  ", role: "Product Designer", year: "2022-2023" },
];

export const TINKERING = [
  { name: "Resend Development", url: "https://resend.webflow.io" },
  { name: "Raft Development", url: "https://raft-8e2108.webflow.io" },
  { name: "Magazine Development", url: "https://magazine-ui.webflow.io" },
  { name: "Fumiwo Development", url: "https://fumiwo-baea09.webflow.io" },
  { name: "Vaultflow Development", url: "https://vaultflow-fdde8f.webflow.io" },
];
