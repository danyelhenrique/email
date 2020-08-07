import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.li<{ isActive: boolean }>`
    ul,
    li {
        display: ${({ isActive }) => (isActive ? "flex" : "none")};
        opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    }

    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    button {
        display: flex;
        color: ${({ theme }) => theme.colors.text};

        font-weight: 500;
        font-size: 1rem;
        padding: 11px 20px;
        align-items: center;
        width: 100%;
        outline: none;

        svg {
            height: 30px;
            width: 30px;
            color: ${({ theme }) => theme.icon};

            margin-right: 5px;
        }
    }
    ul {
        align-items: center;
        flex-direction: column;
        width: 100%;

        li {
            text-align: left;
            width: 100%;
            cursor: pointer;
            flex-direction: column;

            button {
                svg {
                    height: 22px;
                    width: 25px;
                    color: ${({ theme }) => theme.icon};
                }
                span {
                    color: ${({ theme }) => theme.colors.text};

                    font-weight: 500;
                    font-size: 1rem;
                }
                :hover {
                    background: ${({ theme }) => darken(0.3, theme.background)};
                }
            }
        }
    }
`;
