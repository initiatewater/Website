import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId:  'o193qmr8',
  dataset:    'production',
  apiVersion: '2024-01-01',
  useCdn:     true,
})

export const queries = {

  // ── DONNÉES ──────────────────────────────────────────────────────────────

  allDoctorants: `*[_type == "doctorant"] | order(name asc) {
    _id, name,
    "university": university->name,
    cohort, languages, skills,
    "photo": photo.asset->url
  }`,

  allPublications: `*[_type == "publication"] | order(publishedAt desc) {
    _id, title, author, publishedAt, link,
    "image": image.asset->url
  }`,

  allFaqs: `*[_type == "faq"] | order(order asc) { _id, question, answer }`,

  // ── PARAMÈTRES GLOBAUX ────────────────────────────────────────────────────
  // [0] : prend le premier (et unique) document de ce type

  siteSettings: `*[_type == "siteSettings"][0]{
    pagesVisibility,
    siteTitle,
    siteDescription,
    formspreeId
  }`,

  // ── CONTENUS DE PAGES ─────────────────────────────────────────────────────

  pageHome: `*[_type == "pageHome"][0]{
    heroTitle, heroText, ctaLabel, ctaLink,
    statDoctorants, statUniversites, statCohortes
  }`,

  pagePodcasts: `*[_type == "pagePodcasts"][0]{
    title, description, ctaLabel, podcastUrl,
    "images": images[].asset->url
  }`,

  pagePublications: `*[_type == "pagePublications"][0]{ title, description }`,

  pageContact: `*[_type == "pageContact"][0]{
    title,
    "photo": photo.asset->url
  }`,

  pageApply: `*[_type == "pageApply"][0]{ title, subtitle, formspreeId }`,
}
