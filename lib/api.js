const API_URL = 'http://192.168.0.11:3001';

export async function getBooks() {
  const res = await fetch(`${API_URL}/books`);

  if(!res.ok) {
    throw new Error("Erro ao buscar livros");
  }

  return res.json();
}

export async function createBook(book) {
  const res = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer SEU_TOKEN"
    },
    body: JSON.stringify(book)
  });

  return res.json();
}