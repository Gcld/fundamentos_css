import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "./registry";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const metadata: Metadata = {
  title: "Study Page",
  description: "Project made to study css",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
