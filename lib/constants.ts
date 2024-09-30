export const siteConfig = {
  name: "Olatunji Tajudeen",
  title: "Olatunji Tajudeen - Product Designer",
  description: "Crafting impactful user experiences and profitable solutions",
  url: "https://tunji-portfolio.vercel.app",
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
