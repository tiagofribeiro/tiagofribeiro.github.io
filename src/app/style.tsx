'use client'

import styled from "styled-components";

const Container = styled.main`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const Section = styled.section`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 80px;
    z-index: 1;
`;

const CardDescription = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    row-gap: 20px;
    margin: 40px;
`;

const CardImage = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export { Container, Section, CardDescription, CardImage }