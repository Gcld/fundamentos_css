import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 75px;

    h2{
        width: 565px;
        height: 180px;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
    }
`;

export const Title = styled.div`
        font-family: var(--font-poppins);
        font-style: normal;
        font-weight: 500;
        font-size: 56px;
        line-height: 84px;
        color: var(--darkZaori);
`;

export const Description = styled.div`
    width: 565px;
    height: 144px;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
`;