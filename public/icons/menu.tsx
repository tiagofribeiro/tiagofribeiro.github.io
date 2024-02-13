import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_9_1871)">
      <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill={props.fill ?? 'white'} />
    </g>
    <defs>
      <clipPath id="clip0_9_1871">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default MenuIcon
