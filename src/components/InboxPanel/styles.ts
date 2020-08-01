import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 56px;
    width: 100%;
    background: ${({ theme }) => theme.colors.tertiary};
    grid-area: inbox_panel;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};

    padding: 0 25px;

    > div {
        display: flex;
        align-items: center;
    }

    button {
        display: flex;
        align-items: center;
        margin-right: 20px;
        color: #fff;
        padding-bottom: 5px;

        svg {
            height: 20px;
            width: 20px;
        }
        span {
            font-weight: bold;
        }
    }
`;

export const BtnCheck = styled.button``;

export const BtnInbox = styled.button`
    border-bottom: 3px solid #ff828a;
    svg {
        margin-right: 5px;
    }
`;

export const BtnFilter = styled.button`
    svg {
        margin-left: 5px;
    }
`;
