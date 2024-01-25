import * as React from "react"
import { SVGProps } from "react"

const ArrowSvg = (props: SVGProps<SVGSVGElement>) => 
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_16_167)">
      <path d="M0 9L16 24L32 9H0Z" fill={props.fill ?? 'white'} />
    </g>
    <defs>
      <clipPath id="clip0_16_167">
        <rect width={32} height={32} fill="white" />
      </clipPath>
    </defs>
  </svg>

export default ArrowSvg
