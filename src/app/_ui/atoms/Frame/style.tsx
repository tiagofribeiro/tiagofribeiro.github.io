'use client'

import styled from "styled-components";
import { FrameStyledTypes } from "./types";

const Container = styled.div<FrameStyledTypes>`
    display: inline-flex;
    flex: 1;
    max-width: 1100px;

    ${({ $direction }) => $direction && `
        flex-direction: ${$direction};
    `};

    ${({ $marginY, $marginX }) => `
        margin: ${$marginY}px ${$marginX}px;
    `}

    ${({ $paddingY, $paddingX }) => `
        padding: ${$paddingY}px ${$paddingX}px;
    `}

    ${({ $align }) => $align && `
        align-items: ${$align};
    `}

    ${({ $justify }) => $justify && `
        justify-content: ${$justify};    
    `}
`;

export { Container }