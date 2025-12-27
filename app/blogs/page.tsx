import Image from "next/image";
import Link from "next/link";

import { urlFor } from "@/sanity/lib/image";
import {
  fetchPostSummaries,
  formatPublishedDate,
  type SanityPostSummary,
} from "@/sanity/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const BlogIndexPage = async () => {
  const posts = await fetchPostSummaries();

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 md:pt-40">
        <header className="text-center mb-6">
          <hr className="w-[100px] mx-auto text-accentColor mb-4" />
          <h1 className="mb-2">Explore the Blog</h1>
          <p className="mx-auto text-muted-foreground md:mb-6">
            Dive into thoughtful essays, theological explorations, and practical
            guidance written to strengthen your faith journey.
          </p>
        </header>

        {!posts.length ? (
          <p className="text-center text-muted-foreground text-lg">
            New stories are on the way. Check back soon!
          </p>
        ) : (
          <div className="grid gap-12 md:px-[130px]">
            {posts.map((post: SanityPostSummary) => {
              const imageUrl = post.mainImage?.asset
                ? urlFor(post.mainImage)
                    .width(700)
                    .height(450)
                    .fit("crop")
                    .url()
                : null;
              const formattedDate = post.publishedAt
                ? formatPublishedDate(post.publishedAt)
                : "Date to be announced";
              const readTime = post.estimatedReadTime
                ? `${post.estimatedReadTime} mins read`
                : "Read time TBD";

              return (
                <article
                  key={post._id}
                  className="flex flex-col rounded-3xl border border-accentColor/50 overflow-hidden shadow-sm bg-white/70 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-56 md:h-80 bg-accentColor/20">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={post.mainImage?.alt || `${post.title} cover image`}
                        fill
                        className="object-cover object-center"
                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                        priority={false}
                      />
                    ) : null}
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-muted-foreground mb-4">
                      <span>{formattedDate}</span>
                      <span>{readTime}</span>
                    </div>

                    <h2 className="text-2xl font-semibold mb-3">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-semibold underline-offset-4 hover:underline"
                      >
                        Read full story
                        <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogIndexPage;
