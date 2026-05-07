import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",

  fields: [
    // ─── Identity ──────────────────────────────────────
    defineField({
      name: "title",
      title: "Site Title",
      type: "string",
      initialValue: "Twinsmart Consultants Kenya",
      validation: (R) => R.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      initialValue: "Innovation in Research, Design + Construction",
    }),

    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: false },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          initialValue: "Twinsmart Consultants Kenya",
        }),
      ],
    }),

    // ─── Contact ───────────────────────────────────────
    defineField({
      name: "email",
      title: "Primary Email",
      type: "string",
      initialValue: "hello@twinsmart.co.ke",
      validation: (R) => R.email(),
    }),

    defineField({
      name: "phone",
      title: "Primary Phone",
      type: "string",
      initialValue: "+254 729 836 782",
    }),

    defineField({
      name: "address",
      title: "Office Address",
      type: "text",
      rows: 3,
      initialValue: "Jossy Building, Suite 101\nMbuni Drive, Garden Estate\nNairobi, Kenya",
    }),

    defineField({
      name: "poBox",
      title: "P.O. Box",
      type: "string",
      initialValue: "P.O Box 7894-00200",
    }),

    defineField({
      name: "cities",
      title: "Cities / Offices",
      type: "string",
      initialValue: "Nairobi · Meru",
    }),

    // ─── Social Links ──────────────────────────────────
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "linkedin",  title: "LinkedIn URL",  type: "url" }),
        defineField({ name: "twitter",   title: "Twitter / X URL", type: "url" }),
        defineField({ name: "facebook",  title: "Facebook URL",  type: "url" }),
      ],
    }),

    // ─── SEO ───────────────────────────────────────────
    defineField({
      name: "seoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
      initialValue:
        "Innovation in research, design and construction. Architects, landscape architects, interior designers and builders based in Nairobi and Meru, Kenya. Est. 2010.",
      validation: (R) => R.max(160),
    }),

    defineField({
      name: "ogImage",
      title: "Default Social Share Image",
      type: "image",
      description: "Used when sharing the site on social media. Ideal size: 1200×630px.",
    }),

    // ─── Stats ─────────────────────────────────────────
    defineField({
      name: "stats",
      title: "Key Stats",
      type: "array",
      description: "Headline numbers shown on the homepage.",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", description: "e.g. 200+" }),
            defineField({ name: "label", title: "Label", type: "string", description: "e.g. Projects delivered" }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        },
      ],
      initialValue: [
        { value: "200+",    label: "Projects delivered"    },
        { value: "KSh 2B+", label: "In construction value" },
        { value: "14 yrs",  label: "In practice"           },
        { value: "5",       label: "Core team members"     },
      ],
    }),
  ],

  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({ title, subtitle: "Global site settings" }),
  },
});
