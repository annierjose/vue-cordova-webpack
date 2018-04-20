// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Vue from 'vue'
import VueOnsen from 'vue-onsenui'
import store from './store'
import AppComponent from '@/app/app.component.ts'

Vue.config.productionTip = false

Vue.use(VueOnsen)
/* eslint-disable */
new Vue({
  el: '#app',
  store,
  template: '<AppComponent/>',
  components: { AppComponent }
})
