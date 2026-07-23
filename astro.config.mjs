// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

// Pas d'adapter : Vercel sert les fichiers statiques nativement.
// Le dossier dist/ généré par `astro build` est déployé tel quel.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
})
