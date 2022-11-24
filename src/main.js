import { createApp } from 'vue'
import App from './App.vue'

const directive = {
  name: 'append-html',
  mounted: (el, binding) => {
      if (el && binding) {
          const domString = `<span><br>Appended to HTML: ${binding.value}</span>`
          el.innerHTML += domString
      }
  }
}

createApp(App)
  .use((Vue) => {
    Vue.directive(directive.name, directive)
  })
  .mount('#app')
