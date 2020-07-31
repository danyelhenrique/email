import styled from "styled-components";

export const Content = styled.section`
    grid-area: content;
    width: 100%;
    overflow: hidden;

    > div {
        height: 100%;
        overflow: scroll;
        overflow-x: hidden;
    }
`;
