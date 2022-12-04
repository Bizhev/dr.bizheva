import { resolve } from 'path'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-basic-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{
    src: '~/plugins/vuesax', mode: 'client'
  }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    // '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // FIXME: При сборке возникает такого рода ошибка, пока не критично, но в будущем необходимо исправить
    //  WARN  You did not set any plugins, parser, or stringifier. Right now, PostCSS does nothing.
    //  Pick plugins for your case on https://www.postcss.parts/ and use them in postcss.config.js.
    // postcss: {
    //   // Add plugin names as key and arguments as value
    //   // Install them before as dependencies with npm or yarn
    //   plugins: {
    //     // Disable a plugin by passing false as value
    //     'postcss-url': false,
    //     'postcss-nested': {},
    //     'postcss-responsive-type': {},
    //     'postcss-hexrgba': {}
    //   },
    //   preset: {
    //     // Change the postcss-preset-env settings
    //     autoprefixer: {
    //       grid: true
    //     }
    //   }
    // }

  },
  // FIXME: Позже необходимо разобраться с алиасами в nuxt
  // alias: {
  //   // '@': resolve(__dirname, './components')
  //   // '@c': resolve(__dirname, './components')
  // }
}
