import type { SVGProps } from "react";

export const LineMdCoffeeLoop = (props: SVGProps<SVGSVGElement>) => (
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
        d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="48;0"
        />
      </path>
      <path
        strokeDasharray={14}
        strokeDashoffset={14}
        d="M17 14h3c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1h-3"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur="0.2s"
          values="14;28"
        />
      </path>
    </g>
    <mask id="a">
      <path
        fill="none"
        stroke="#fff"
        strokeWidth={2}
        d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4m4-16c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4m4-16c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
      >
        <animateMotion
          calcMode="linear"
          dur="3s"
          path="M0 0v-8"
          repeatCount="indefinite"
        />
      </path>
    </mask>
    <path fill="currentColor" d="M0 7h24H0z" mask="url(#a)">
      <animate
        fill="freeze"
        attributeName="y"
        begin="0.8s"
        dur="0.6s"
        values="7;2"
      />
      <animate
        fill="freeze"
        attributeName="height"
        begin="0.8s"
        dur="0.6s"
        values="0;5"
      />
    </path>
  </svg>
);
