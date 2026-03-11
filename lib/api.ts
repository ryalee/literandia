const API_URL = "/api/books";

export async function getBooks() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Erro ao buscar livros");
  }

  return res.json();
}

type Book = {
  title: string
  author: string
  cover: string
  description?: string
}

export async function createBook(book: any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(book)
  });

  return res.json();
}