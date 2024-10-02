import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    gap: 30px;
    color: white;

    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
    }

    .active {
        color: var(--primaryDarkZaori);
        text-decoration: underline 3px;
        text-underline-offset: 5px;
    }

    @media (max-width: 768px) {
        gap: 20px;

        h3 {
            font-size: 18px;
            line-height: 27px;
        }
    }

    @media (max-width: 480px) {
        gap: 15px;

        h3 {
            font-size: 16px;
            line-height: 24px;
        }
    }
`;