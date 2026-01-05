import Image from "next/image";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fetchBooks } from "@/sanity/lib/books";
import { urlFor } from "@/sanity/lib/image";
import { ArrowUpRight } from "lucide-react";
import { TbMail } from "react-icons/tb";
import { FaAmazon } from "react-icons/fa";

const BooksPage = async () => {
  const books = await fetchBooks();

  return (
    <div className="">
      <Navbar />
      <main className="pt-16 lg:pt-24">
        <section className="relative overflow-hidden">
          <div className="relative  mx-auto px-4 sm:px-6 lg:px-[130px] py-16 md:py-24">
            <div className="lg:px-[130px] text-center">
              <hr className="w-[100px] mx-auto text-accentColor mb-4" />
              <h1 className="mb-2 md:mb-6">
                Books that challenge, inspire, and draw you deeper into truth.
              </h1>
              <p className="text-muted-foreground leading-relaxed lg:px-[80px]">
                Explore Paul Tarsleh&apos;s published works, each crafted to
                ignite curiosity, provide spiritual clarity, and equip believers
                to live boldly. Browse the library below to learn more about
                each title and find the right book for your journey.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto px-4 sm:px-6 lg:px-[130px] pb-20 md:pb-28">
          {!books.length ? (
            <div className="rounded-3xl border border-dashed border-accentColor backdrop-blur-sm p-12 text-center shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">Books coming soon</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                New releases are on the way. Please check back shortly as we
                update the catalogue with the latest books from Paul Tarsleh.
              </p>
            </div>
          ) : (
            <div className="space-y-20 lg:hidden">
              {books.map((book, index) => {
                const frontCoverUrl = book.coverFront?.asset
                  ? urlFor(book.coverFront)
                      .width(600)
                      .height(900)
                      .fit("crop")
                      .url()
                  : null;

                return (
                  <article
                    key={book.id}
                    className={`grid gap-8 md:grid-cols-[minmax(0,360px),1fr] items-start rounded-3xl shadow-lg backdrop-blur-sm p-3 sm:p-10 transition-all duration-300 hover:shadow-2xl ${
                      index % 2 === 1 ? "md:grid-flow-dense" : ""
                    }`}
                  >
                    <div className="relative w-[280px] mx-auto md:w-[300px] h-[420px] sm:h-[480px] rounded-[30px] bg-accentColor shadow-md overflow-hidden">
                      {frontCoverUrl ? (
                        <Image
                          src={frontCoverUrl}
                          alt={
                            book.coverFront?.alt || `${book.title} front cover`
                          }
                          fill
                          className="object-cover object-center"
                          priority={index === 0}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-sm">
                          Cover artwork coming soon
                        </div>
                      )}
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-4 text-center">
                        <hr className="w-[100px] mx-auto text-accentColor mb-4" />
                        <h2 className="text-3xl md:text-[44px]! leading-tight font-semibold ">
                          {book.title}
                        </h2>
                        <p>by</p>
                        <p className="text-sm uppercase tracking-widest">
                          {book.author}
                        </p>
                        <p className="leading-relaxed">
                          {book.pitch ??
                            "Details about this title will be shared shortly."}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wide mb-1">
                            Editors
                          </p>
                          <p>{book.editors ?? "To be announced"}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wide mb-1">
                            Language
                          </p>
                          <p>{book.language ?? "TBD"}</p>
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-sm font-semibold uppercase text-muted-foreground tracking-wide mb-2">
                          Description
                        </p>
                        <p className="leading-relaxed text-[15px] text-muted-foreground">
                          {book.description ||
                            "An extended description for this title will be available soon."}
                        </p>
                      </div>

                      <div className="flex flex-wrap justify-center pb-4 items-center gap-4 pt-4">
                        {book.purchaseLink ? (
                          <div className="flex flex-col justify-center gap-3">
                            <a
                              href={book.purchaseLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="green-button inline-flex items-center justify-center px-8 py-3 text-sm font-semibold"
                            >
                              Purchase on Amazon{" "}
                              <FaAmazon className="inline-flex ml-2" />
                            </a>
                            <a
                              href={
                                book.timsmekLink ?? "https://store.timsmek.com/"
                              }
                              target="_blank"
                              rel="noopener noreferrer"
                              className="green-button inline-flex items-center justify-center px-8 py-3 text-sm font-semibold"
                            >
                              Purchase on Timsmek{" "}
                              <ArrowUpRight className="inline-flex ml-2 size-4" />
                            </a>
                          </div>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            Purchase link coming soon
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
          <div className="hidden lg:block space-y-20">
            {books.map((book, index) => {
              const frontCoverUrl = book.coverFront?.asset
                ? urlFor(book.coverFront)
                    .width(600)
                    .height(900)
                    .fit("crop")
                    .url()
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
                      <h2 className="text-[45px]! leading-[55px]!">
                        {book.title}
                      </h2>
                      <p className="text-[16px] font-semibold">{book.author}</p>
                      <p>{book.pitch ?? "Details coming soon."}</p>
                      <div className="flex justify-between mt-16">
                        {book.purchaseLink ? (
                          <div className="w-[90%] flex justify-between">
                            <a
                              href={book.purchaseLink}
                              className="green-button inline-flex items-center justify-center"
                            >
                              Buy on Amazon{" "}
                              <FaAmazon className="inline-flex ml-2" />
                            </a>
                            <a
                              href={
                                book.timsmekLink ?? "https://store.timsmek.com/"
                              }
                              className="green-button inline-flex items-center justify-center"
                            >
                              Buy on Timsmek{" "}
                              <ArrowUpRight className="inline-flex ml-2" />
                            </a>
                          </div>
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
        </section>

        <section id="contact" className="pb-12 md:pb-40 md:px-[260px]">
          <div className="mx-auto">
            <div className="mx-auto text-center">
              <h1 className="mb-2">Join My Newsletter</h1>
              <p className="mb-4">
                Subscribe to my newsletter to receive the latest news, updates,
                and exclusive content. Be the first to know about new releases,
                events, and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 mx-auto">
                <div className="relative grow mx-5">
                  <TbMail className="absolute left-4 size-5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-2 rounded-md border text-[14px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="green-button mx-5 font-semibold tracking-wider"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BooksPage;
