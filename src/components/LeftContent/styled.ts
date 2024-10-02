import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding-top: 40px;
    max-width: 565px;
    width: 100%;

    @media (max-width: 768px) {
        padding-top: 20px;
        gap: 30px;
    }
`;

export const Title = styled.h1`
    font-family: var(--font-poppins);
    font-style: normal;
    font-weight: 500;
    font-size: 56px;
    line-height: 1.5;
    color: var(--darkZaori);

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Description = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

export const SubDescription = styled.h2`
    font-weight: 500;
    font-size: 24px;
    line-height: 1.5;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;