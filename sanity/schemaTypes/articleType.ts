import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const articleType = defineType({
  name: "article",
  title: "Article Post",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      title: "Namn",
      type: "string",
      description: "Namn på inlägg (syns ej på sidan)",
    }),
    defineField({
      name: "articles",
      title: "Artiklar",
      type: "array",
      description: "Bild",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "name",
              title: "Namn",
              type: "string",
              description: "Artikelnamn",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "Webbadress till artikeln",
            },
            {
              name: "alt",
              title: "Alternativ text",
              type: "string",
              description: "Beskriv inlägget för tillgänglighet och SEO",
            },
          ],
        },
      ],
    }),
  ],
});
