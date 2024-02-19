import type { SVGProps } from "react";

export function LineMdPerson(props: SVGProps<SVGSVGElement>) {
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
          strokeDasharray={20}
          strokeDashoffset={20}
          d="M12 5C13.66 5 15 6.34 15 8C15 9.65685 13.6569 11 12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.4s"
            values="20;0"
          ></animate>
        </path>
        <path
          strokeDasharray={36}
          strokeDashoffset={36}
          d="M12 14C16 14 19 16 19 17V19H5V17C5 16 8 14 12 14z"
          opacity={1}
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.4s"
            values="36;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
