'use client'

import styled from "styled-components";

import { FlexibleListStyledTypes } from "./types";

const Container = styled.div<FlexibleListStyledTypes>(({
    $gapX,
    $gapY,
    $marginX = 0,
    $marginY = 0,
    $direction = 'row',
}) => `
    display: flex;
    flex-direction: ${$direction};
    margin: ${$marginY}px ${$marginX}px;

    ${$gapX && `column-gap: ${$gapX}px`};
    ${$gapY && `row-gap: ${$gapY}px`};
`);

export { Container }