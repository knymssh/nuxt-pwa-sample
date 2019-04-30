require('dotenv').config();
const { GOOGLE_MAPS_API_KEY } = process.env;

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'nuxt-pwa-sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      config.externals = config.externals || [];
      if (!isClient) {
        config.externals.splice(0, 0, function(context, request, callback) {
          if (/^vue2-google-maps($|\/)/.test(request)) {
            callback(null, false);
          } else {
            callback();
          }
        });
      }
    },
  },
  env: {
    GOOGLE_MAPS_API_KEY,
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources', '@nuxtjs/dotenv'],
  plugins: [{ src: '~plugins/vue2-google-maps.js', ssr: false }],
  vendor: ['vue2-google-maps'],
  styleResources: {
    scss: [
      './assets/style/vars/*.scss',
      './assets/style/abstracts/_mixins.scss',
      './assets/style/abstracts/_variables.scss',
    ],
  },
  manifest: {
    name: 'nuxt-pwa-sample',
    short_name: 'nuxt-pwa',
    description: 'nuxt pwa sample',
    lang: 'ja',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    orientation: 'portrait',
    scope: '/',
    start_url: '/',
  },
  workbox: {
    dev: true,
  },
};
