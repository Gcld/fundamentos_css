import Image from "next/image";
import { Container, TextContainer } from "./styled";
import { LuCalendar } from "react-icons/lu";

interface SectionCardProps {
    imgSrc : string;
    cardName: string;
    cardJob: string;
    day: string;
    month: string;
    year: string;
}

export default function PostsCards({imgSrc, cardName, cardJob, day, month, year} : SectionCardProps) {
    return (
        <Container>
            <div className="header">
                <Image src={imgSrc} alt="Imagem do Post Card" width={68} height={68}/>
                <div className="infoUser">
                    <h2>{cardName}</h2>
                    <h3>{cardJob}</h3>
                </div>
            </div>
            <TextContainer>
                <div className="Date">
                    <LuCalendar width={24} height={24}/>
                    <h2>{day}/{month}/{year}</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </TextContainer>
        </Container>
    )
}