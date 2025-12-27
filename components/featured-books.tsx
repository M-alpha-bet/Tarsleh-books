import Image from "next/image";

import { fetchBooks } from "@/sanity/lib/books";
import { urlFor } from "@/sanity/lib/image";
import type { SanityBook } from "@/sanity/lib/books";
import { FaAmazon } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

const FeaturedBooks = async () => {
  const books = await fetchBooks();

  if (!books.length) {
    return (
      <section id="books" className="py-12 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4">Featured Books</h1>
            <p className="text-muted-foreground">
              Check back soon—new featured titles are on the way.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="books" className="py-12 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="mb-2">Featured Books</h1>
          <p className="mx-auto">
            Explore a selection of my most popular and critically acclaimed
            works. Each story is a journey waiting to be discovered.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:hidden gap-10">
          {books.map((book: SanityBook) => {
            const frontCoverUrl = book.coverFront?.asset
              ? urlFor(book.coverFront).width(600).height(900).fit("crop").url()
              : null;

            return (
              <div
                key={book.title}
                className="rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group"
              >
                {/* <h1 className="uppercase tracking-wide font-semibold font-bodyFont! leading-[35px]! text-[28px]! text-center">
                  {book.title}
                </h1> */}
                <div className="relative w-full pt-2">
                  <div className="relative h-[400px] shadow-lg mx-16 bg-accentColor rounded-[25px] overflow-hidden">
                    {frontCoverUrl ? (
                      <Image
                        src={frontCoverUrl}
                        alt={book.coverFront?.alt || `${book.title} cover`}
                        fill
                        className="object-cover object-center transition-opacity duration-300 group-hover:opacity-90"
                        sizes="(min-width: 1024px) 300px, 70vw"
                        priority={false}
                      />
                    ) : null}
                  </div>
                </div>
                <div className="p-2">
                  <p className="mb-4 w-[360px] mx-auto text-center overflow-hidden">
                    {book.description || "Description coming soon."}
                  </p>
                  <div className="pt-4">
                    <hr className="text-accentColor" />
                    <a
                      href="#"
                      className="text-[13px] w-full mx-auto flex items-center justify-center font-semibold uppercase px-4 py-2"
                    >
                      View Details
                    </a>
                    <hr className="text-accentColor" />

                    <hr className="text-accentColor" />
                    <a
                      href={book.purchaseLink ?? "#"}
                      target={book.purchaseLink ? "_blank" : undefined}
                      rel={
                        book.purchaseLink ? "noopener noreferrer" : undefined
                      }
                      className="text-[13px] w-full mx-auto flex items-center justify-center font-semibold uppercase px-4 py-2"
                    >
                      Order on amazon{" "}
                      <FaAmazon className="inline-flex size-4 ml-2" />
                    </a>
                    <hr className="text-accentColor" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="hidden lg:block space-y-20">
          {books.map((book: SanityBook) => {
            const frontCoverUrl = book.coverFront?.asset
              ? urlFor(book.coverFront).width(600).height(900).fit("crop").url()
              : null;

            return (
              <div key={book.title}>
                <div className="flex px-[130px] justify-between items-center w-full">
                  <div className="w-[50%] flex justify-center">
                    <div className="relative h-[400px] w-[300px] shadow-lg bg-accentColor rounded-[25px] overflow-hidden">
                      {frontCoverUrl ? (
                        <Image
                          src={frontCoverUrl}
                          alt={book.coverFront?.alt || `${book.title} cover`}
                          fill
                          className="object-cover object-center"
                          sizes="300px"
                          priority={false}
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-6 w-[50%]">
                    <h1 className="text-[55px]! leading-[55px]!">
                      {book.title}
                    </h1>
                    <p className="text-[16px] font-semibold">{book.author}</p>
                    <p>{book.pitch ?? "Details coming soon."}</p>
                    <div className="flex justify-between mt-16">
                      {book.purchaseLink ? (
                        <a
                          href={book.purchaseLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="green-button inline-flex items-center justify-center"
                        >
                          Buy now <ArrowUpRight className="inline-flex ml-2" />
                        </a>
                      ) : (
                        <span className="text-muted-foreground text-sm">
                          Purchase link coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-20 items-start gap-28 -mt-24 pt-40 pb-20 rounded-2xl bg-white px-[130px]">
                  <div className="w-[70%]">
                    <p className="text-[16px] font-semibold">Description</p>
                    <p>{book.description}</p>
                  </div>
                  <div className="w-[30%] space-y-12">
                    <div>
                      <p className="text-[16px] font-semibold">Editors</p>
                      <p>{book.editors ?? "To be announced"}</p>
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold">Languages</p>
                      <p>{book.language ?? "TBD"}</p>
                    </div>
                  </div>
                </div>
                <hr className="text-accentColor w-[200px] mx-auto" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
