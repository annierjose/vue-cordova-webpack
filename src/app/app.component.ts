import { Component, Vue } from 'vue-property-decorator'
import './app.component.css'
import MenuComponent from '../components/menu/menu.component'
import router from '@/router/index.ts'

@Component({
  template: require('./app.component.html'),
  components: {
    menuComponent: MenuComponent
  },
  router
})
export default class AppComponent extends Vue {

}
