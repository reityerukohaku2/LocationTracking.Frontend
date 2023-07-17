import { Plugin } from '@nuxt/types'
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const googleMapsPlugin: Plugin = ({ $config }) => {
  Vue.use(VueGoogleMaps, {
    load: {
      key: $config.googleAPIKey,
      libraries: 'places',
    },
  })
}

export default googleMapsPlugin
