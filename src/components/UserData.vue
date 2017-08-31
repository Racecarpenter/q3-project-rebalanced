<template lang="html">
  <tr id="tbod">
      <td id="name">
        {{users.username}}
      </td>
      <td id="weight">
        {{users.weight}}
      </td>
      <td id="height">
        {{users.height}}
      </td>
      <td id="age">
        {{users.age}}
      </td>
      <td id="sex">
        {{users.sex}}
      </td>
      <td id="workoutfreq">
          {{users.workoutfreq}}
      </td>
      <td id="bmr"><br>
        {{users.bmr}}<br>
        <a href="http://localhost:8080/"><button v-on:click="deleteUser" class="btn-danger">Delete</button></a>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'user-data',
  props: ['users'],
  data () {
    return {

    }
  },
  methods: {
    deleteUser() {
      console.log('blah: ', this.users.id)
      this.$store.dispatch('deleteUser', this.users)
    }
  }
}
</script>

<style scoped>
#tbod {
  border: 2px solid black;
  height: 100px;
}
</style>
