import axios from "axios";

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  media_type: string;
  formats: Formats;
  download_count: number;
  cover_url: string;
}

export interface Author {
  birth_year: number;
  death_year: number;
  name: string;
}

export interface Formats {
  "application/x-mobipocket-ebook": string;
  "application/epub+zip": string;
  "image/jpeg": string;
  "application/pdf": string;
  "text/plain; charset=utf-8": string;
  "text/html": string;
  "application/rdf+xml": string;
}

export async function fetchBooks() {
  try {
    const response = await axios.get(
      "https://gutendex.com/books/?languages=pt&page=4"
    );
    console.log("Dados da API:", response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
    return [];
  }
}
