import { HeroParallax } from "../../components/tsx/hero-parallax";
import { projects } from "./projects";

export function ProjectHero() {
  return <HeroParallax products={projects} />;
}
