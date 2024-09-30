'use client';

import { Container } from "./styled";

export default function ListingHeader() {
    return (
        <Container>
            <h3 className="active">Home</h3>
            <h3>Galeria</h3>
            <h3>Posts</h3>
        </Container>
    );
}