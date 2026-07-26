import doctorant       from './doctorant'
import universite      from './universite'
import publication     from './publication'
import faq             from './faq'
import siteSettings    from './siteSettings'
import pageHome        from './pageHome'
import pagePodcasts    from './pagePodcasts'
import pagePublications from './pagePublications'
import pageContact     from './pageContact'
import pageApply       from './pageApply'

/*
  Ordre d'affichage dans Sanity Studio.
  Les documents "Page*" et "Paramètres" sont en haut pour
  que l'admin les trouve facilement.
*/
export const schemaTypes = [
  // Paramètres globaux
  siteSettings,
  // Contenus de pages
  pageHome,
  pagePodcasts,
  pagePublications,
  pageContact,
  pageApply,
  // Données
  doctorant,
  universite,
  publication,
  faq,
]