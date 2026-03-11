import Image from "next/image";
import { useEffect, useState } from "react";
import ButtonAdd from "./ButtonAdd";
import { Star } from "lucide-react";
import InputBookSearch from "./InputSearch";

export default function AddBookModal({ onClose, onAddBook }) {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (search.length < 3) {
      setResults([]);
      return;
    }

    const delay = setTimeout(() => {
      searchBooks();
    }, 400);

    return () => clearTimeout(delay);
  }, [search]);

  async function searchBooks() {
    try {
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API_KEY;

      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=8&key=${apiKey}`,
      );

      const data = await response.json();

      setResults(data.items || []);
    } catch (error) {
      console.error("Erro ao buscar livros", error);
    }
  }

  function addSelectedBook(book) {
    const info = book.volumeInfo;

    const newBook = {
      id: book.id,
      title: info.title,
      author: info.authors ? info.authors[0] : "Autor desconhecido",
      cover: info.imageLinks ? info.imageLinks.thumbnail : "",
      description: info.description || "",
      publishedYear: info.publishedYear,
      rating: info.averageRating,
      pages: info.pageCount,
      publisher: info.publisher,
    };

    onAddBook(newBook);
    setSelectedBook(null);

    onClose();
  }

  useEffect(() => {
    setExpanded(false);
  }, [selectedBook]);

  const description =
    selectedBook?.volumeInfo?.description || "Sem descrição disponível.";

  return (
    <section className="modal-overlay">
      <div className="modal">
        <h2>Adicione seu Livro</h2>

        <div className="search-area flex gap-2">
          <InputBookSearch value={search} onChange={setSearch} />

          <button
            className=" bg-black text-white rounded-lg px-2"
            onClick={searchBooks}
          >
            Buscar
          </button>
        </div>
      </div>

      <div className="results">
        {results.map((book) => {
          const info = book.volumeInfo;

          return (
            <div
              key={book.id}
              className="result-card"
              onClick={() => setSelectedBook(book)}
            >
              <Image
                src={info.imageLinks ? info.imageLinks.thumbnail : ""}
                width={40}
                height={60}
                alt={info.title}
                className="object-cover"
              />

              <div>
                <p>{info.title}</p>
                <small>
                  {info.authors
                    ? info.authors.join(", ")
                    : "Autor desconhecido"}
                </small>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="bg-red-50 p-2 text-red-600 rounded-lg border"
        onClick={onClose}
      >
        Cancelar
      </button>

      {selectedBook && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-105 max-h-[80vh] overflow-y-auto">
            <Image
              src={selectedBook.volumeInfo.imageLinks?.thumbnail}
              width={160}
              height={240}
              alt="capa do livro"
            />

            <div className="flex gap-2 items-center mt-4 justify-between px-5">
              <div>
                <h2 className="text-xl font-bold">
                  {selectedBook.volumeInfo.title}
                </h2>

                <p className="text-gray-600 text-xs">
                  {selectedBook.volumeInfo.authors?.join(", ")}
                </p>
              </div>

              <div>
                <p className="text-xs">
                  {selectedBook.volumeInfo.publishedDate?.slice(0, 4)}
                </p>

                <p className="flex gap-1 text-xl items-center">
                  {selectedBook.volumeInfo.averageRating}{" "}
                  <Star size={20} color="#ffc70e" />
                </p>
              </div>
            </div>

            <p className={`text-sm mt-3 ${expanded ? "" : "line-clamp-4"}`}>
              {description}
            </p>

            {description.length > 200 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-500 text-sm"
              >
                {expanded ? "ver menos" : "continuar lendo"}
              </button>
            )}

            <div className="flex gap-3 mt-5">
              <ButtonAdd onClick={() => addSelectedBook(selectedBook)}>
                Adicionar à estante
              </ButtonAdd>

              <button
                className="px-4 py-2 border rounded"
                onClick={() => setSelectedBook(null)}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
