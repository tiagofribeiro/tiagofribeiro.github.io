import { SVGProps } from "react"

const MailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_140_375)">
      <path
        d="M33.3335 6.66675H6.66683C4.8335 6.66675 3.35016 8.16675 3.35016 10.0001L3.3335 30.0001C3.3335 31.8334 4.8335 33.3334 6.66683 33.3334H33.3335C35.1668 33.3334 36.6668 31.8334 36.6668 30.0001V10.0001C36.6668 8.16675 35.1668 6.66675 33.3335 6.66675ZM33.3335 13.3334L20.0002 21.6667L6.66683 13.3334V10.0001L20.0002 18.3334L33.3335 10.0001V13.3334Z"
        fill={props.fill ?? 'white'}
      />
    </g>
    <defs>
      <clipPath id="clip0_140_375">
        <rect width={40} height={40} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default MailIcon