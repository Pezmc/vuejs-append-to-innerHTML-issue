<template>
  <!-- 
    v-append-html appends a span to this div which seems to break Vue.js when the state changes
    See the directive in Main.js
  -->
  <div v-append-html="'Hello World'">
      <span v-if="on">On</span>
  </div>
  <button @click="toggle">Toggle State</button>
</template>

<script>
export default {
  name: 'DemoBug',
  data () {
      return {
          on: true
      }
  },
  methods: {
      toggle () {
          this.on = !this.on
      }
  }
}
</script>