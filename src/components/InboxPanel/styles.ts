import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;

    height: 56px;
    width: 100%;
    background: ${({ theme }) => theme.colors.tertiary};

    button {
    }
`;
