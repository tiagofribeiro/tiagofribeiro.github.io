'use client'

import Link from "next/link";
import styled from "styled-components";

const Frame = styled.div`
    display: flex;
    column-gap: 32px;
`;

const Item = styled(Link)`
    display: flex;
    height: 20px;
    padding: 12px;
    column-gap: 8px;
    align-items: center;
    border-radius: 4px;
    box-sizing: content-box;

    &:hover {
        color: #00CE78;
        background-color: rgba(0,206,120, 0.1);
    }
`;

const DropFrame = styled.div`
    display: flex;
    row-gap: 8px;
`;

const DropItem = styled(Link) <{ dropOpen: boolean }>`
    display: flex;
    height: 20px;
    padding: 12px;
`;

export { Frame, Item, DropFrame, DropItem }