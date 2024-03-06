'use client'

import styled from "styled-components";

const ExperiencesDescription = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    padding: 40px;
`;

const ExperiencesPreview = styled.div`
    display: flex;
    flex: 3;
    height: 300px;
    align-items: center;
    justify-content: center;
`;

const ExperiencesImage = styled.img`
    height: 100%;
`;

export { ExperiencesDescription, ExperiencesPreview, ExperiencesImage }