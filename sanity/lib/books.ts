import "server-only";

import { client } from "@/sanity/lib/client";
import { portableTextToPlain } from "@/sanity/lib/posts";
import type { PortableTextBlock } from "sanity";

export type SanityBookImage = {
  asset: {
    _ref: string;
  };
  alt?: string | null;
} | null;

export type SanityBook = {
  id: string;
  title: string;
  slug: string;
  author: string;
  editors?: string | null;
  language?: string | null;
  purchaseLink?: string | null;
  pitch?: string | null;
  description: string;
  coverFront?: SanityBookImage;
};

type SanityBookQueryResult = {
  _id: string;
  title: string;
  slug?: string;
  author: string;
  editors?: string | null;
  language?: string | null;
  purchaseLink?: string | null;
  pitch?: string | null;
  cover?: {
    front?: {
      asset: {
        _ref: string;
      };
      alt?: string | null;
    } | null;
  } | null;
  bookDescription?: PortableTextBlock[];
};

const BOOKS_QUERY = `*[_type == "book"] | order(_createdAt desc) {
  _id,
  title,
  "slug": slug.current,
  author,
  editors,
  language,
  purchaseLink,
  pitch,
  cover {
    front {
      asset,
      alt
    }
  },
  bookDescription
}`;

export const fetchBooks = async (): Promise<SanityBook[]> => {
  const books = await client.fetch<SanityBookQueryResult[]>(BOOKS_QUERY);

  return books
    .filter((book) => Boolean(book.slug))
    .map((book) => ({
      id: book._id,
      title: book.title,
      slug: book.slug as string,
      author: book.author,
      editors: book.editors ?? null,
      language: book.language
        ? book.language.charAt(0).toUpperCase() + book.language.slice(1)
        : null,
      purchaseLink: book.purchaseLink ?? null,
      pitch: book.pitch ?? null,
      description: portableTextToPlain(book.bookDescription ?? []),
      coverFront: book.cover?.front ?? null,
    }));
};
