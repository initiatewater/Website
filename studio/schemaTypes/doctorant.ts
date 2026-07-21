import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'doctorant',
  title: 'Doctorant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom complet',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    /*
      Université : référence vers un document "universite".
      L'admin choisit dans la liste des universités existantes.
      Pour ajouter une université : aller dans "Université" → +
    */
    defineField({
      name: 'university',
      title: 'Université',
      type: 'reference',
      to: [{ type: 'universite' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'cohort',
      title: 'Cohorte',
      type: 'string',
      options: {
        list: [
          { title: 'Cohorte 1', value: 'Cohorte 1' },
          { title: 'Cohorte 2', value: 'Cohorte 2' },
          { title: 'Cohorte 3', value: 'Cohorte 3' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'languages',
      title: 'Langues parlées',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Français', 'Anglais', 'Espagnol', 'Arabe',
          'Allemand', 'Japonais', 'Mandarin', 'Portugais',
          'Swahili', 'Ourdou',
        ],
      },
    }),
    defineField({
      name: 'skills',
      title: 'Compétences',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          'Hydrologie', 'Modélisation', 'Géologie', 'Télédétection',
          'Traceurs isotopiques', 'Qualité eau', 'SIG',
          'Modélisation climatique', 'Écologie', 'Géochimie',
        ],
      },
    }),
    defineField({
      name: 'subject',
      title: 'Sujet de thèse',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'profileLink',
      title: 'Lien profil (LinkedIn, page perso…)',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'university.name',  // affiche le nom de l'université liée
    },
  },
})
