import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.tertiary};
    border-bottom: 1px solid #000;
    padding: 0 20px;

    border-left: 5px solid #ff828a;
    margin: 2px 0;
`;
export const CoverAndName = styled.div`
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
    }
`;

export const Details = styled.div`
    display: flex;
    align-items: center;
`;
export const Description = styled.div`
    color: ${({ theme }) => theme.colors.primary};
    margin: 0 20px;
`;
export const Subject = styled.div`
    color: ${({ theme }) => theme.colors.text};
`;
export const MailDate = styled.div`
    color: ${({ theme }) => theme.colors.text};
`;
