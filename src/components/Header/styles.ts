import styled from "styled-components";
import { rgba } from "polished";

export const HeaderContainer = styled.header<{ src: any }>`
    height: 50px;
    width: 100%;
    background: url(${(props) => props.src});

    grid-area: header;
    padding: 0 25px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-position-y: center;
    background-repeat: no-repeat;

    position: relative;

    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: ${({ theme }) => rgba(theme.background, 0.2)};
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => rgba(theme.background, 0.7)};
    width: 356px;
    height: 32px;

    box-shadow: 0 3px 2.2px -5px rgb(0 0 0),
        0 7.1px 5.3px -5px rgba(0, 0, 0, 0.2);
    margin-left: 100px;
    padding: 0 10px;
    svg {
        color: ${({ theme }) => theme.colors.primary};

        height: 25px;
        width: 25px;
        transform: rotateZ(90deg);
    }
    p {
        width: 100%;
    }

    input {
        outline: none;
        background: none;
        border: none;
        padding: 5px;
        width: 100%;
        height: 100%;
        color: ${({ theme }) => theme.colors.text};

        ::placeholder {
            color: ${({ theme }) => theme.colors.text};
        }
    }
`;

export const ItemsContainer = styled.div`
    display: flex;
    align-items: center;
    z-index: 9;
`;
export const Inbox = styled.button`
    display: flex;
    align-items: center;

    svg {
        height: 32px;
        width: 32px;
        color: #fff;
        padding: 1px;
    }

    span {
        color: #fff;
        font-size: 1rem;
        margin-left: 20px;
    }
`;

export const UserConfiguration = styled.div`
    display: flex;
    align-items: center;
    z-index: 9;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    margin-right: 20px;

    svg {
        color: #fff;
        height: 24px;
        width: 24px;
    }
`;

export const UserCover = styled.button`
    img {
        height: 40px;
        width: 40px;
        border-radius: 100%;
    }
`;
