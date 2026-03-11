"use client";

import { useEffect, useState } from "react";
import { getBooks } from "../../lib/api";
import ButtonAdd from "@/components/ButtonAdd";
import Image from "next/image";
import EmptyBookshelf from "@/components/EmptyBookshelf";
import BooksGrid from "@/components/BooksGrid";
import InputSearch from "@/components/InputSearch";

const filters = [
  {
    id: "all",
    name: "Todos",
    textColor: "#426bbc",
    bgColor: "#c7e1ff",
  },
  {
    id: "reading",
    name: "Lendo",
    textColor: "#e8b100",
    bgColor: "#fffca3",
  },
  {
    id: "completed",
    name: "Lidos",
    textColor: "#269f2e",
    bgColor: "#b9ffb9",
  },
  {
    id: "wishlist",
    name: "Quero Ler",
    textColor: "#1f1f1f",
    bgColor: "#ccc",
  },
];

async function handleAddBook(bookData) {
  await fetch("http://localhost:3001/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bookData)
  })

  const updatedBooks = await getBooks()
  setBooks(updatedBooks)
}

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    async function load() {
      const data = await getBooks();
      setBooks(data);
    }

    load();
  }, []);

  return (
    <section className="flex flex-col mt-40 gap-10">
      <div className="flex items-center px-5 justify-between md:px-30">
        <div className="">
          <h1 className="title text-2xl">Minha estante</h1>
          <p className="text-[#a0a0a0]">Os livros na sua coleção</p>
        </div>

        <ButtonAdd className="">Adicionar Livro</ButtonAdd>
      </div>

      {/* area de busca */}
      <div className="bg-[#fafafa] flex flex-col md:flex-row p-6 w-[90%] gap-3 self-center rounded-2xl shadow-[0px_0px_4px_0px_#00000025]">
        {/* input */}
        <InputSearch/>

        {/* filtros */}
        <div className="flex justify-around gap-1 w-[40%]">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className="px-4 py-2 rounded-md transition cursor-pointer"
                style={
                  isActive
                    ? {
                        backgroundColor: filter.bgColor,
                        color: filter.textColor,
                      }
                    : { backgroundColor: "#f1f1f1", color: "#555" }
                }
              >
                {filter.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* display dos livros (filtro "todos" padrão) */}
      <div className="bg-[#fafafa] w-[90%] self-center flex py-5 justify-center rounded-2xl shadow-[0px_0px_4px_0px_#00000025]">
        {books.length === 0 ? <EmptyBookshelf /> : <BooksGrid />}
      </div>
    </section>
  );
}
