import styled from "styled-components";

export const Container = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 566px;
    height: auto;
    min-height: 320px;
    border: 1px solid var(--grayZaori);
    border-radius: 10px;
    gap: 21px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 20px 24px;
    @media (max-width: 520px) {
        width: 320px;
        font-size: 18px;
        margin: 0 auto;
    }

    .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 24px;

        .infoUser {
            h2 {
                font-weight: 500;
                font-size: 20px;
                line-height: 30px;
                color: var(--darkZaori);
            }

            h3 {
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: var(--darkZaori);
            }
        }
    }

    h1 {
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        color: var(--darkZaori);
    }
    h2 {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--darkZaori);
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    color: var(--darkZaori);

    .Date {
        display: flex;
        flex-direction: row;
        gap: 10px;
        align-items: center;
        border-bottom: 1px solid var(--grayZaori);
        padding-bottom: 7px;
        h2 {
            font-weight: 500;
            font-size: 18px;
            line-height: 27px;
            color: var(--darkZaori);
        }
    }

    h1 {
        font-weight: 500;
        font-size: 22px;
        line-height: 33px;
        color: var(--darkZaori);
    }
    p {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: black;
    }
`;