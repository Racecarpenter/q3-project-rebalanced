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
    </tr>
</template>

<script>
export default {
  name: 'user-data',
  props: ['users'],
  data () {

    return {
      BMR: 0
    }
  },
  computed: {
    bmrCalc(){
    var userHeight = this.$store.state.users[0].height;
    var userWeight = this.$store.state.users[0].weight;
    var userAge = this.$store.state.users[0].age;
    return console.log('user height: ', userHeight);
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
