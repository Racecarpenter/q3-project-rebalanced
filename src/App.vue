<template>
  <div id="app">
    <router-view></router-view>

    <footer id="footer">
      <a href="http://localhost:8080/"><img id="homie"  src="https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic//home1600.png" height="30px" alt="Home"></a><br>
      <div id="name">Race Carpenter 2017</div><br>
      <div id="links"><a id="links" href="https://github.com/Racecarpenter/q3-project-rebalanced" target=blank>Github</a></div>
      <div id="links"><a id="links" href="https://www.linkedin.com/in/racecarpenter/" target=blank>Contact</a></div>
    </footer>
  </div>
</template>

<script>
import User from './components/User.vue';
import Home from './components/Home.vue';
export default {
  name: 'app',
  components: {
    User,
    Home
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 500px;
  width: 100%;
  overflow-y: scroll;
}
#footer {
  background-color: green;
  color: white;
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin-left: -8px;
  font-size: 20px;
}
#links {
  margin: 0px auto;
  width: 100px;
  color: black;
  text-decoration: none;
}
#name {
  margin: 0px auto;
  width: 200px;
  color: white;
  margin-bottom: -20px;
}
#homie {
  margin: 0px auto;
  color: black;
}
</style>
