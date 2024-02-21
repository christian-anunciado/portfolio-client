import { HeroParallax } from "../../components/tsx/hero-parallax";
import { products } from "./projects";

export function ProjectHero() {
  return <HeroParallax products={products} />;
}
