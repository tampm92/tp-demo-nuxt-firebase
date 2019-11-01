import * as path from 'path';
import * as dotenv from 'dotenv';

/**
 * Load .env file or .env.[NODE_ENV] file.
 */
const NODE_ENV = process.env.NODE_ENV;
let fileNameEnv = '.env' + (!!!NODE_ENV || NODE_ENV === 'development' ? '' : `.${NODE_ENV}`);
dotenv.config({
  path: path.join(process.cwd(), fileNameEnv)
});

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/tp-100.jpg' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { 
    color: '#42b883',
    height: '5px',
    duration: 5000
  },
  /*
  ** Global CSS
  */
  css: [
    /* Import Font Awesome Icons Set */
    '~/node_modules/@fortawesome/fontawesome-free/css/all.min.css',
    /* Import Simple Line Icons Set */
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    /* Import Bootstrap Vue Styles */
    '~/node_modules/bootstrap-vue/dist/bootstrap-vue.css',
    /* Import Core SCSS */
    '~/assets/scss/global.scss'
  ],
  router: {
    middleware: 'router-auth'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-toasted',
    '~/plugins/fireauth'
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
    ['@nuxtjs/dotenv', {
      filename: fileNameEnv
    }],
    '@nuxtjs/style-resources',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_variables.scss',
      '~/assets/scss/_mixins.scss'
    ]
  },
  manifest: {
    name: 'TP-Demo Nuxt-Firebase',
    short_name: 'TP',
    lang: 'en',
    description: 'TP-Demo Nuxt-Firebase-BootstrapVue',
    theme_color: '#01229b',
    background_color: '#000',
    ogImage: `https://live.staticflickr.com/65535/48992121062_769c357412_o.png`
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
