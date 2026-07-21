/*
  link-universites.mjs
  Rattache automatiquement les 30 doctorants à leur université.

  Ce script :
  1. Récupère tous les documents "universite" et construit une map nom → _id
  2. Récupère tous les doctorants dont le champ university est encore un texte
  3. Pour chacun, remplace le texte par une référence au bon document université

  Windows PowerShell :
  $env:SANITY_TOKEN="ton_token"; node link-universites.mjs
*/

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o193qmr8',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

async function run() {

  // 1. Récupère toutes les universités et construit la map nom → _id
  const universites = await client.fetch(`*[_type == "universite"]{ _id, name }`)

  if (universites.length === 0) {
    console.error('Aucune université trouvée. Lance d\'abord import-universites.mjs')
    process.exit(1)
  }

  const univMap = {}
  for (const u of universites) {
    univMap[u.name] = u._id
  }

  console.log(`${universites.length} universités trouvées :`)
  Object.entries(univMap).forEach(([name, id]) => console.log(`  ${name} → ${id}`))
  console.log('')

  // 2. Récupère tous les doctorants
  const doctorants = await client.fetch(`*[_type == "doctorant"]{ _id, name, university }`)
  console.log(`${doctorants.length} doctorants à traiter...\n`)

  let ok = 0
  let skipped = 0
  let errors = 0

  for (const doc of doctorants) {

    // Si university est déjà une référence (objet avec _ref), on skip
    if (doc.university && typeof doc.university === 'object' && doc.university._ref) {
      console.log(`  ⏭  ${doc.name} : déjà rattaché`)
      skipped++
      continue
    }

    // Nom de l'université en texte (ancienne valeur importée)
    const univName = doc.university
    const univId   = univMap[univName]

    if (!univId) {
      console.log(`  ✗  ${doc.name} : université "${univName}" introuvable dans la liste`)
      errors++
      continue
    }

    // Patch : remplace le texte par une référence Sanity
    await client
      .patch(doc._id)
      .set({
        university: {
          _type: 'reference',
          _ref: univId,
        }
      })
      .commit()

    console.log(`  ✓  ${doc.name} → ${univName}`)
    ok++
  }

  console.log(`\nTerminé : ${ok} liés, ${skipped} déjà liés, ${errors} erreurs.`)

  if (errors > 0) {
    console.log('\nPour les erreurs : vérifier les noms dans le Studio et corriger manuellement.')
  }
}

run().catch(err => {
  console.error('Erreur :', err.message)
  process.exit(1)
})
