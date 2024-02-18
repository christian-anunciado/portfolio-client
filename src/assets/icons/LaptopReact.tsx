import type { SVGProps } from "react";

export function LineMdLaptop(props: SVGProps<SVGSVGElement>) {
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
        <path strokeDasharray={50} strokeDashoffset={50} d="M12 17H5V7H19V17Z">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin={"0.8s"}
            dur="0.6s"
            values="50;0"
          ></animate>
        </path>
        <path strokeDasharray={20} strokeDashoffset={20} d="M3 19H21">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.2s"
            dur="0.3s"
            values="20;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
