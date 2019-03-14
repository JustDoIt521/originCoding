<template>
  <div id="huawei">
    <h3>welcome to huawei</h3>
    <div>
      <router-link :to="{path: '/company/huawei/nova', query: {path: '/company/huawei/nova'}}">
        <h4>nova</h4>
      </router-link>
      <router-link :to="{name: 'honor', params: {path: '/company/huawei/honor'}}">
        <h4>honor</h4>
      </router-link>
    </div>
    <div>
      <button @click="goNova()">nova</button>
      <button @click="goHonor()">honor</button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "huawei",
  methods: {
    goNova: function(){
      this.$router.push({
        path: "/company/huawei/nova",
        query: {
          path: "/company/huawei/nova"
        }
      })
    },
    goHonor: function(){
      this.$router.push({
        name: "honor",
        params: {
          path: "/company/huawei/honor"
        }
      })
    }
  }
}
</script>

