import { BookIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const bookType = defineType({
  name: "book",
  title: "Book",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Book title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "author",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "editors",
      type: "string",
      title: "Editors",
    }),
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "english" },
          { title: "French", value: "french" },
          { title: "Spanish", value: "spanish" },
          { title: "Portuguese", value: "portuguese" },
          { title: "Other", value: "other" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "purchaseLink",
      type: "url",
      title: "Purchase link",
    }),
    defineField({
      name: "pitch",
      type: "text",
      rows: 4,
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "cover",
      type: "object",
      title: "Cover images",
      fields: [
        defineField({
          name: "front",
          type: "image",
          title: "Front cover",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
        defineField({
          name: "back",
          type: "image",
          title: "Back cover",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              type: "string",
              title: "Alternative text",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "bookDescription",
      type: "array",
      title: "Book description",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author",
      media: "cover.front",
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `by ${author}` : undefined,
        media,
      };
    },
  },
});
