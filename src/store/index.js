import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUser(state, [username, height, weight, age, sex, workoutfreq, bmr]) {
    axios.post(`http://localhost:8000/users`, {
      username: username, height: height, weight: weight, age: age, sex:sex, workoutfreq: workoutfreq, bmr: bmr
    })
    .then(response => state.users = response.data)
    },
    deleteUser(state, payload) {
    console.log('Payload: ', payload)
    axios.delete(`http://localhost:8000/users/${payload.id}`)
    .then(response => console.log('response: ', response))
    }
  },
    actions: {
      addUser(context, [username, height, weight, age, sex, workoutfreq]) {
        context.commit('addUser', [username, height, weight, age, sex, workoutfreq])
      },
      deleteUser(context, payload) {
        console.log('youre fired', payload)
        context.commit('deleteUser', payload)
      }
    }
})
