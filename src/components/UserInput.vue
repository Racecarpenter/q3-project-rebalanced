<template>
<div id="form">
    <input id="inny" type="text" placeholder="username" class="form-control" v-model="username">
    <input id="inny" type="text" placeholder="weight(lb)" class="form-control" v-model="weight">
    <input id="inny" type="text" placeholder="height(in)" class="form-control" v-model="height">
    <input id="inny" type="text" placeholder="age" class="form-control" v-model="age">
    <input id="inny" type="text" placeholder="sex" class="form-control" v-model="sex">
    <input id="inny" type="text" placeholder="Number of Workouts(week)" class="form-control" v-model="workoutfreq"><br>
    <a href="http://localhost:8080/data"><button class="btn-success" v-on:click="addUser" style="font-size:30px; background-color:green; color:white; border-radius:10%;"><em>GO</em></button></a>
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
#form {
  display: inline-block;
  width: 500px;
  height: 300px;
  margin-top: 100px;
}
#inny {
  margin-bottom: 10px;
  height: 30px;
  width: 400px;
  font-size: 24px;
}
</style>
