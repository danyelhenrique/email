import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-areas: "messages_panel messages_panel" "sidebar content";
`;

export const Content = styled.section`
    grid-area: content;
    width: 100%;
`;
