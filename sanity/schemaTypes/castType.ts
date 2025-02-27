import { DocumentTextIcon } from "@sanity/icons";
import { defineType, defineField } from "sanity";

export const castType = defineType({
  name: "cast",
  title: "Cast Member Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "Namn",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Roll",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
      description: "Beskrivning",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Bild",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
          description:
            "Beskriv bilden för SEO och accessibility. (X i rollen som Y i Z)",
        },
      ],
    }),
  ],
});
