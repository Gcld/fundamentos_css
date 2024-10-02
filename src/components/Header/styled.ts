import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: var(--darkZaori);
    justify-content: space-between;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    img {
        height: 49px;
        width: auto;
    }

    .spacer {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
    }
`;