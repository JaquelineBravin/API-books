import axios from "axios";

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: string;
  formats: Formats;
  download_count: number;
}

export interface Author {
  name: string;
  birth_year: number;
  death_year: number;
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

const url_base = "https://gutendex.com/books?languages=pt";

async function getList() {
  const data = await axios.get(`${url_base}`);

  return { data };
}

export const FetchApi = {
  getList,
};
