import Image from "next/image";
import { Container, TextContainer } from "./styled";

interface CardProps {
    imgSrc : string;
    cardName: string;
}

export default function Card({imgSrc, cardName} : CardProps) {
    return (
        <Container>
            <Image src={imgSrc} alt="Imagem do Card" width={285} height={212}/>
            <TextContainer>
                <h1>{cardName}</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
            </TextContainer>
        </Container>
    )
}