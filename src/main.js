import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import Vueaxios from 'vue-axios'
import router from './router'
import VueBarcodeScanner from 'vue-barcode-scanner'
import { ImageBarcodeReader } from "vue-barcode-reader";
import VueQuagga from 'vue-quaggajs';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(VueQuagga);
Vue.config.productionTip = false
Vue.use( Vueaxios, axios)
Vue.use(ImageBarcodeReader)
let options = {
  sound: true, // default is false
  soundSrc: '/static/sound.wav', // default is blank
  sensitivity: 300, // default is 100
  requiredAttr: true, // default is false
  controlSequenceKeys: ['NumLock', 'Clear'], // default is null
  callbackAfterTimeout: true // default is false
}

Vue.use(VueBarcodeScanner, options)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
