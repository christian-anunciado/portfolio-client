import Dexe from "../../assets/images/dexe.png";
import GreatVet from "../../assets/images/greatvet.png";
import HustleWing from "../../assets/images/hustlewing.png";
import Mynth from "../../assets/images/mynth.png";
import NinjaStore from "../../assets/images/ninja_store.png";
import SubscriptionApp from "../../assets/images/subscription_app.png";
import TeknoPlat from "../../assets/images/teknoplat.png";
import Tina from "../../assets/images/tina.png";
import type { Product } from "../../components/tsx/hero-parallax";

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
