import { SVGProps } from "react";

const CSharpIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
    >
        <rect x={13} y={11} width={33.9624} height={38.16} fill="url(#csharp)" />
        <defs>
            <pattern
                id="csharp"
                patternContentUnits="objectBoundingBox"
                width={1}
                height={1}
            >
                <use
                    xlinkHref="#image0_9_517"
                    transform="scale(0.00374532 0.00333333)"
                />
            </pattern>
            <image
                id="image0_9_517"
                width={267}
                height={300}
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
)

export default CSharpIcon;