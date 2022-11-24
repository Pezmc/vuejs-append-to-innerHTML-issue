import { createApp } from 'vue'
import App from './App.vue'

const directive = {
  name: 'append-html',
  mounted: (el, binding) => {
      if (el && binding) {
          const domString = `<br>Appended to HTML: ${binding.value}`

          const span = document.createElement('span');
          span.innerHTML = domString.trim();

          el.append(span)
      }
  }
}

createApp(App)
  .use((Vue) => {
    Vue.directive(directive.name, directive)
  })
  .mount('#app')
