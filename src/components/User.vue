<template lang="html">
<div id="user">
    <table class="table tably">
  <thead>
    <tr>
      <th>Name</th>
      <th>Weight(lb)</th>
      <th>Height(in)</th>
      <th>Age</th>
      <th>Sex</th>
      <th>Workoutfreq(week)</th>
      <th>BMR</th>
    </tr>
  </thead>
  <tbody>
    <user-data v-for="users in users" v-bind:users="users" :key="users.id"></user-data>
  </tbody>
</table>
    <user-rec v-for="users in users" v-bind:users="users" :key="users.id"></user-rec>
</div>
</template>

<script>
import UserData from './UserData.vue';
import UserInput from './UserInput.vue';
import UserRec from './UserRec.vue';
export default {
  name: 'user',
  components: {
    UserData,
    UserInput,
    UserRec
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
