import { groq } from "next-sanity";
import { client } from "./client";
import type {
  SiteSettings,
  Project,
  ProjectCard,
  TeamMember,
  Service,
} from "@/types/sanity";

// ─── Site Settings ────────────────────────────────────────────────────
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title, tagline, email, phone, whatsappNumber, address,
    poBox, cities, logo, socialLinks,
    seoDescription, ogImage, stats
  }
`;

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(siteSettingsQuery);
}

// ─── Projects ─────────────────────────────────────────────────────────
export const allProjectsQuery = groq`
  *[_type == "project"] | order(orderRank asc, _createdAt desc) {
    _id, title, slug, category, status,
    contractValue, client, location, year,
    mainImage, excerpt
  }
`;

export async function getAllProjects(): Promise<ProjectCard[]> {
  return client.fetch(allProjectsQuery);
}

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(orderRank asc) [0..3] {
    _id, title, slug, category, status,
    contractValue, client, location, mainImage
  }
`;

export async function getFeaturedProjects(): Promise<ProjectCard[]> {
  return client.fetch(featuredProjectsQuery);
}

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id, title, slug, category, status,
    contractValue, client, location, year,
    description, mainImage, gallery, services, excerpt
  }
`;

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(projectBySlugQuery, { slug });
}

export const allProjectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`;

export async function getAllProjectSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(allProjectSlugsQuery);
}

// ─── Team ─────────────────────────────────────────────────────────────
export const allTeamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id, name, role, qualifications,
    experience, phone, portrait, bio
  }
`;

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  return client.fetch(allTeamMembersQuery);
}

// ─── Services ─────────────────────────────────────────────────────────
export const allServicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id, title, slug, index, description,
    scopeOfWork, image
  }
`;

export async function getAllServices(): Promise<Service[]> {
  return client.fetch(allServicesQuery);
}
