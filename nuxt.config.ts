import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  meta: {
    link: [
      {
        rel: "stylesheet",
        //href: "./scss/custom.scss"
        href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Annie+Use+Your+Telescope&display=swap'
      }
    ],
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      }
    ]
  },
})
