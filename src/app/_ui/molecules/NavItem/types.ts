export interface NavItemTypes {
    mobile?: boolean;
    text: string;
    route: string;
    subItems?: NavItemTypes[];
}

export interface NavItemStyledTypes {
    $hover: boolean;
}