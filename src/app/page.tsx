'use client';

import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import { Container } from "./styled";

export default function Home() {
  return (
    <Container>
      <Header/>
      <HomeComponent/>
    </Container>
  );
}

