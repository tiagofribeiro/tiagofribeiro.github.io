'use client'

import styled from "styled-components"
import { TextBodyTypes, TextTitleTypes } from "./types";

const Header = styled.h1<TextTitleTypes>(({
    as,
    $maxW = 100,
    $marginX = 0,
    $marginY = 0,
    $alignment = 'left',
    $color
}) => `
    max-width: ${$maxW}%;
    margin: ${$marginY} ${$marginX};
    text-align: ${$alignment};
    color: ${$color};

    ${as === 'h1' && `
        font-size: 60px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 40px;
            max-width: 80%;
        }
    `};

    ${as === 'h2' && `
        font-size: 48px;
        font-weight: bold;

        @media screen and (max-width: 980px) {
            max-width: 90%;
        }
        
        @media screen and (max-width: 768px) {
            font-size: 30px;
        }
    `};

    ${as === 'h3' && `
        font-size: 36px;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 28px;
        }
    `};

    ${as === 'h4' && `
        font-size: 32px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }
    `};
`);

const Body = styled.span<TextBodyTypes>(({ 
    $primary, 
    $maxW = 100,
    $marginX = 0,
    $marginY = 0,
    $alignment = 'left',
    $color
 }) => `
    max-width: ${$maxW}%;
    margin: ${$marginY} ${$marginX};
    text-align: ${$alignment};
    font-size: ${$primary ? '18' : '16'}px;
    font-weight: ${$primary ? 500 : 400};
    color: ${$color};

    @media screen and (max-width: 768px) {
        font-size: ${$primary ? '16px' : '14px'};
    }
`);


export { Header, Body }