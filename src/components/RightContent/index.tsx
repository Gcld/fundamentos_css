'use client';

import Image from "next/image";
import RightImage from '@/assets/Rectangle2.png'

export default function RightContent() {
    return (
        <Image src={RightImage.src} alt="Logo" width={682} height={713}/>
    );
}