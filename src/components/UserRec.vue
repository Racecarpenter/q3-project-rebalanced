<template lang="html">
  <div id="rec">
    For {{users.username}} to lose a lb per-week they must only eat {{Math.ceil(users.bmr - 500)}} calories a day<br>
  </div>
</template>

<script>
export default {
  name: 'user-rec',
  props: ['users'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css">
#rec {
  margin-top: 100px;
  font-size: 32px;
  font-family: sans-serif;
}
</style>
