import { createClient } from '@sanity/client'

/*
  Client Sanity partagé par toutes les pages Astro.
  projectId  : ton identifiant de projet Sanity
  dataset    : "production" par défaut
  apiVersion : date de l'API utilisée — ne pas modifier
  useCdn     : true = données mises en cache (rapide, recommandé en prod)
               false = données fraîches à chaque requête (utile en dev)
*/
export const sanityClient = createClient({
  projectId: 'o193qmr8',
  dataset:   'production',
  apiVersion: '2024-01-01',
  useCdn:    true,
})

/*
  Requêtes GROQ réutilisables.
  GROQ est le langage de requête de Sanity, similaire à GraphQL mais en syntaxe JSON.
  
  Syntaxe de base :
  *[_type == "doctorant"]          → tous les documents de type "doctorant"
  { name, university, cohort }     → champs à retourner
  | order(name asc)                → tri
*/
export const queries = {

  // Tous les doctorants : utilisé par la page Network
  allDoctorants: `*[_type == "doctorant"] | order(name asc) {
    _id,
    name,
    "university": university->name,
    cohort,
    languages,
    skills,
    "photo": photo.asset->url
  }`,

  // Toutes les publications : utilisé par la page Publications
  allPublications: `*[_type == "publication"] | order(publishedAt desc) {
    _id,
    title,
    author,
    publishedAt,
    link,
    "image": image.asset->url
  }`,

  // Toutes les FAQ : triées par champ "order"
  allFaqs: `*[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer
  }`,
}
