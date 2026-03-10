import ButtonAdd from "@/components/ButtonAdd";
import Image from "next/image";
import { BookOpen, Library, Goal } from 'lucide-react';
import { useState } from "react";
import AddBookModal from "./AddBookModal";

const features = [
  {
    id: 1,
    title: 'Organize seus livros',
    icon: <BookOpen color='#9299f0' size={50}/>,
  },
  {
    id: 2,
    title: 'Descubra novas leituras',
    icon: <Library color="#faca2b" size={50}/>,
  },
  {
    id: 3,
    title: 'Crie metas de leitura',
    icon: <Goal color='#f37373' size={50}/>,
  }
];

function getGreeting() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return "Bom dia"
  }
  if (hour >= 12 && hour < 18) {
    return "Boa tarde"
  } 

  return "Boa noite";
}

export default function FirstTimeHome() {
  const greeting = getGreeting();
  const [isModalOpen, setIsModalOpen] = useState(false)
  
    function addBook(newBook) {
      setBooks(prev => [...prev, newBook])
    }

  return (
    <section className="flex flex-col mt-40 gap-10">
      <h2 className="title text-2xl ml-15">{greeting}, userName!</h2>

      <div className="bg-[#fafafa] w-[70%] mx-auto p-8 flex flex-col items-center gap-10 rounded-2xl shadow-[0px_0px_10px_#00000025]">
        <h1 className="title text-4xl">Melhore sua experiência literária</h1>

        <ButtonAdd className='md:w-[22%]' onClick={() => setIsModalOpen(true)}>
          Adicionar Livro
        </ButtonAdd>

        {isModalOpen && (
          <AddBookModal
            onClose={() => setIsModalOpen(false)}
            onAddBook={addBook}
          />
        )}

        <div className="flex flex-col md:flex-row w-[90%] gap-10 md:justify-around">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center"
            >
              {feature.icon}
              <h2 className="text-xl text-center text-[#a0a0a0]">{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
