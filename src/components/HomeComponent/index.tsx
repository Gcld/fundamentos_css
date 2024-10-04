'use client';

import LeftContent from "../LeftContent";
import RightContent from "../RightContent";
import { Container } from "./styled";

export default function HomeComponent() {
    return (
        <Container id="header">
            <LeftContent/>
            <RightContent/>
        </Container>
    );
}