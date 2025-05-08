import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const sponsorType = defineType({
  name: "sponsor",
  title: "Sponsor Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Namn",
      type: "string",
      description: "Namn på inlägg (syns ej på sidan)",
    }),
    defineField({
      name: "sponsors",
      title: "Sponsors & Supporters",
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
              description: "Sponsorens namn",
            },
            {
              name: "url",
              title: "URL",
              type: "url",
              description: "Webbadress till sponsorns hemsida",
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
