import { Component, Vue } from 'vue-property-decorator'
import './settings.component.css'
import ToolbarComponent from '@/components/toolbar/toolbar.component'

@Component({
  template: require('./settings.component.html'),
  components: {
    toolbarComponent: ToolbarComponent
  }
})
export default class SettingsComponent extends Vue {
}
