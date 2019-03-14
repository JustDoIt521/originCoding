<template>
  <div id="company">
    <h2>welcome to company</h2>
    <div style=";margin-left:auto;margin-right:auto;flex-direction:row;">
      <div>
      <router-link to="/company/huawei"><h3>华为</h3></router-link>
      </div>
      <div>
      <router-link to="/company/apple"><h3>苹果</h3></router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
