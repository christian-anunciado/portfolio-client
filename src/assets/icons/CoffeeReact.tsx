import type { SVGProps } from "react";

export function LineMdCoffeeLoop(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path
          strokeDasharray={48}
          strokeDashoffset={48}
          d="M17 4v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V4z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.6s"
            values="48;0"
          ></animate>
        </path>
        <path
          strokeDasharray={14}
          strokeDashoffset={14}
          d="M17 9H20C20.55 9 21 8.55 21 8V5C21 4.45 20.55 4 20 4H17"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1s"
            dur="0.2s"
            values="14;28"
          ></animate>
        </path>
        <path strokeDasharray={10} strokeDashoffset={10} d="M11 20h8M11 20h-8">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.3s"
            values="10;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
