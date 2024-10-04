'use client';

import { useState } from "react";
import { Container } from "./styled";

export default function ListingHeader() {

    const [activeLink, setActiveLink] = useState(0);



    return (
        <Container>
            <a className={activeLink === 0 ? "active" : ""} onClick={() => setActiveLink(0)} href="#header">Home</a>
            <a className={activeLink === 1 ? "active" : ""} onClick={() => setActiveLink(1)} href="#galeria">Galeria</a>
            <a className={activeLink === 2 ? "active" : ""} onClick={() => setActiveLink(2)} href="#posts">Posts</a>
        </Container>
    );
}