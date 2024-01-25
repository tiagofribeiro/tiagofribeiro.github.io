'use client'

import Link from "next/link";
import styled from "styled-components";
import { ItemStyledTypes } from "./types";

const Frame = styled.div`
    display: flex;
    justify-content: center;
`;

const Item = styled(Link)<ItemStyledTypes>`
    display: flex;
    height: 20px;
    padding: 12px;
    column-gap: 8px;
    align-items: center;
    border-radius: 4px;
    box-sizing: content-box;
    text-decoration: none;
    transition: 400ms;

    ${({$hover}) => $hover && `
        color: #00CE78;
        background-color: rgba(0,206,120, 0.1);
    `}
`;

const SubFrame = styled.div<ItemStyledTypes>`
    display: flex;
    visibility: hidden;
    flex-direction: column;
    row-gap: 8px;
    position: absolute;
    top: 88px;
    border: solid 2px #2B2B2B;
    background-color: #1A1A1A;
    transition: 200ms;
    transition-delay: 500ms;
    transform: scaleY(0);
    transform-origin: top;
    

    ${({$hover}) => $hover && `
        transition-delay: 0ms;
        transform: scaleY(1);
        visibility: visible;
    `}
    
`;

const SubItem = styled(Link)`
    display: flex;
    flex-direction: column;
    width: 152px;
    height: 20px;
    margin: 2px;
    padding: 12px;
    box-sizing: content-box;
    text-decoration: none;

    &:hover {
        background-color: rgba(255,255,255, 0.1);
    }
`;

export { Frame, Item, SubFrame, SubItem }