'use client';


import PostSectionCards from "../PostsSectionCards";
import TituloPostsSection from "../TituloPostsSection";
import { Container } from "./styled";

export default function PostsSection() {
    return (
        <Container>
            <TituloPostsSection/>
            <PostSectionCards/>
        </Container>
    );
}