'use client'

import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    flex: 1;
    height: 88px;
    justify-content: center;
    background-color: #1A1A1A;
`;

const Content = styled.div`
    display: inline-flex;
    flex: 1;
    max-width: 1100px;
`;

export { Frame, Content }