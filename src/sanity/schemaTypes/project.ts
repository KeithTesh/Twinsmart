import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: () => "🏗️",

  fields: [
    // ─── Core Info ────────────────────────────────────
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Short Description",
      type: "text",
      rows: 3,
      description: "One or two sentences shown on project cards.",
      validation: (R) => R.max(200),
    }),

    defineField({
      name: "description",
      title: "Full Description",
      type: "array",
      of: [{ type: "block" }],
      description: "Rich text shown on the project detail page.",
    }),

    // ─── Classification ────────────────────────────────
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Residential",   value: "residential"   },
          { title: "Hospitality",   value: "hospitality"   },
          { title: "Institutional", value: "institutional" },
          { title: "Healthcare",    value: "healthcare"    },
          { title: "Religious",     value: "religious"     },
          { title: "Industrial",    value: "industrial"    },
          { title: "Refurbishment", value: "refurbishment" },
        ],
        layout: "dropdown",
      },
      validation: (R) => R.required(),
    }),

    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Ongoing",  value: "ongoing"  },
          { title: "Complete", value: "complete" },
          { title: "Concept",  value: "concept"  },
        ],
        layout: "radio",
      },
      initialValue: "ongoing",
      validation: (R) => R.required(),
    }),

    // ─── Project Details ───────────────────────────────
    defineField({
      name: "client",
      title: "Client",
      type: "string",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Ruiru, Kiambu",
    }),

    defineField({
      name: "contractValue",
      title: "Contract Value (KSh)",
      type: "number",
      description: "Raw number — e.g. 900000000 for KSh 900M",
    }),

    defineField({
      name: "year",
      title: "Year(s)",
      type: "string",
      description: "e.g. 2024 or 2012–2014",
    }),

    defineField({
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Architecture",          value: "architecture"       },
          { title: "Construction",          value: "construction"       },
          { title: "Landscape Architecture", value: "landscape"         },
          { title: "Interior Design",       value: "interior"           },
          { title: "Project Management",    value: "project-management" },
          { title: "Quantity Surveying",    value: "quantity-surveying" },
        ],
      },
    }),

    // ─── Media ────────────────────────────────────────
    defineField({
      name: "mainImage",
      title: "Main / Hero Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt",     title: "Alt Text", type: "string" }),
        defineField({ name: "caption", title: "Caption",  type: "string" }),
      ],
    }),

    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt",     title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption",  type: "string" }),
          ],
        },
      ],
    }),

    // ─── Display ──────────────────────────────────────
    defineField({
      name: "featured",
      title: "Feature on Homepage",
      type: "boolean",
      initialValue: false,
      description: "Show this project in the homepage Featured Works section.",
    }),

    defineField({
      name: "orderRank",
      title: "Order / Rank",
      type: "number",
      description: "Lower numbers appear first.",
      initialValue: 99,
    }),
  ],

  preview: {
    select: {
      title:    "title",
      subtitle: "client",
      status:   "status",
      media:    "mainImage",
    },
    prepare({ title, subtitle, status, media }) {
      const statusIcon: Record<string, string> = {
        ongoing:  "🟢",
        complete: "✅",
        concept:  "💡",
      };
      return {
        title:    `${statusIcon[status] ?? ""} ${title}`,
        subtitle: subtitle ?? "",
        media,
      };
    },
  },

  orderings: [
    {
      title: "Manual Order",
      name:  "orderRankAsc",
      by:    [{ field: "orderRank", direction: "asc" }],
    },
    {
      title: "Newest First",
      name:  "createdAtDesc",
      by:    [{ field: "_createdAt", direction: "desc" }],
    },
  ],
});
