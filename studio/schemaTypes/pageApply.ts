import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'pageApply',
  title: 'Page Apply',
  type: 'document',
  fields: [
    defineField({ name: 'title',    title: 'Titre ligne 1',  type: 'string', initialValue: 'Apply to' }),
    defineField({ name: 'subtitle', title: 'Titre ligne 2',  type: 'string', initialValue: 'Initiate' }),
    defineField({ name: 'formspreeId', title: 'ID Formspree candidatures', type: 'string',
      description: 'Ex: xpwzabcd — formulaire séparé du Contact Us' }),
  ],
  preview: { prepare: () => ({ title: 'Page Apply' }) },
})
