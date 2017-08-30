import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import axios from 'axios'

new Vue({
  store,
  el: '#app',
  mounted() {
    axios.get("http://localhost:8000/users")
    .then(response => this.$store.state.users = response.data)
  },
  render: h => h(App)
})
