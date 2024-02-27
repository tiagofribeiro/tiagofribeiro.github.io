'use client'

import styled from "styled-components";

const ProjectDescription = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    row-gap: 20px;
    margin: 40px;
`;

const ProjectPreview = styled.div`
    display: flex;
    flex: 3;
    height: 300px;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    background-color: var(--grey-400);
`;

export { ProjectDescription, ProjectPreview }