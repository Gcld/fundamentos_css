import { Container, Description, Title, SubDescription } from "./styled";

export default function LeftContent() {
    return (
        <Container>
            <Title>Bem vindo!</Title>
            <Description>Nesse exemplo, você irá criar uma single-page com o intuito de fixar os fundamentos do CSS e facilitar a criação de páginas ou desafios futuros.</Description>
            <SubDescription>Você irá apenas utilizar o básico, ou seja, HTML e o CSS puro (pode utilizar o styled component). Apenas queremos de forma pratica fixar os conceitos e como o css funciona.</SubDescription>
        </Container>
    );
}