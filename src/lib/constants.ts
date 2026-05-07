export const SITE_NAME = "Twinsmart Consultants Kenya";
export const SITE_TAGLINE = "Innovation in Research, Design + Construction";

// ─── Navigation ───────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home",     href: "/",         index: "01" },
  { label: "About",    href: "/about",    index: "02" },
  { label: "Services", href: "/services", index: "03" },
  { label: "Projects", href: "/projects", index: "04" },
  { label: "Contact",  href: "/contact",  index: "05" },
] as const;

// ─── Stats ────────────────────────────────────────────────────────────
export const STATS = [
  { value: "200+",    label: "Projects delivered"     },
  { value: "KSh 2B+", label: "In construction value" },
  { value: "14 yrs",  label: "In practice"            },
  { value: "5",       label: "Core team members"      },
] as const;

// ─── Contact ──────────────────────────────────────────────────────────
export const CONTACT = {
  email:   "hello@twinsmart.co.ke",
  phone:   "+254 729 836 782",
  address: "Jossy Building, Suite 101, Mbuni Drive, Garden Estate",
  city:    "Nairobi · Meru, Kenya",
  poBox:   "P.O Box 7894-00200",
} as const;

// ─── Team ─────────────────────────────────────────────────────────────
export const TEAM_MEMBERS = [
  {
    name:           "Arch. James K. Mati",
    role:           "Managing Director",
    qualifications: "B. Arch (Hons) JKUAT · MAAK · Reg. Arch",
    experience:     "8+",
    phone:          "+254 729 836 782",
  },
  {
    name:           "Arch. Martin Mugambi M.",
    role:           "Director / Managing Partner",
    qualifications: "B. Arch (Hons) JKUAT · MAAK · Reg. Arch",
    experience:     "8+",
    phone:          "+254 726 167 796",
  },
  {
    name:           "QS. Paniel Kithinji",
    role:           "Projects Manager / QS",
    qualifications: "B. Building Economics (Hons) UoN · MAAK · Reg. QS",
    experience:     "10+",
    phone:          "+254 712 443 794",
  },
  {
    name:           "Annclaire Gakii",
    role:           "Finance Manager",
    qualifications: "BCom (Finance & Banking), MKU",
    experience:     "5+",
    phone:          "+254 726 598 898",
  },
  {
    name:           "L. Arch. Lewis Rugendo",
    role:           "Landscape Architect",
    qualifications: "B. L. Arch (Hons) JKUAT · MAAK",
    experience:     "5+",
    phone:          "+254 728 377 662",
  },
] as const;

// ─── Services ─────────────────────────────────────────────────────────
export const SERVICES = [
  {
    index:       "01",
    title:       "Architecture",
    description: "From single-family residences to executive hotels — full-service architectural design across Kenya.",
    scopeOfWork: [
      "Concept & schematic design",
      "Design development",
      "Construction documentation",
      "Approvals & permits",
      "Construction administration",
      "Post-occupancy review",
    ],
  },
  {
    index:       "02",
    title:       "Construction · Design-Build",
    description: "Integrated delivery — single point of accountability from concept to completion.",
    scopeOfWork: [
      "Pre-contract services",
      "Bill of quantities",
      "Tendering & procurement",
      "Project management",
      "Construction supervision",
      "Handover & defects liability",
    ],
  },
  {
    index:       "03",
    title:       "Landscape Architecture",
    description: "Site planning, exterior environments, courtyard and shared-space design rooted in local climate.",
    scopeOfWork: [
      "Site analysis & masterplanning",
      "Hardscape design",
      "Planting design",
      "Courtyards & green roofs",
      "Public realm",
      "Streetscapes",
    ],
  },
  {
    index:       "04",
    title:       "Interior Design",
    description: "Interior fit-outs for hospitality, offices, banking halls and homes — materialled, contextually grounded.",
    scopeOfWork: [
      "Space planning",
      "Material & finishes",
      "Custom joinery",
      "Lighting design",
      "FF&E specification",
      "Fit-out delivery",
    ],
  },
] as const;

// ─── Core Values ──────────────────────────────────────────────────────
export const CORE_VALUES = [
  { number: "01", title: "Quality client service",        description: "Every brief begins with listening. We tailor every output." },
  { number: "02", title: "Professionalism",               description: "Registered architects, QSs and partners — accountable to every body that matters." },
  { number: "03", title: "Creativity & innovation",       description: "Research-led design. We test before we draw." },
  { number: "04", title: "Empowerment",                   description: "We grow the people we work with — staff, partners, and the community around our sites." },
  { number: "05", title: "Transparency & accountability", description: "Open numbers, clear contracts, no surprises at handover." },
  { number: "06", title: "Teamwork & responsibility",     description: "We carry the weight of decisions together, end-to-end." },
  { number: "07", title: "Compliance",                    description: "Every regulation, every approval, every standard — non-negotiable." },
  { number: "08", title: "CSR",                           description: "Building doesn't end at the boundary line. We invest in the places we work." },
] as const;

// ─── Project Categories ───────────────────────────────────────────────
export const PROJECT_CATEGORIES = [
  "All",
  "Residential",
  "Hospitality",
  "Institutional",
  "Healthcare",
  "Religious",
  "Industrial",
  "Refurbishment",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
export type ProjectStatus = "ongoing" | "complete" | "concept";
