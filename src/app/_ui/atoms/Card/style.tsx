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

const Container = styled.div`
    display: flex;
    height: 300px;
    border-radius: 20px;
    align-items: center;
    background-color: var(--grey-300);
    animation: ${appearAnimation} 400ms linear forwards;
`;

export { Container }