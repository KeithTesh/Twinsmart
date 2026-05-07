import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: () => "🔧",

  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      description: "e.g. Architecture",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title" },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "index",
      title: "Index Number",
      type: "string",
      description: "Display label e.g. 01, 02, 03",
    }),

    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "One sentence shown on the services overview.",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "fullDescription",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Detailed description for the service detail section.",
    }),

    defineField({
      name: "scopeOfWork",
      title: "Scope of Work",
      type: "array",
      of: [{ type: "string" }],
      description: "List of deliverables shown as numbered items.",
    }),

    defineField({
      name: "image",
      title: "Service Image",
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
      initialValue: 99,
    }),
  ],

  preview: {
    select: {
      title:    "title",
      subtitle: "description",
      media:    "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 60) + "…" : "",
        media,
      };
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
