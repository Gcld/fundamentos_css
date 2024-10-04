import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
`;

export const Galeria = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-weight: 500;
    font-size: 34px;
    line-height: 51px;
    text-align: center;
`;

export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    @media (max-width: 520px) {
        width: 300px;
        font-size: 18px;
        margin: 0 auto;
    }
`;
