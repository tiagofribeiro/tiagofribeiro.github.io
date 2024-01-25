'use client'

import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    flex: 1;
    height: 88px;
    justify-content: center;
    border-bottom: solid 2px #00CE78;
    background-color: #1A1A1A;
`;

const Content = styled.div`
    display: inline-flex;
    flex: 1;
    max-width: 1100px;
    padding: 0 2rem;
    align-items: center;
    justify-content: space-between;
`;

export { Frame, Content }