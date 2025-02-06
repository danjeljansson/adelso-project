import { defineType } from "sanity";
import { StarFilledIcon } from "@sanity/icons";

export const castType = defineType({
  name: "cast",
  title: "Cast",
  icon: StarFilledIcon,
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "role",
      type: "string",
    },
    {
      name: "about",
      type: "text",
    },
    {
      name: "imageUrl",
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
  ],
  preview: {
    select: {
      title: "name",
      media: "imageUrl",
    },
  },
});
