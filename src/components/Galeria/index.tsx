import CardsSection from "../CardsSection";
import TituloSection from "../TituloSection";
import { Container } from "./styled";

export default function Galeria() {
    return (
        <Container id="galeria">
            <TituloSection/>
            <CardsSection/>
        </Container>
    );
}