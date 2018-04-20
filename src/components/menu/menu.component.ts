import { Component, Vue } from 'vue-property-decorator'
import './menu.component.css'
import event from "@/event"

@Component({
  template: require('./menu.component.html')
})
export default class MenuComponent extends Vue {
  public pages = ['home', 'settings']
  public openSide = false

  constructor () {
    super()
    event.$on('service-splitter', this.serviceSplitter)
  }

  public menuAction () {
    this.openSide = !this.openSide
  }
  public menuItemAction (page: string) {
    this.menuAction()
    this.$router.push({name: page})
  }
  public serviceSplitter () {
    this.openSide = true
  }
  public mounted () {
    this.$router.push({name: 'home'})
  }
}
