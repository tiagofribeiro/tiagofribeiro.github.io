export interface CardTypes {
    children: React.ReactNode;
    onClick?: () => {}
    gapX?: number;
    gapY?: number;
    paddingX?: number;
    paddingY?: number;
    bgColor?: string;
}

export interface CardStyledTypes {
    $gapX?: number;
    $gapY?: number;
    $paddingX?: number;
    $paddingY?: number;
    $bgColor?: string;
}