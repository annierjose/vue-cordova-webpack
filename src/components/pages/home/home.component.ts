import { Component, Vue, Prop } from 'vue-property-decorator'
import './home.component.css'
import ToolbarComponent from '@/components/toolbar/toolbar.component'

@Component({
  template: require('./home.component.html'),
  components: {
    toolbarComponent: ToolbarComponent
  }
})
export default class HomeComponent extends Vue {
  @Prop()
  public action: any
}
