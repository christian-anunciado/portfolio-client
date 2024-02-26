import Dexe from "../../assets/images/dexe.png";
import GreatVet from "../../assets/images/greatvet.png";
import HustleWing from "../../assets/images/hustlewing.png";
import Mynth from "../../assets/images/mynth.png";
import NinjaStore from "../../assets/images/ninja_store.png";
import SubscriptionApp from "../../assets/images/subscription_app.png";
import TeknoPlat from "../../assets/images/teknoplat.png";
import Tina from "../../assets/images/tina.png";
import type { Product } from "../../components/tsx/hero-parallax";
import { type BentoProps } from "./../../components/tsx/bento-grid";

export const products: Product[] = [
  {
    title: "Dexe",
    link: "https://join.dexe.club/",
    thumbnail: Dexe.src,
  },
  {
    title: "GreatVet",
    link: "https://greatvet.vercel.app/",
    thumbnail: GreatVet.src,
  },
  {
    title: "HustleWing",
    link: "https://hustlewing.com/",
    thumbnail: HustleWing.src,
  },
  {
    title: "Mynth",
    link: "https://www.mynth.ai/",
    thumbnail: Mynth.src,
  },
  {
    title: "Tina 2.0.",
    link: "https://tina-2-0.vercel.app/",
    thumbnail: Tina.src,
  },
  {
    title: "Subscription App",
    link: "",
    thumbnail: SubscriptionApp.src,
  },
  {
    title: "Ninja Store",
    link: "",
    thumbnail: NinjaStore.src,
  },
  {
    title: "TeknoPlat",
    link: "https://teknoplat.com/",
    thumbnail: TeknoPlat.src,
  },
];

export const bentoItems: BentoProps[] = [
  {
    title: "Dexe",
    description: "An online platform for discovering designers.",
    thumbnail: Dexe.src,
    className: "md:col-span-2",
  },
  {
    title: "GreatVet",
    description:
      "An online platform connecting pet owners with top local veterinarians.",
    thumbnail: GreatVet.src,
    className: "md:col-span-1",
  },
  {
    title: "HustleWing",
    description:
      "An online platform for professionals to discover rewarding side hustles alongside their main job.",
    thumbnail: HustleWing.src,
    className: "md:col-span-2",
  },
  {
    title: "Mynth",
    description:
      "Facilitates cross-chain swaps between Cardano and other blockchains, enhancing asset conversion and enabling easy arbitrage",
    thumbnail: Mynth.src,
    className: "md:col-span-1",
  },
  {
    title: "Tina 2.0.",
    description:
      "OpenAI-powered chatbot for Cebu Institute of Technology University, providing fast, reliable answers to latest inquiries.",
    thumbnail: Tina.src,
    className: "md:col-span-2",
  },
  {
    title: "Subscription App",
    description:
      "Effortlessly track and manage client subscriptions with the app. Never miss a renewal deadline again.",
    thumbnail: SubscriptionApp.src,
    className: "md:col-span-1",
  },
  {
    title: "Ninja Store",
    description:
      "An online shopping platform that offers a wide range of fashionable and stylish products.",
    thumbnail: NinjaStore.src,
    className: "md:col-span-2",
  },
  {
    title: "TeknoPlat",
    description:
      "A video conference app where pitches are validated and scored according to their authenticity.",
    thumbnail: TeknoPlat.src,
    className: "md:col-span-2",
  },
];
