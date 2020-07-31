import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-areas:
        "header header"
        "messages_panel messages_panel"
        "sidebar  inbox_panel"
        "sidebar content";
    grid-auto-columns: auto 1fr;
    height: 100%;
`;
