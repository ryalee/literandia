import Image from "next/image";
import React from "react";

export default function EmptyBookshelf() {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={"/sad-cloud.webp"}
        width={80}
        height={80}
        alt="Nenhum livro encontrado"
      />
      <h2 className="title text-2xl">Sua estante está vazia</h2>
      <p className="text-[#a0a0a0]">Adicione o primeiro livro </p>
    </section>
  );
}
