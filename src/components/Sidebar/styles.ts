import styled from "styled-components";

export const SidebarContainer = styled.aside`
    height: 100vh;
    width: 214px;
    max-width: 320px;
    background: ${({ theme }) => theme.background};

    grid-area: sidebar;
    position: fixed;
    top: 90px;
`;
