<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="width:60px;height:60px;">
    <father></father>
  </div>
</template>

<script>
import father from "@/views/father"

export default {
  name: 'app',
  components: {
    father
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
  margin-top: 60px;
}
</style>
