import CardsSection from "../CardsSection";
import TituloSection from "../TituloSection";
import { Container } from "./styled";

export default function Galeria() {
    return (
        <Container>
            <TituloSection/>
            <CardsSection/>
        </Container>
    );
}