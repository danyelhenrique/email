import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 50px;
    right: 0;

    width: 320px;
    height: calc(100% - 32px);
    box-shadow: rgba(0, 0, 0, 0.133) 0px 1.6px 3.6px 0px,
        rgba(0, 0, 0, 0.11) 0px 0.3px 0.9px 0px;

    background: ${({ theme }) => theme.background};
    z-index: 99;

    padding: 20px;
    display: flex;
    flex-direction: column;
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};

    span {
        color: ${({ theme }) => theme.colors.text};
    }

    h3 {
        color: ${({ theme }) => theme.colors.text};

        font-weight: bold;
        margin: 16px 0;
        font-size: 1rem;
    }

    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;

    button {
        height: 25px;
        width: 25px;
        svg {
            height: 25px;
            width: 25px;
            color: ${({ theme }) => theme.icon};
        }
    }
`;
export const ThemeButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Language = styled.div``;

export const SelectBtn = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    input {
        margin: 0 16px;
    }
`;
