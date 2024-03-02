import { AnimatedTooltip } from "../../components/tsx/animated-tooltip";
import { technologies } from "./technologies";

type Props = {};

function Technology({}: Props) {
  return (
    <div>
      <p>Here are a few technologies I’ve been working with recently:</p>
      <div className="mt-6 grid grid-cols-4 place-items-center gap-8 md:grid-cols-8">
        {technologies.map((tech, idx) => (
          <AnimatedTooltip
            key={idx}
            items={{
              href: tech.href,
              src: tech.src,
              name: tech.alt,
              id: idx,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default Technology;
