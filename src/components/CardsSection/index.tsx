'use client';

import Card from "../Card";
import { Container } from "./styled";
import CardImage1 from '@/assets/Rectangle4.png'
import CardImage2 from '@/assets/Rectangle 4 (1).png'
import CardImage3 from '@/assets/Rectangle 4 (2).png'
import CardImage4 from '@/assets/Rectangle 4 (3).png'
import CardImage5 from '@/assets/Rectangle 4 (4).png'
import CardImage6 from '@/assets/Rectangle 4 (5).png'
import CardImage7 from '@/assets/Rectangle 4 (6).png'
import CardImage8 from '@/assets/Rectangle 4 (7).png'

export default function CardsSection() {
    return (
        <Container>
            <Card imgSrc={CardImage1.src} cardName="Mannheim"/>
            <Card imgSrc={CardImage2.src} cardName="San Isidro"/>
            <Card imgSrc={CardImage3.src} cardName="Sterlitamak"/>
            <Card imgSrc={CardImage4.src} cardName="Bahía Blanca"/>
            <Card imgSrc={CardImage5.src} cardName="Gelsenkirchen"/>
            <Card imgSrc={CardImage6.src} cardName="Hampton (VA)"/>
            <Card imgSrc={CardImage7.src} cardName="Krasnodar"/>
            <Card imgSrc={CardImage8.src} cardName="Morón"/>
        </Container>
    );
}