import styled from "styled-components";

export const MessagesPanelContainer = styled.div`
    background: ${({ theme }) => theme.background};
    height: 40px;
    width: 100%;

    grid-area: messages_panel;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
