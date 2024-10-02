'use client'

import Logo from '@/assets/Logo 1.svg'
import Image from "next/image";
import ListingHeader from "../Listing Header";
import { Container } from "./styled";

export default function Header() {
    return (
        <Container>
            <Image src={Logo.src} alt="Logo" width={97} height={49}/>
            <div className="spacer">
                <ListingHeader/>
            </div>
            <div></div> 
        </Container>
    );
}