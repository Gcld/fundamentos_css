import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 333px;
    height: 413px;
    border: 1px solid var(--grayZaori);
    border-radius: 10px;
    gap: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


    h1{
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
    }
    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 20px;

    h1{
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
    }
    h2{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;

    }
`;