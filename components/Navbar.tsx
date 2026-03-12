"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    id: 1,
    iconBlack: "/Home.webp",
    iconWhite: "/home-white.webp",
    title: "Home",
    route: "/",
    alt: "Ícone tela inicial",
  },
  {
    id: 2,
    iconBlack: "/books.webp",
    iconWhite: "/books-white.webp",
    title: "Estante",
    route: "/books",
    alt: "Ícone tela de livros salvos",
  },
  {
    id: 3,
    iconBlack: "/graph.webp",
    iconWhite: "/graph-white.webp",
    title: "Estatísticas",
    route: "/stats",
    alt: "Ícone tela de estatísticas",
  },
  {
    id: 4,
    iconBlack: "/users.webp",
    iconWhite: "/users-white.webp",
    title: "Clube do Livro",
    route: "/social",
    alt: "Ícone tela de comunidade",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed flex items-center mt-5 bg-[#fafafa] w-[95%] self-center rounded-2xl shadow-[0px_0px_10px_#00000025] h-20 px-10 justify-between">
      {/* botao menu lateral */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
        <Image
          src={"/menu.webp"}
          width={50}
          height={50}
          alt="botão do menu lateral"
        />
      </button>

      <div className="flex items-center">
        <Image src={"/logo.webp"} width={60} height={60} alt="Logo" />
        <p className="title text-2xl">Literandia</p>
      </div>

      {/* menu lateral */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#fafafa] shadow-lg transform transition-transform duration-300 z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full flex"}`}
      >
        <button
          className="text-3xl p-4 flex text-right"
          onClick={() => setMenuOpen(false)}
        >
          X
        </button>

        <nav className="flex flex-col gap-6 p-6">
          {navItems.map((item) => {
            const isActive = pathname === item.route;

            return (
              <Link
                key={item.id}
                href={item.route}
                className={`px-5 py-2 rounded-full flex items-center gap-2 transition
              ${isActive ? "bg-black text-white" : "text-black"}`}
              >
                <Image
                  src={isActive ? item.iconWhite : item.iconBlack}
                  width={30}
                  height={30}
                  alt={item.alt}
                />

                <p>{item.title}</p>
              </Link>
            );
          })}
        </nav>

        <Link href={"/profile"}>
          <Image
            src={"/profile.webp"}
            width={40}
            height={40}
            alt="icone perfil"
          />
        </Link>
      </div>

      <nav className="md:flex justify-between w-[60%] self-center hidden">
        {navItems.map((item) => {
          const isActive = pathname === item.route;

          return (
            <Link
              key={item.id}
              href={item.route}
              className={`px-5 py-2 rounded-full flex items-center gap-2 transition
              ${isActive ? "bg-black text-white" : "text-black"}`}
            >
              <Image
                src={isActive ? item.iconWhite : item.iconBlack}
                width={30}
                height={30}
                alt={item.alt}
              />

              <p>{item.title}</p>
            </Link>
          );
        })}
      </nav>

      <Link href={"/profile"} className="hidden md:block">
        <Image
          src={"/profile.webp"}
          width={40}
          height={40}
          alt="icone perfil"
        />
      </Link>
    </header>
  );
}
