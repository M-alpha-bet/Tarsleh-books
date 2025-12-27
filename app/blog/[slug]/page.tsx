import Image from "next/image";
import { PortableText } from "next-sanity";
import type { PortableTextComponents } from "next-sanity";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "sanity";

import { urlFor } from "@/sanity/lib/image";
import {
  fetchPostBySlug,
  fetchPostSlugs,
  formatPublishedDate,
} from "@/sanity/lib/posts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const revalidate = 60;

const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const imageValue = value as PortableTextBlock & {
        asset?: { _ref?: string };
        alt?: string;
      };

      if (!imageValue?.asset?._ref) {
        return null;
      }

      const imageUrl = urlFor(imageValue).width(1200).fit("max").url();
      const alt = imageValue.alt || "Blog post image";

      return (
        <div className="w-full my-6 overflow-hidden rounded-2xl">
          <Image
            src={imageUrl}
            alt={alt}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl font-semibold tracking-tight mt-10 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="leading-relaxed text-[15px] mb-5 text-muted-foreground">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-accentColor pl-6 italic text-xl text-muted-foreground my-6">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => (
      <em className="italic text-muted-foreground">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-primaryColor">{children}</strong>
    ),
    link: ({ value, children }) => {
      const href = (value as { href?: string } | undefined)?.href || "#";
      return (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className="underline decoration-2 underline-offset-4 text-accentColor hover:text-secondaryColor transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};

type BlogPageProps = {
  params: { slug: string } | Promise<{ slug: string }>;
};

export const generateStaticParams = async () => {
  const slugs = await fetchPostSlugs();
  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({ params }: BlogPageProps) => {
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {};
  }

  const description = post.excerpt || post.title;

  return {
    title: `${post.title} | Paul Tarsleh Blog`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.mainImage?.asset
        ? [
            {
              url: urlFor(post.mainImage)
                .width(1200)
                .height(630)
                .fit("crop")
                .url(),
              alt: post.mainImage?.alt || post.title,
            },
          ]
        : undefined,
    },
  };
};

const BlogPostPage = async ({ params }: BlogPageProps) => {
  const resolvedParams = await Promise.resolve(params);
  const { slug } = resolvedParams;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const heroImage = post.mainImage?.asset
    ? urlFor(post.mainImage).width(1400).height(700).fit("crop").url()
    : null;
  const publishedDate = post.publishedAt
    ? formatPublishedDate(post.publishedAt)
    : "Publish date coming soon";
  const readTime = post.estimatedReadTime
    ? `${post.estimatedReadTime} mins read`
    : "Read time TBD";

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-32 md:pt-40 max-w-5xl">
        <article>
          <header className="text-center mb-6">
            <hr className="w-[100px] mx-auto text-accentColor mb-4" />
            <h1 className=" mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{publishedDate}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </header>

          {heroImage ? (
            <div className="relative w-full h-[320px] sm:h-[480px] mb-12 overflow-hidden rounded-4xl shadow-lg">
              <Image
                src={heroImage}
                alt={post.mainImage?.alt || `${post.title} cover image`}
                fill
                sizes="(min-width: 1024px) 75vw, 100vw"
                className="object-cover object-center"
                priority
              />
            </div>
          ) : null}

          <div className="prose prose-lg max-w-none">
            <PortableText
              value={post.body}
              components={portableTextComponents}
            />
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
