import React from "react";
import type { SVGProps } from "react";

export function PointingDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="#ffe500"
        d="M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6"
      ></path>
      <path
        fill="#fff48c"
        d="M39 26.28a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v3.89A7.6 7.6 0 0 1 18.85 9H23a12.54 12.54 0 0 1 6.75 2c5.5 3.47 3.5 6.26 9.25 15.28"
      ></path>
      <path
        fill="none"
        stroke="#45413c"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.85 26.24a2.6 2.6 0 0 0 2.61-2.6v2.6a2.78 2.78 0 1 0 5.56 0a2.78 2.78 0 1 0 5.56 0v12.41a2.42 2.42 0 1 0 4.84 0V20.19A8.15 8.15 0 0 0 34 25a3.94 3.94 0 0 0 5 1.33a1.58 1.58 0 0 0 .66-2.17l-2.2-4A26.76 26.76 0 0 1 35 14.25a12.27 12.27 0 0 0-5.31-7.13a12.54 12.54 0 0 0-6.75-2h-4.09a7.6 7.6 0 0 0-7.6 7.6v10.92a2.59 2.59 0 0 0 2.6 2.6m8.17 0v-2.09m5.56 2.09v-2.09m4.84-3.96v-1.86"
      ></path>
      <path
        fill="#45413c"
        d="M13 45.5a11 1.5 0 1 0 22 0a11 1.5 0 1 0-22 0"
        opacity={0.15}
      ></path>
    </svg>
  );
}
