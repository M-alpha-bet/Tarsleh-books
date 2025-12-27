import "server-only";

import type { PortableTextBlock } from "sanity";

import { client } from "@/sanity/lib/client";

export type SanityImageAsset = {
  asset: {
    _ref: string;
  };
  alt?: string | null;
} | null;

export type SanityPostSummary = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  estimatedReadTime: number | null;
  mainImage?: SanityImageAsset;
  excerpt: string;
};

export type SanityPostDetail = SanityPostSummary & {
  body: PortableTextBlock[];
};

type SanityPostQueryResult = {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  estimatedReadTime: number | null;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  } | null;
  body?: PortableTextBlock[];
};

type SanitySlugResult = {
  slug: string;
};

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  estimatedReadTime,
  mainImage {
    asset,
    alt
  }
`;

const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  ${POST_FIELDS},
  body
}`;

const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  ${POST_FIELDS},
  body
}`;

const POST_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{
  "slug": slug.current
}`;

export const portableTextToPlain = (blocks: PortableTextBlock[] = []): string =>
  blocks
    .map((block) => {
      if (block._type !== "block" || !Array.isArray(block.children)) {
        return "";
      }

      return block.children
        .map((child) => (child?._type === "span" ? child.text : ""))
        .join("");
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

export const createExcerpt = (text: string, wordCount = 30): string => {
  const words = text.split(/\s+/);
  if (words.length <= wordCount) {
    return text;
  }

  return `${words.slice(0, wordCount).join(" ")}...`;
};

export const formatPublishedDate = (isoDate: string) => {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const fetchPostSummaries = async (
  limit?: number,
  excerptWordCount = 30
): Promise<SanityPostSummary[]> => {
  const posts = await client.fetch<SanityPostQueryResult[]>(POSTS_QUERY);

  const mapped = posts.map(({ body, ...post }) => ({
    ...post,
    excerpt: createExcerpt(portableTextToPlain(body), excerptWordCount),
  }));

  return typeof limit === "number" ? mapped.slice(0, limit) : mapped;
};

export const fetchPostBySlug = async (
  slug: string
): Promise<SanityPostDetail | null> => {
  const post = await client.fetch<SanityPostQueryResult | null>(
    POST_BY_SLUG_QUERY,
    { slug }
  );

  if (!post) {
    return null;
  }

  const body = post.body ?? [];

  return {
    ...post,
    body,
    excerpt: createExcerpt(portableTextToPlain(body), 50),
  };
};

export const fetchPostSlugs = async (): Promise<string[]> => {
  const slugs = await client.fetch<SanitySlugResult[]>(POST_SLUGS_QUERY);
  return slugs.map((entry) => entry.slug);
};
