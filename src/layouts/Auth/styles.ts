import styled from "styled-components";
import { darken, lighten } from "polished";

export const Main = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    /* background: #ffff; */

    form {
        max-width: 440px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        min-width: 320px;
        min-height: 338px;
        background: #ffff;
        padding: 40px;

        display: flex;
        flex-direction: column;
        width: calc(100% - 40px);

        h4 {
            color: #1b1b1b;
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 16px;
        }

        p,
        a {
            font-size: 0.8125rem;
            color: #1b1b1b;
            text-align: left;
        }

        a {
            color: ${({ theme }) => theme.colors.primary};
            cursor: pointer;
            transition: color 1s ease;

            :hover {
                color: ${({ theme }) => darken(0.5, theme.colors.primary)};
            }
        }

        > button {
            background: ${({ theme }) => theme.colors.primary};
            min-height: 32px;
            min-width: 108px;
            padding: 4px 12px 4px 12px;
            width: 108px;
            color: #fff;
            font-weight: bold;
            align-self: flex-end;
            transition: background 2s ease;

            :hover {
                background: ${({ theme }) =>
                    lighten(0.1, theme.colors.primary)};
            }
        }

        p {
            color: #333;
        }
        input {
            height: 36px;
            padding: 6px 10px;
            border-width: 1px;
            border-color: rgba(0, 0, 0, 0.6);
            outline: none;
            border: none;
            border-bottom: 1px solid #000;
            margin-bottom: 16px;

            ::placeholder {
                color: #333;
            }

            button {
                min-width: 108px;
                line-height: normal;
                min-height: 32px;
                background-color: #0067b8;
            }
        }
    }
`;
