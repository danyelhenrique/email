import styled, { css } from "styled-components";

export const Container = styled.div<{ isSelected: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary : theme.colors.tertiary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0 20px;

    border-left: 5px solid ${({ theme }) => theme.colors.primary};
    margin: 2px 0;

    position: relative;

    :hover {
        .select-btn-mail,
        .hover_buttons {
            opacity: 1;
            pointer-events: all;
        }
        .cover_and_name img {
            display: none;
        }

        .hover-mail-row {
            ${({ isSelected }) =>
                !isSelected &&
                css`
                    opacity: 1;
                    pointer-events: all;
                `}
        }
    }

    ${({ isSelected }) =>
        isSelected &&
        css`
            .select-btn-mail {
                opacity: 1;
                pointer-events: all;
            }

            .cover_and_name img {
                display: none;
            }
        `}
`;
export const CoverAndName = styled.div.attrs({
    className: "cover_and_name",
})`
    display: flex;
    align-items: center;
    img {
        height: 36px;
        width: 36px;
        border-radius: 100%;
        margin-right: 10px;
    }
    span {
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;
        z-index: 11;
    }
`;

export const HoverButtons = styled.div.attrs({
    className: "hover_buttons",
})`
    z-index: 11;
    opacity: 0;
    pointer-events: none;

    > div {
        button {
            height: 36px;
            width: 36px;

            svg {
                height: 20px;
                width: 20px;
                color: ${({ theme }) => theme.icon};
            }
        }
    }
`;

export const Button = styled.button``;

export const Details = styled.div`
    display: flex;
    align-items: center;
    z-index: 11;
`;
export const Description = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 20px;
`;
export const Subject = styled.span`
    color: ${({ theme }) => theme.colors.text};
`;
export const MailDate = styled.span`
    color: ${({ theme }) => theme.colors.text};
    z-index: 11;
`;

export const Hover = styled.div.attrs({
    className: "hover-mail-row",
})`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.background};

    opacity: 0;
    pointer-events: none;
`;

export const SelectBtn = styled.button.attrs({
    className: "select-btn-mail",
})`
    opacity: 0;
    pointer-events: none;
    z-index: 11;

    height: 36px;
    width: 36px;
    margin-right: 20px;

    svg {
        height: 20px;
        width: 20px;
        color: ${({ theme }) => theme.icon};
    }
`;
