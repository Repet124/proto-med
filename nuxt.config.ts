// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: {
    config: {
      darkMode: 'selector',
      theme: {
        container: {
          center: true,
          padding: '1rem'
        }
      },
      plugins: [
        require('@tailwindcss/container-queries'),
      ]
    }
  }
})