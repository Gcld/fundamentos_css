'use client';

import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import { Container } from "./styled";
import Galeria from "@/components/Galeria";

export default function Home() {
  return (
    <Container>
      <Header/>
      <HomeComponent/>
      <Galeria/>
    </Container>
  );
}

