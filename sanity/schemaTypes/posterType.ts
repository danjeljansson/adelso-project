import { ImageIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const posterType = defineType({
  name: "poster",
  title: "Event Poster",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Poster",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          description: "Describe the post for SEO",
        },
      ],
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
      description: "Länk till biljettköp",
    }),
  ],
  preview: {
    select: {
      image: "image",
      alt: "image.alt",
    },
    prepare(selection) {
      const { image, alt } = selection;
      return {
        title: alt || "Event Poster",
        media: image,
      };
    },
  },
});
