import styled from "styled-components";

export const Container = styled.div``;
export const Button = styled.button``;

export const LinkItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 16px;

    p {
        margin-right: 5px;
    }
`;

export const SelectBtn = styled.button`
    display: flex;
    align-items: center;

    svg {
        height: 20px;
        width: 20px;
        color: #545454;
        margin-right: 5px;
    }
`;

export const Email = styled.div`
    display: flex;
    align-items: center;

    svg,
    span {
        color: #545454;
        font-size: 0.8rem;
    }

    svg {
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }
`;
