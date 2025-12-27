import Image from "next/image";
import Link from "next/link";
import { TbArrowRight, TbCalendar } from "react-icons/tb";
import "server-only";

import { urlFor } from "@/sanity/lib/image";
import {
  fetchPostSummaries,
  formatPublishedDate,
  type SanityPostSummary,
} from "@/sanity/lib/posts";

const LatestBlogPosts = async () => {
  const blogPosts = await fetchPostSummaries(3);

  if (!blogPosts.length) {
    return null;
  }

  return (
    <section id="blog" className="pb-10 md:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-[130px]">
        <div className="text-center mb-12">
          <h1 className="mb-2">Latest from the Blog</h1>
          <p className="mx-auto">
            Join me as I share my thoughts on writing, creativity, and the
            literary world. Explore articles, tips, and behind-the-scenes
            stories.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post: SanityPostSummary) => {
            const formattedDate = post.publishedAt
              ? formatPublishedDate(post.publishedAt)
              : "Date to be announced";
            const readTime = post.estimatedReadTime
              ? `${post.estimatedReadTime} mins read`
              : "Read time TBD";
            const imageUrl = post.mainImage?.asset
              ? urlFor(post.mainImage).width(600).height(400).fit("crop").url()
              : null;
            const imageAlt = post.mainImage?.alt || `${post.title} cover image`;

            return (
              <div
                key={post._id}
                className="rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group"
              >
                <div className="relative w-full h-[200px] bg-yellow-200 overflow-hidden">
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={imageAlt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      priority={false}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-linear-to-br from-yellow-200 to-yellow-300" />
                  )}
                </div>
                <div className="py-4 px-1">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm mb-2">
                      <TbCalendar className="mr-1 size-4" />
                      <p className="text-[12px]">{formattedDate}</p>
                    </div>
                    <div>
                      <p className="text-[12px] ml-1">{readTime}</p>
                    </div>
                  </div>

                  <h3 className="md:pb-6">{post.title}</h3>
                  <p className="mb-2 overflow-hidden">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex underline items-center text-[14px] font-semibold transition-colors"
                  >
                    Read More
                    <TbArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
