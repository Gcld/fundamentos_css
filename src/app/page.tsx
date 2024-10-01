'use client';

import Header from "@/components/Header";
import HomeComponent from "@/components/HomeComponent";
import { Container } from "./styled";
import Galeria from "@/components/Galeria";
import PostsSection from "@/components/PostsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <Container>
      <Header/>
      <HomeComponent/>
      <Galeria/>
      <PostsSection/>
      <Footer/>
    </Container>
  );
}

