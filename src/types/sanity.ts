import type { Image, PortableTextBlock } from "sanity";

// ─── Shared ────────────────────────────────────────────────────────────
export interface SanityImageWithAlt extends Image {
  alt?:     string;
  caption?: string;
}

export interface SanitySlug {
  current: string;
}

// ─── Project ───────────────────────────────────────────────────────────
export type ProjectCategory =
  | "residential"
  | "hospitality"
  | "institutional"
  | "healthcare"
  | "religious"
  | "industrial"
  | "refurbishment";

export type ProjectStatus = "ongoing" | "complete" | "concept";

export interface Project {
  _id:            string;
  title:          string;
  slug:           SanitySlug;
  excerpt?:       string;
  description?:   PortableTextBlock[];
  category:       ProjectCategory;
  status:         ProjectStatus;
  client?:        string;
  location?:      string;
  contractValue?: number;
  year?:          string;
  services?:      string[];
  mainImage?:     SanityImageWithAlt;
  gallery?:       SanityImageWithAlt[];
  featured?:      boolean;
  orderRank?:     number;
}

export type ProjectCard = Pick<
  Project,
  | "_id"
  | "title"
  | "slug"
  | "excerpt"
  | "category"
  | "status"
  | "client"
  | "location"
  | "contractValue"
  | "mainImage"
>;

// ─── Team Member ───────────────────────────────────────────────────────
export interface TeamMember {
  _id:             string;
  name:            string;
  role:            string;
  qualifications?: string;
  experience?:     string;
  phone?:          string;
  bio?:            string;
  portrait?:       SanityImageWithAlt;
  order?:          number;
}

// ─── Service ───────────────────────────────────────────────────────────
export interface Service {
  _id:              string;
  title:            string;
  slug:             SanitySlug;
  index?:           string;
  description:      string;
  fullDescription?: PortableTextBlock[];
  scopeOfWork?:     string[];
  image?:           SanityImageWithAlt;
  order?:           number;
}

// ─── Site Settings ─────────────────────────────────────────────────────
export interface Stat {
  value: string;
  label: string;
}

export interface SocialLinks {
  instagram?: string;
  linkedin?:  string;
  twitter?:   string;
  facebook?:  string;
}

export interface SiteSettings {
  title:           string;
  tagline?:        string;
  logo?:           SanityImageWithAlt;
  email?:          string;
  phone?:          string;
  address?:        string;
  poBox?:          string;
  cities?:         string;
  socialLinks?:    SocialLinks;
  seoDescription?: string;
  ogImage?:        SanityImageWithAlt;
  stats?:          Stat[];
}
