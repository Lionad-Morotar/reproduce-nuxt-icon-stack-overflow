export default defineNuxtConfig({
  compatibilityDate: '2024-07-21',
  extends: [
    process.env.NUXT_UI_PRO_PATH || '@nuxt/ui-pro',
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
  ],
  /**
   * @see https://github.com/nuxt/icon/issues/200
   */
  icon: {
    componentName: 'NuxtIcon'
  },
  ui: {
    icons: ['heroicons']
  },
})
