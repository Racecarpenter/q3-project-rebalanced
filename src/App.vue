<template>
  <div id="app">
      <img src="https://static1.squarespace.com/static/565332d0e4b02fdfadbf95cd/5654d60be4b0ccdbf9a8966e/566733fe05f8e2d0dde2d58d/1449604162231/upanddown.jpg?format=750w" alt="rebalanced" height="250px"><br>
      <img src="./assets/Logomakr_2XrFkq.png" alt="rebalanced" width="700px">
      <br>

      <em>A Full-Stack Galvanize Q3 Project<br>
        To get the most from workouts, <br>
        for those who don't have time to make it to the gym,<br>
        but are still counting calories.
        </em>
    <user></user>
    <footer id="footer">
      Race Carpenter 2017<br>
      <div id="links"><a href="https://github.com/Racecarpenter/q3-project-rebalanced" target=blank>Github</a></div>
      <div id="links"><a href="https://www.linkedin.com/in/racecarpenter/" target=blank>Contact</a></div>
    </footer>
  </div>
</template>

<script>
import User from './components/User.vue';
export default {
  name: 'app',
  components: {
    User
  },
  data () {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  width: 100%;
}
#footer {
  background-color: green;
  color: white;
}
#links {
  margin: 0px auto;
  width: 100px;
  background-color: white;
  border: 2px solid black;
}
</style>
