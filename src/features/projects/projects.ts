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
    description:
      "Led the development of the entire front-end web application for Dexe, an online platform tailored for discovering talented designers. Our primary objective was to empower designers to showcase their portfolios through personalized feeds, facilitating visibility and recognition from their dream companies.",
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
      "Led the development of the entire front-end web applications for GreatVet, an exclusive online platform that connects pet owners with the best veterinarians in their area.",
    projectImg: PROJECTS_THUMBNAILS.greatvet,
    href: "/projects/greatvet",
    subTitle: "Vet Finder",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.MantineUI,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.NextJs,
    ],
    liveLink: "https://greatvet.vercel.app/",
    sourceLink: "",
  },
  {
    title: "HustleWing",
    description:
      "One of the front-end developers at HustleWing, an online platform for professionals to discover rewarding side hustles alongside their main job.",
    projectImg: PROJECTS_THUMBNAILS.hustlewing,
    href: "/projects/hustlewing",
    subTitle: "Discover Side Hustles",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.ShadCN,
      ICONS.TypeScript,
      ICONS.Go,
      ICONS.React,
      ICONS.NextJs,
    ],
    liveLink: "https://hustlewing.com/",
    sourceLink: "",
  },
  {
    title: "Mynth",
    description:
      "One of the full-stack developers at Mynth, an online platform that facilitates cross-chain swaps between Cardano and other blockchains, enhancing asset conversion and enabling easy arbitrage",
    projectImg: PROJECTS_THUMBNAILS.mynth,
    href: "/projects/mynth",
    subTitle: "Cross-chain Swaps",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.PayloadCMS,
      ICONS.React,
      ICONS.NextJs,
    ],
    liveLink: "https://www.mynth.ai/",
    sourceLink: "",
  },
  {
    title: "Tina 2.0.",
    description:
      "Led the entire development for TINA 2.0., an OpenAI-powered chatbot for Cebu Institute of Technology University, providing fast, reliable answers to latest inquiries related to the university.",
    projectImg: PROJECTS_THUMBNAILS.tina,
    href: "/projects/tina-2-0",
    subTitle: "OpenAI Chatbot",
    icons: [
      ICONS.HTML5,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Python,
      ICONS.React,
      ICONS.OpenAi,
    ],
    liveLink: "https://tina-2-0.vercel.app/",
    sourceLink: "https://github.com/christian-anunciado/TINA2.0",
  },
  {
    title: "Ninja Store",
    description:
      "An online shopping platform that offers a wide range of fashionable and stylish products.",
    projectImg: PROJECTS_THUMBNAILS.ninjaStore,
    href: "/projects/ninja-store",
    subTitle: "Online Shopping",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.Strapi,
      ICONS.React,
    ],
    liveLink: "https://ninja-store.vercel.app/",
    sourceLink: "https://github.com/christian-anunciado/ninja-store",
  },
  {
    title: "Subscription App",
    description:
      "Effortlessly track and manage client subscriptions with the app. Never miss a renewal deadline again.",
    projectImg: PROJECTS_THUMBNAILS.subscriptionApp,
    href: "/projects/subscription-app",
    subTitle: "Manage Subscriptions",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.TypeScript,
      ICONS.ChakraUI,
      ICONS.React,
      ICONS.NextJs,
    ],
    liveLink: "",
    sourceLink: "https://github.com/jerichonaces/subscription-monitoring-app",
  },
  {
    title: "TeknoPlat",
    description:
      "Led the entire development of TeknoPlat, a video conference app where pitches are validated and scored according to their authenticity.",
    projectImg: PROJECTS_THUMBNAILS.teknoplat,
    href: "/projects/teknoplat",
    subTitle: "Video Conference",
    icons: [
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.TailwindCSS,
      ICONS.MaterialUI,
      ICONS.TypeScript,
      ICONS.React,
    ],
    liveLink: "",
    sourceLink: "https://github.com/christian-anunciado/TeknoPlat",
  },
];
