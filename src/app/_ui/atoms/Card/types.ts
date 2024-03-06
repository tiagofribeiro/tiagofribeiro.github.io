export interface CardTypes {
    children: React.ReactNode;
    gapX?: number;
    gapY?: number;
    paddingX?: number;
    paddingY?: number;
    bgColor?: string;
    hasClick?: boolean;
    onClick?: () => void;
}

export interface CardStyledTypes {
    $gapX?: number;
    $gapY?: number;
    $paddingX?: number;
    $paddingY?: number;
    $bgColor?: string;
    $hasClick?: boolean;
}