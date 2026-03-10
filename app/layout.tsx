import type { Metadata } from "next";
import "./globals.css";
import localfont from 'next/font/local'
import Navbar from "@/components/Navbar";

const merriweather = localfont({
  src: './fonts/Merriweather.ttf',
  variable: '--font-merriweather',
  display: 'swap'
});

const nunito = localfont({
  src: './fonts/Nunito.ttf',
  variable: '--font-nunito',
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Literandia",
  description: "Sua estante virtual para organizar suas leituras e tornar esse hábito ainda mais prazeroso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body 
        suppressHydrationWarning 
        className={`${nunito.variable} ${merriweather.variable} bg-[#eef5ff] flex flex-col`}
      >
        <Navbar/>

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}