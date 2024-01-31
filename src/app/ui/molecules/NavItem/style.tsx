'use client'

import Link from "next/link";
import styled from "styled-components";
import { NavItemStyledTypes } from "./types";

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const Item = styled(Link)<NavItemStyledTypes>(({ $hover }) => `
    display: flex;
    height: 20px;
    padding: 12px;
    column-gap: 8px;
    align-items: center;
    border-radius: 4px;
    box-sizing: content-box;
    text-decoration: none;
    transition: 400ms;

    ${$hover && `
        color: var(--green-300);
        background-color: var(--green-highlight);
    `}
`);

const SubContainer = styled.div<NavItemStyledTypes>(({ $hover }) => `
    display: flex;
    visibility: hidden;
    flex-direction: column;
    row-gap: 8px;
    position: absolute;
    top: 88px;
    border: solid 2px var(--grey-400);
    background-color: var(--grey-100);
    transition: 200ms;
    transition-delay: 500ms;
    transform: scale(0);
    transform-origin: top;

    ${$hover && `
        visibility: visible;
        transition-delay: 0ms;
        transform: scale(1);
    `}
    
`);

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
        background-color: var(--grey-highlight);
    }
`;

export { Container, Item, SubContainer, SubItem }