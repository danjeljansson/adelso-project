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
      title: "Name",
      type: "string",
      description: "Sponsor Namn (syns ej på sidan)",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      description: "URL",
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
              title: "Name",
              type: "string",
              description: "Sponsorens namn",
            },
            {
              name: "url",
              title: "Website URL",
              type: "url",
              description: "Webbadress till sponsorns hemsida",
            },
          ],
        },
      ],
    }),
  ],
});
