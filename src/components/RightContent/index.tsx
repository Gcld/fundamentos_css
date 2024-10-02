'use client';

import Image from "next/image";
import RightImage from '@/assets/Rectangle2.png'
import { Container } from "./styled";

export default function RightContent() {
    return (
        <Container>
            <Image src={RightImage.src} alt="Logo" width={682} height={713}/>
        </Container>
    );
}