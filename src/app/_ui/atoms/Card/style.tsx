'use client'

import styled, { css, keyframes } from "styled-components";
import { CardStyledTypes } from "./types";

const Container = styled.div<CardStyledTypes>(({
    $gapX,
    $gapY,
    $paddingX = 0,
    $paddingY = 0,
    $bgColor = `var(--grey-300)`,
}) => `
    display: flex;
    ${$gapX && `column-gap: ${$gapX}px`};
    ${$gapY && `row-gap: ${$gapY}px`};
    padding: ${$paddingY}px ${$paddingX}px;
    align-items: center;
    border-radius: 20px;
    background-color: ${$bgColor};
    animation: appearAnimation 400ms linear forwards;

    @keyframes appearAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`);

export { Container }