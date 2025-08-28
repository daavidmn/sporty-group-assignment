import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
  theme: {
    defaultTheme: 'system', // 'light' | 'dark' | 'system'
    themes: {
      dark: {
        colors: {
          background: '#181818',
          backgroundAlt: '#636363ff',
          bannerFont: '#ffffff',
          backgroungGray: '#707070ff',
        },
      },
      light: {
        colors: {
          background: '#e41827',
          backgroundAlt: '#ffffff',
          bannerFont: '#e41827',
          backgroungGray: '#eeeeeeff',
        },
      },
    },
  },
})

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
