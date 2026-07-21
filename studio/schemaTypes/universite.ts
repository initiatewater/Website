import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'universite',
  title: 'Université',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Pays',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'Ville',
      type: 'string',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'country' },
  },
})
