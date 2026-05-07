import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: () => "👤",

  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      description: "e.g. Arch. James K. Mati",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      description: "e.g. Managing Director",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "qualifications",
      title: "Qualifications",
      type: "string",
      description: "e.g. B. Arch (Hons) JKUAT · MAAK · Reg. Arch",
    }),

    defineField({
      name: "experience",
      title: "Years of Experience",
      type: "string",
      description: "e.g. 8+ or 10+",
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 4,
      description: "Optional short biography shown on the About page.",
    }),

    defineField({
      name: "portrait",
      title: "Portrait Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt Text", type: "string" }),
      ],
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 99,
    }),
  ],

  preview: {
    select: {
      title:    "name",
      subtitle: "role",
      media:    "portrait",
    },
  },

  orderings: [
    {
      title: "Display Order",
      name:  "orderAsc",
      by:    [{ field: "order", direction: "asc" }],
    },
  ],
});
