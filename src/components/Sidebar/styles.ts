import styled from "styled-components";

export const SidebarContainer = styled.aside`
    height: 100vh;
    width: 214px;
    max-width: 320px;
    background: ${({ theme }) => theme.background};

    grid-area: sidebar;
    position: fixed;
    top: 98px;

    nav {
        display: flex;
        align-items: center;
        flex-direction: column;

        max-height: 300px;
        overflow: scroll;
        width: 100%;
        overflow-x: hidden;
        padding: 10px 0;

        > ul {
            width: 100%;
        }
    }
`;
