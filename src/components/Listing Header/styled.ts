import styled from "styled-components";

export const Container = styled.div`
    display: flex; 
    gap: 30px;
    color: white;
    h3{
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 30px;
    }
    .active{
        color: var(--primaryDarkZaori);
        text-decoration: underline 3px;
        text-underline-offset: 5px;
    }
`;