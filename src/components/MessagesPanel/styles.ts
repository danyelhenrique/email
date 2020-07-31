import styled from "styled-components";
import { darken } from "polished";

export const MessagesPanelContainer = styled.div`
    background: ${({ theme }) => theme.background};
    height: 48px;
    width: 100%;

    grid-area: messages_panel;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    display: flex;
    align-items: center;
    padding: 0 20px;

    button:first-of-type {
        padding: 8px 10px;

        svg {
            color: ${({ theme }) => theme.colors.primary};

            height: 25px;
            width: 25px;
            margin: 0;
        }
    }

    button + button {
        margin-left: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;

        svg {
            height: 20px;
            width: 20px;
            margin-right: 10px;
        }
    }
`;

export const NewMessage = styled.button`
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    height: 32px;
    width: 125px;
`;

export const MarkAllAsRead = styled.button`
    color: ${({ theme }) => theme.colors.primary};

    :hover {
        background: ${({ theme }) => darken(1, theme.background)};
    }
`;

export const Undo = styled.button`
    color: ${({ theme }) => theme.colors.text};
`;
