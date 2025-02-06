import { defineField, defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const showType = defineType({
  name: "show",
  title: "Show",
  icon: CalendarIcon,
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "publishedAt",
      type: "datetime",
    },
    {
      name: "published",
      type: "boolean",
    },
    defineField({
      name: "body",
      type: "blockContent",
    }),
    {
      name: "cast",
      type: "array",
      of: [{ type: "reference", to: { type: "cast" } }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
    },
  },
});
