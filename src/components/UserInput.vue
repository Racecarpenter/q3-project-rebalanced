<template>
<div>
    <input type="text" placeholder="username" class="form-control" v-model="username">
    <input type="text" placeholder="weight(lb)" class="form-control" v-model="weight">
    <input type="text" placeholder="height(in)" class="form-control" v-model="height">
    <input type="text" placeholder="age" class="form-control" v-model="age">
    <input type="text" placeholder="sex" class="form-control" v-model="sex">
    <input type="text" placeholder="workout frequency" class="form-control" v-model="workoutfreq">
    <a href="http://localhost:8080/data"><button class="btn-success" v-on:click="addUser">Add</button></a>
</div>
</template>

<script>
export default {
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
  methods: {
    addUser() {
      this.$store.dispatch('addUser', [this.username, this.height, this.weight, this.age, this.sex, this.workoutfreq])
      this.username=''
      this.height=[]
      this.weight=[]
      this.age=[]
      this.sex=''
      this.workoutfreq=[]
    }
  }
}
</script>

<style lang="css">
</style>
