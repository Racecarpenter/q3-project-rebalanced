import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    addUser(state, [username, height, weight, age, sex, workoutfreq]) {
    axios.post(`http://localhost:8000/users`, {
      username: username, height: height, weight: weight, age: age, sex:sex, workoutfreq: workoutfreq
    })
    .then(response => state.users = response.data)
    },
    deleteUser(state, [username, height, weight, age, sex, workoutfreq], [id]) {
      axios.delete(`http://localhost:8000/users/`+[id], {
        username: username, height: height, weight: weight, age: age, sex:sex, workoutfreq: workoutfreq
      })
      .then(response => state.users = response.data)
    }
  },
    actions: {
      addUser(context, [username, height, weight, age, sex, workoutfreq]) {
        console.log('youre fired')
        context.commit('addUser', [username, height, weight, age, sex, workoutfreq])
      },
      deleteUser(context, [username, height, weight, age, sex, workoutfreq], [id]) {
        context.commit('deleteUser', [username, height, weight, age, sex, workoutfreq], [id])
      }
    }
})
