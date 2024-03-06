'use client'

import styled from "styled-components";

const ProjectDescription = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    row-gap: 20px;
    padding: 40px;
`;

const ProjectPreview = styled.div`
    display: flex;
    flex: 3;
    height: 300px;
    align-items: center;
    justify-content: center;
`;

const PreviewImage = styled.img`
    height: 100%;
    border-radius: 20px;
`;

export { ProjectDescription, ProjectPreview, PreviewImage }