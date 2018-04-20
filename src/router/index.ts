import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/pages/home/home.component.ts'
import SettingsComponent from '@/components/pages/settings/settings.component.ts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsComponent
    }
  ]
})
