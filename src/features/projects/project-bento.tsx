import { BentoGrid, BentoGridItem } from "../../components/tsx/bento-grid";
import { projects } from "./projects";

export function ProjectBento() {
  return (
    <BentoGrid className="mx-auto max-w-5xl pb-10">
      <span className="mb-5 self-start text-3xl font-bold tracking-wide text-sky-500 md:col-span-3 md:text-4xl">
        Projects
      </span>
      {projects.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          projectImg={item.projectImg}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          href={item.href}
        />
      ))}
    </BentoGrid>
  );
}
