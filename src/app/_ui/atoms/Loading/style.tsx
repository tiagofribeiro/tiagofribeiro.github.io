'use client'

import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const CardLoad = styled.div`
    display: flex;
    height: 300px;
    margin: 40px 0;
    border-radius: 20px;
    align-items: center;
    background-color: var(--grey-300);
    animation: ${appearAnimation} 500ms linear infinite alternate;
`;

const DescriptionLoad = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    row-gap: 20px;
    margin: 40px;
`;

const TitleLoad = styled.div`
    width: 60%;
    height: 32px;
    border-radius: 4px;
    background-color: var(--grey-400);
`;

const TextLoad = styled.div`
    width: 80%;
    height: 14px;
    border-radius: 4px;
    background-color: var(--grey-400);
`;

const UrlLoad = styled.div`
    width: 50%;
    height: 14px;
    border-radius: 4px;
    background-color: var(--green-300);
`;

const ImageLoad = styled.div`
    display: flex;
    flex: 3;
    height: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--grey-400);
`;

export { CardLoad, DescriptionLoad, TitleLoad, UrlLoad, TextLoad, ImageLoad }