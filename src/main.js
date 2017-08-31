import Vue from 'vue';
import App from './App.vue';
import { store } from './store';
import axios from 'axios';
import VueRouter from 'vue-router';
import UserInput from './components/UserInput.vue';
import User from './components/User.vue';
import Home from './components/Home.vue';

Vue.use(VueRouter);

const routes = [
  {path: '/', component: Home},
  {path: '/newuser', component: UserInput},
  {path: '/data', component: User}
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  el: '#app',
  router,
  mounted() {
    axios.get("http://localhost:8000/users")
    .then(response => this.$store.state.users = response.data)
  },
  render: h => h(App)
})
