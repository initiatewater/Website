import {defineField, defineType} from 'sanity'

/*
  siteSettings : document singleton (un seul exemplaire).
  Contient tous les paramètres globaux du site.
  L'admin ne doit créer QU'UN SEUL document de ce type.
*/
export default defineType({
  name: 'siteSettings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    // ── VISIBILITÉ DES PAGES ───────────────────────────────────────────────
    // Décocher une case = la page disparaît de la navigation et du site.
    // Le changement prend effet après rebuild (automatique via webhook).
    {
      name: 'pagesVisibility',
      title: 'Pages visibles',
      type: 'object',
      fields: [
        defineField({ name: 'showNetwork',      title: 'Network',      type: 'boolean', initialValue: true }),
        defineField({ name: 'showPodcasts',     title: 'Podcasts',     type: 'boolean', initialValue: true }),
        defineField({ name: 'showPublications', title: 'Publications', type: 'boolean', initialValue: true }),
        defineField({ name: 'showApply',        title: 'Apply',        type: 'boolean', initialValue: true }),
        defineField({ name: 'showContact',      title: 'Contact Us',   type: 'boolean', initialValue: true }),
        defineField({ name: 'showFaq',          title: 'FAQ',          type: 'boolean', initialValue: true }),
      ],
    },

    // ── INFORMATIONS GÉNÉRALES ────────────────────────────────────────────
    defineField({
      name: 'siteTitle',
      title: 'Titre du site (onglet navigateur)',
      type: 'string',
      initialValue: 'Initiate',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description SEO',
      type: 'text',
      rows: 2,
      initialValue: 'Initiate – Connecting PhD candidates in freshwater research worldwide.',
    }),

    // ── CONTACT ───────────────────────────────────────────────────────────
    defineField({
      name: 'formspreeId',
      title: 'ID Formspree (formulaire Contact Us)',
      type: 'string',
      description: 'Trouvé sur formspree.io → ton formulaire → Settings. Ex: xpwzabcd',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Paramètres du site' }),
  },
})
