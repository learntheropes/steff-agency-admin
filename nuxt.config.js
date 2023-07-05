require('dotenv').config()

export default {
  mode: 'spa',
  env: {
    GOOGLE_CLIENTID: process.env.GOOGLE_CLIENTID,
    AUTHORIZED_EMAILS: process.env.AUTHORIZED_EMAILS,
    MAILGUN_APIKEY: process.env.MAILGUN_APIKEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    MAILGUN_EMAIL: process.env.MAILGUN_EMAIL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/db',
    '~/plugins/netlify'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/pwa',
    'nuxt-buefy',
    '@nuxtjs/moment',
    'cookie-universal-nuxt'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    debug: false,
    baseURL:  (process.env.URL) ? 'https://steff-admin.netlify.app' : 'http://localhost:34567',
    proxyHeaders: true
  },

  auth: {
    redirect: {
      login: '/',
      callback: '/cb/'
    },
    strategies: {
      google: {
        client_id: process.env.GOOGLE_CLIENTID,
        scope: [
          'email'
        ]
      },
    },
  },

  router: {
    middleware: [
      'auth',
      'isAuthEmail'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
