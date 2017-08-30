<template lang="html">
<div id="user">
  <user-input></user-input>
    <table class="table tably">
  <thead>
    <tr>
      <th>Name</th>
      <th>Weight(kg)</th>
      <th>Height</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Workoutfreq</th>
    </tr>
  </thead>
  <tbody>
    <user-data v-for="users in users" v-bind:users="users" :key="users.id"></user-data>
  </tbody>
</table>
</div>
</template>

<script>
import UserData from './UserData.vue';
import UserInput from './UserInput.vue';
export default {
  name: 'user',
  components: {
    UserData,
    UserInput
  },
  data () {
    return {
      username:'',
      height:[],
      weight:[],
      age:[],
      sex: [],
      workoutfreq:[]
    }
  },
  computed: {
    users() {
      return this.$store.state.users;
    }
  }
}
</script>

<style scoped>
#user {
  margin-top: 10px;
  height: 100%;
  width: 100%;
}
.tably {
  width: 800px;
  margin: 0px auto;
  border: 2px solid black;
  background-color: white;
}
.contain {
  margin:0px auto;
  width: 500px;
  height: 100px;
}
.formy {
  width: 200px;
  display: inline-block;
}
</style>
