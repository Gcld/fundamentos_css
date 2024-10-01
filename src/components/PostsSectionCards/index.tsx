'use client';

import PostsCards from "../PostsCards";
import { Container } from "./styled";
import PostCardImage1 from '@/assets/Ellipse 1.png'
import PostCardImage2 from '@/assets/Ellipse 1 (1).png'
import PostCardImage3 from '@/assets/Ellipse 1 (2).png'
import PostCardImage4 from '@/assets/Ellipse 1 (3).png'
import PostCardImage5 from '@/assets/Ellipse 1 (4).png'
import PostCardImage6 from '@/assets/Ellipse 1 (5).png'
import PostCardImage7 from '@/assets/Ellipse 1 (6).png'
import PostCardImage8 from '@/assets/Ellipse 1 (7).png'

export default function PostSectionCards() {
    return (
        <Container>
            <PostsCards cardName="Wade Warren" cardJob="Maketing Coordinator" day="12" month="06" year="2020" imgSrc={PostCardImage1.src}/>
            <PostsCards cardName="Dianne Russell" cardJob="President of Sales" day="16" month="08" year="2013" imgSrc={PostCardImage2.src}/>
            <PostsCards cardName="Albert Flores" cardJob="Maketing Coordinator" day="07" month="05" year="2016" imgSrc={PostCardImage3.src}/>
            <PostsCards cardName="Jerome Bell" cardJob="Medical Assistant" day="15" month="08" year="2017" imgSrc={PostCardImage4.src}/>
            <PostsCards cardName="Cody Fisher" cardJob="Nursing Assistant" day="18" month="09" year="2016" imgSrc={PostCardImage5.src}/>
            <PostsCards cardName="Courtney Henry" cardJob="Dog Trainer" day="07" month="05" year="2016" imgSrc={PostCardImage6.src}/>
            <PostsCards cardName="Devon Lane" cardJob="Nursing Assistant" day="28" month="10" year="2012" imgSrc={PostCardImage7.src}/>
            <PostsCards cardName="Darrell Steward" cardJob="Web Designer" day="12" month="06" year="2020" imgSrc={PostCardImage8.src}/>
        </Container>
    );
}