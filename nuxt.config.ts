export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  // close devtools
  devtools: {
    enabled: false
  },
  extends: [
    process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
  ],
  icon: {
    componentName: 'NuxtIcon'
  },
  ui: {
    icons: ['heroicons']
  },
})
