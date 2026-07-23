import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pagePodcasts',
  title: 'Page Podcasts',
  type: 'document',
  fields: [
    defineField({ name: 'title',       title: 'Titre',             type: 'string', initialValue: 'Podcasts' }),
    defineField({ name: 'description', title: 'Description',       type: 'text',   rows: 4 }),
    defineField({ name: 'ctaLabel',    title: 'Bouton CTA',        type: 'string', initialValue: 'Listen to the podcast' }),
    defineField({ name: 'podcastUrl',  title: 'Lien du podcast',   type: 'url' }),
    defineField({
      name: 'images',
      title: 'Grille d\'images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      description: 'Images affichées en grille à droite. Ordre = ordre d\'affichage.',
    }),
  ],
  preview: { prepare: () => ({ title: 'Page Podcasts' }) },
})
