import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageContact',
  title: 'Page Contact Us',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Titre', type: 'string', initialValue: 'Contact us' }),
    defineField({ name: 'photo', title: 'Photo (colonne droite)', type: 'image', options: { hotspot: true } }),
  ],
  preview: { prepare: () => ({ title: 'Page Contact Us' }) },
})
