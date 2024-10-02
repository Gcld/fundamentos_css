import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    max-width: 1200px;
    margin: 70px auto 0;
    padding: 30px;
    gap: 60px;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;