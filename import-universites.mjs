/*
  import-universites.mjs
  Importe les 12 universités dans Sanity.
  À exécuter AVANT de rattacher les doctorants.

  Windows PowerShell :
  $env:SANITY_TOKEN="ton_token"; node import-universites.mjs
*/

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o193qmr8',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})

const universites = [
  { name: 'Montpellier', city: 'Montpellier', country: 'France' },
  { name: 'Dundee',      city: 'Dundee',      country: 'Écosse' },
  { name: 'Ottawa',      city: 'Ottawa',      country: 'Canada' },
  { name: 'Marrakech',   city: 'Marrakech',   country: 'Maroc' },
  { name: 'Lyon',        city: 'Lyon',        country: 'France' },
  { name: 'Bordeaux',    city: 'Bordeaux',    country: 'France' },
  { name: 'Bristol',     city: 'Bristol',     country: 'Angleterre' },
  { name: 'Zurich',      city: 'Zurich',      country: 'Suisse' },
  { name: 'Barcelona',   city: 'Barcelona',   country: 'Espagne' },
  { name: 'Nairobi',     city: 'Nairobi',     country: 'Kenya' },
  { name: 'Tokyo',       city: 'Tokyo',       country: 'Japon' },
  { name: 'Vancouver',   city: 'Vancouver',   country: 'Canada' },
]

async function run() {
  console.log(`Importation de ${universites.length} universités...`)

  for (const u of universites) {
    const doc = await client.create({ _type: 'universite', ...u })
    console.log(`  ✓ ${u.name} (id: ${doc._id})`)
  }

  console.log('\nImport terminé.')
  console.log('Étape suivante : rattacher les doctorants existants')
  console.log('depuis le Studio sur localhost:3333')
}

run().catch(err => {
  console.error('Erreur :', err.message)
  process.exit(1)
})
