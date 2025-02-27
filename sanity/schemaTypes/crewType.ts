import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const crewType = defineType({
  name: "crew",
  title: "Crew Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Rubrik",
    }),
    defineField({
      name: "subheading",
      title: "Sub Heading",
      type: "string",
      description: "Underrubrik",
    }),
    defineField({
      name: "slug",
      type: "slug",
      description: "URL-slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "author",
      type: "reference",
      description: "Välj ditt namn i listan",
      to: { type: "author" },
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      description: "Publiceringsdatum",
    }),
    defineField({
      name: "body",
      type: "blockContent",
      description: "Innehåll",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
