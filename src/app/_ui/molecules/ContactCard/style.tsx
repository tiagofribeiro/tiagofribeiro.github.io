'use client'

import styled from "styled-components";

const ContactDescription = styled.div`
    display: flex;
    flex-direction: column;
`;

const ContactSocial = styled.div`
    display: flex;
    column-gap: 12px;
`;

const LinkSocial = styled.a`
    display: flex;
    column-gap: 12px;
    padding: 12px;
    border-radius: 8px;
    align-items: center;
    background-color: var(--grey-100);
    transition: 500ms;

    &:hover {
        transform:translateY(-8px);
        background-color: var(--grey-500);
    }
`;

export { ContactDescription, ContactSocial, LinkSocial }