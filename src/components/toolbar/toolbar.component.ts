import { Component, Vue, Prop } from 'vue-property-decorator'
import './toolbar.component.css'
import event from "@/event"

@Component({
  template: require('./toolbar.component.html')
})
export default class ToolbarComponent extends Vue {
  @Prop()
  public page: any

  public action (): any {
    event.$emit('service-splitter')
  }
}
