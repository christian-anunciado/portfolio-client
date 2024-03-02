import Dexe from "../../assets/images/dexe.png";
import GreatVet from "../../assets/images/greatvet.png";
import HustleWing from "../../assets/images/hustlewing.png";
import Mynth from "../../assets/images/mynth.png";
import NinjaStore from "../../assets/images/ninja_store.png";
import SubscriptionApp from "../../assets/images/subscription_app.png";
import TeknoPlat from "../../assets/images/teknoplat.png";
import Tina from "../../assets/images/tina.png";
import { ICONS } from "../../shared/constants";

export type Icon = {
  href: string;
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  projectImg: string;
  href: string;
  subTitle: string;
  icons: Icon[];
  liveLink?: string;
  sourceLink?: string;
};

export const PROJECTS_THUMBNAILS = {
  dexe: Dexe.src,
  greatvet: GreatVet.src,
  hustlewing: HustleWing.src,
  mynth: Mynth.src,
  ninjaStore: NinjaStore.src,
  subscriptionApp: SubscriptionApp.src,
  teknoplat: TeknoPlat.src,
  tina: Tina.src,
} as const;

export const projects: Project[] = [
  {
    title: "Dexe",
    description: "An online platform for discovering designers.",
    projectImg: PROJECTS_THUMBNAILS.dexe,
    href: "/projects/dexe",
    subTitle: "Discover Designers",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.ShadCN,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.NextJs,
    ],
    liveLink: "https://join.dexe.club/",
    sourceLink: "",
  },
  {
    title: "GreatVet",
    description:
      "An online platform connecting pet owners with top local veterinarians.",
    projectImg: PROJECTS_THUMBNAILS.greatvet,
    href: "/projects/greatvet",
    subTitle: "Connect with Veterinarians",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "https://greatvet.vercel.app/",
    sourceLink: "",
  },
  {
    title: "HustleWing",
    description:
      "An online platform for professionals to discover rewarding side hustles alongside their main job.",
    projectImg: PROJECTS_THUMBNAILS.hustlewing,
    href: "/projects/hustlewing",
    subTitle: "Discover Side Hustles",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "https://hustlewing.com/",
    sourceLink: "",
  },
  {
    title: "Mynth",
    description:
      "Facilitates cross-chain swaps between Cardano and other blockchains, enhancing asset conversion and enabling easy arbitrage",
    projectImg: PROJECTS_THUMBNAILS.mynth,
    href: "/projects/mynth",
    subTitle: "Cross-chain Swaps",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "https://www.mynth.ai/",
    sourceLink: "",
  },
  {
    title: "Ninja Store",
    description:
      "An online shopping platform that offers a wide range of fashionable and stylish products.",
    projectImg: PROJECTS_THUMBNAILS.ninjaStore,
    href: "/projects/ninja-store",
    subTitle: "Online Shopping",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "",
    sourceLink: "",
  },
  {
    title: "Subscription App",
    description:
      "Effortlessly track and manage client subscriptions with the app. Never miss a renewal deadline again.",
    projectImg: PROJECTS_THUMBNAILS.subscriptionApp,
    href: "/projects/subscription-app",
    subTitle: "Manage Subscriptions",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "",
    sourceLink: "",
  },
  {
    title: "TeknoPlat",
    description:
      "A video conference app where pitches are validated and scored according to their authenticity.",
    projectImg: PROJECTS_THUMBNAILS.teknoplat,
    href: "/projects/teknoplat",
    subTitle: "Video Conference",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "https://teknoplat.com/",
    sourceLink: "",
  },
  {
    title: "Tina 2.0.",
    description:
      "OpenAI-powered chatbot for Cebu Institute of Technology University, providing fast, reliable answers to latest inquiries.",
    projectImg: PROJECTS_THUMBNAILS.tina,
    href: "/projects/tina-2-0",
    subTitle: "AI Chatbot",
    icons: [
      ICONS.Astro,
      ICONS.CSS3,
      ICONS.HTML5,
      ICONS.Java,
      ICONS.Python,
      ICONS.React,
      ICONS.TypeScript,
    ],
    liveLink: "https://tina-2-0.vercel.app/",
    sourceLink: "",
  },
];
