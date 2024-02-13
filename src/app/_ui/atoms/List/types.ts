export interface ListTypes {
    gapX?: number;
    gapY?: number;
    marginX?: number;
    marginY?: number;
    direction?: 'column' | 'row';
    children: React.ReactNode;
}

export interface ListStyledTypes {
    $gapX?: number;
    $gapY?: number;
    $marginX?: number;
    $marginY?: number;
    $direction?: 'column' | 'row';
}