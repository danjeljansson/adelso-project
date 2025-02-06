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
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "about",
      title: "About",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternative text",
          type: "string",
        },
      ],
    }),
  ],
});
