import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pagePublications',
  title: 'Page Publications',
  type: 'document',
  fields: [
    defineField({ name: 'title',       title: 'Titre',       type: 'string', initialValue: 'Publications' }),
    defineField({ name: 'description', title: 'Description', type: 'text',   rows: 3,
      initialValue: 'Varied collaborative academic content, including research articles, case studies, and reflective essays on water sector topics.' }),
  ],
  preview: { prepare: () => ({ title: 'Page Publications' }) },
})
