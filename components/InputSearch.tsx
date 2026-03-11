'use client'

import Image from "next/image";
import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function InputBookSearch({ value, onChange, placeholder }: Props) {
  return (
    <div className="bg-[#fafafa] md:w-[60%] flex py-3 px-4 shadow-[0px_0px_4px_0px_#00000025] rounded-xl gap-2">
      <Image src={"/search.webp"} width={25} height={25} alt="buscar livros" />

      <input
        type="text"
        className="focus:outline-none text-[#a0a0a0]"
        placeholder={placeholder || "Buscar livro..."}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      
    </div>
  );
}