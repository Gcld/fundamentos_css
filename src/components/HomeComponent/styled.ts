import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    padding-top: 65px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        gap: 40px;
    }

    @media (max-width: 768px) {
        padding: 20px;
        gap: 30px;
    }
`;