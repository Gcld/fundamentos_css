import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: var(--darkZaori);
    justify-content: space-evenly;
    align-items: left;
    height: 70px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 100%;
    img {
        display: flex;
        color: white;
        align-items: left;
        justify-content: left;
        position: absolute;
        left: 30px;
        top: 10px;
    }
    .spacer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
