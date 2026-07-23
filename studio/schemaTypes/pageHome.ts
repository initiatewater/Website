import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageHome',
  title: 'Page d\'accueil',
  type: 'document',
  fields: [
    defineField({ name: 'heroTitle',      title: 'Titre principal',    type: 'string',  initialValue: 'The initiate program' }),
    defineField({ name: 'heroText',       title: 'Texte description',  type: 'text', rows: 4,
      initialValue: 'Are you a PhD candidate working on water-related challenges? Do you want to connect with peers, experts, and mentors from around the world?' }),
    defineField({ name: 'ctaLabel',       title: 'Bouton CTA',         type: 'string',  initialValue: 'Candidater ici' }),
    defineField({ name: 'ctaLink',        title: 'Lien bouton CTA',    type: 'string',  initialValue: '/apply' }),
    defineField({ name: 'statDoctorants', title: 'Stat : Doctorants',  type: 'number',  initialValue: 126 }),
    defineField({ name: 'statUniversites',title: 'Stat : Universités', type: 'number',  initialValue: 12 }),
    defineField({ name: 'statCohortes',   title: 'Stat : Cohortes',    type: 'number',  initialValue: 3 }),
  ],
  preview: { prepare: () => ({ title: 'Page d\'accueil' }) },
})
