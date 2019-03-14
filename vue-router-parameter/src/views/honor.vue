<template>
  <div id="honor">
    <h3>welcome to honor</h3>
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
      path: this.$route.params.path
    }
  }
}
</script>

