export interface FlexibleListTypes {
    gapX?: number;
    gapY?: number;
    marginX?: number;
    marginY?: number;
    direction?: 'column' | 'row';
    children: React.ReactNode;
}

export interface FlexibleListStyledTypes {
    $gapX?: number;
    $gapY?: number;
    $marginX?: number;
    $marginY?: number;
    $direction?: 'column' | 'row';
}