/*
  import-doctorants.mjs
  Importe les 30 doctorants mock dans Sanity en une commande.

  Prérequis :
    npm install --save-dev @sanity/client

  Commande :
    node import-doctorants.mjs

  À exécuter UNE SEULE FOIS depuis la racine du projet Astro.
  Si tu relances le script, il crée des doublons — utilise le Studio
  pour supprimer manuellement si besoin.
*/

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'o193qmr8',
  dataset:   'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN, // voir instructions ci-dessous
  useCdn: false,
})

const doctorants = [
  { name: 'Alice Bluenbaum',   university: 'Montpellier', cohort: 'Cohorte 1', languages: ['Français','Anglais'],          skills: ['Hydrologie','Modélisation'] },
  { name: 'Baptiste Ferrand',  university: 'Montpellier', cohort: 'Cohorte 1', languages: ['Français'],                    skills: ['Qualité eau','SIG'] },
  { name: 'Claire Tissot',     university: 'Montpellier', cohort: 'Cohorte 2', languages: ['Français','Espagnol'],         skills: ['Écologie','Modélisation'] },
  { name: 'Denis Aubert',      university: 'Montpellier', cohort: 'Cohorte 2', languages: ['Français','Anglais'],          skills: ['Modélisation climatique'] },
  { name: 'Emma Leroy',        university: 'Montpellier', cohort: 'Cohorte 3', languages: ['Français'],                    skills: ['Hydrologie','Géochimie'] },
  { name: 'Fiona MacAllister', university: 'Dundee',      cohort: 'Cohorte 1', languages: ['Anglais'],                    skills: ['Télédétection','SIG'] },
  { name: 'George Campbell',   university: 'Dundee',      cohort: 'Cohorte 1', languages: ['Anglais'],                    skills: ['Géologie','Traceurs isotopiques'] },
  { name: 'Hannah Reid',       university: 'Dundee',      cohort: 'Cohorte 2', languages: ['Anglais','Français'],         skills: ['Qualité eau','Écologie'] },
  { name: 'Ian Stewart',       university: 'Dundee',      cohort: 'Cohorte 3', languages: ['Anglais'],                    skills: ['Modélisation climatique','Hydrologie'] },
  { name: 'Julie Tremblay',    university: 'Ottawa',      cohort: 'Cohorte 1', languages: ['Français','Anglais'],         skills: ['Hydrologie','SIG'] },
  { name: 'Kevin Bouchard',    university: 'Ottawa',      cohort: 'Cohorte 2', languages: ['Français','Anglais'],         skills: ['Écologie','Télédétection'] },
  { name: 'Laura Chen',        university: 'Ottawa',      cohort: 'Cohorte 3', languages: ['Anglais','Mandarin'],         skills: ['Modélisation','Qualité eau'] },
  { name: 'Mehdi Alaoui',      university: 'Marrakech',   cohort: 'Cohorte 1', languages: ['Arabe','Français'],           skills: ['Hydrologie','Géochimie'] },
  { name: 'Nadia Benali',      university: 'Marrakech',   cohort: 'Cohorte 2', languages: ['Arabe','Français','Anglais'], skills: ['Qualité eau','SIG'] },
  { name: 'Omar Idrissi',      university: 'Marrakech',   cohort: 'Cohorte 3', languages: ['Arabe','Français'],           skills: ['Traceurs isotopiques','Géologie'] },
  { name: 'Paul Dumont',       university: 'Lyon',        cohort: 'Cohorte 1', languages: ['Français'],                   skills: ['Écologie','Modélisation climatique'] },
  { name: 'Quentin Moreau',    university: 'Lyon',        cohort: 'Cohorte 2', languages: ['Français','Allemand'],        skills: ['Télédétection','Hydrologie'] },
  { name: 'Rachel Simon',      university: 'Bordeaux',    cohort: 'Cohorte 2', languages: ['Français','Espagnol'],        skills: ['Qualité eau','Écologie'] },
  { name: 'Samuel Petit',      university: 'Bordeaux',    cohort: 'Cohorte 3', languages: ['Français'],                   skills: ['Modélisation','SIG'] },
  { name: 'Tara Hughes',       university: 'Bristol',     cohort: 'Cohorte 1', languages: ['Anglais'],                   skills: ['Traceurs isotopiques','Géochimie'] },
  { name: 'Umar Patel',        university: 'Bristol',     cohort: 'Cohorte 2', languages: ['Anglais','Ourdou'],           skills: ['Télédétection','Modélisation climatique'] },
  { name: 'Vera Müller',       university: 'Zurich',      cohort: 'Cohorte 1', languages: ['Allemand','Français'],        skills: ['Géochimie','Traceurs isotopiques'] },
  { name: 'Walter Braun',      university: 'Zurich',      cohort: 'Cohorte 3', languages: ['Allemand','Anglais'],         skills: ['Hydrologie','Modélisation'] },
  { name: 'Ximena Torres',     university: 'Barcelona',   cohort: 'Cohorte 2', languages: ['Espagnol','Anglais'],         skills: ['Écologie','SIG'] },
  { name: 'Yusuf Guerrero',    university: 'Barcelona',   cohort: 'Cohorte 3', languages: ['Espagnol','Français'],        skills: ['Qualité eau','Modélisation climatique'] },
  { name: 'Zara Okonkwo',      university: 'Nairobi',     cohort: 'Cohorte 1', languages: ['Anglais','Swahili'],          skills: ['Hydrologie','Écologie'] },
  { name: 'Amos Kiptoo',       university: 'Nairobi',     cohort: 'Cohorte 2', languages: ['Anglais','Swahili'],          skills: ['Télédétection','SIG'] },
  { name: 'Haruki Tanaka',     university: 'Tokyo',       cohort: 'Cohorte 2', languages: ['Japonais','Anglais'],         skills: ['Modélisation','Géochimie'] },
  { name: 'Yuki Yamamoto',     university: 'Tokyo',       cohort: 'Cohorte 3', languages: ['Japonais','Anglais'],         skills: ['Modélisation climatique','Télédétection'] },
  { name: 'Sophia Laurent',    university: 'Vancouver',   cohort: 'Cohorte 3', languages: ['Anglais','Français'],         skills: ['Hydrologie','Écologie'] },
]

async function run() {
  console.log(`Importation de ${doctorants.length} doctorants...`)

  for (const doc of doctorants) {
    await client.create({ _type: 'doctorant', ...doc })
    console.log(`  ✓ ${doc.name}`)
  }

  console.log('\nImport terminé. Vérifie dans le Studio sur localhost:3333.')
}

run().catch(err => {
  console.error('Erreur :', err.message)
  process.exit(1)
})
