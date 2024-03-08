import {
  HoverEffect,
  type HoverCardItem,
} from "../../components/tsx/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="mt-5">
      <HoverEffect items={projects as HoverCardItem[]} />
    </div>
  );
}
export const projects = [
  {
    title: "5+",
    description: "Completed Projects",
  },
  {
    title: "4+",
    description: "Satisfied Clients",
  },
  {
    title: "Typescript",
    description: "Main Stack",
    itemType: "text",
  },

  {
    title: "2+",
    description: "Developer Experience",
  },
  {
    title: "GoLang",
    description: "Currently Learning",
    itemType: "text",
  },
];
