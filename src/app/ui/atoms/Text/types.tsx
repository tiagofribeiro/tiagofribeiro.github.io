import { KnownTarget } from "styled-components/dist/types";

export interface TextTypes {
    as?: KnownTarget;
    title?: boolean,
    primary?: boolean;
    maxW?: number;
    marginX?: number;
    marginY?: number;
    alignment?: string;
    color?: string;
    children: React.ReactNode;
}

export interface TextTitleTypes {
    as?: KnownTarget;
    $maxW?: number;
    $marginX?: number;
    $marginY?: number;
    $alignment?: string;
    $color?: string;
}

export interface TextBodyTypes extends TextTitleTypes {
    $primary?: boolean;
}


