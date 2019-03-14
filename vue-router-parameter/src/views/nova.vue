<template>
  <div id="nova">
    <h3>welcome to nova</h3>
    <h5>{{path}}</h5>
  </div>
</template>
<script>
export default {
  name: "nova",
  created() {
  },
  data() {
    return {
      path: this.$route.query.path
    }
  }
}
</script>

