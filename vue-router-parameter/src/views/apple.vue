<template>
  <div id="apple">
    <h3>welcome to Apple</h3>
    <router-link to="/company/apple/iphone">
      <h4>iphone</h4>
    </router-link>
    <div>
      <router-link to="/company/apple/ipad">
        <h4>ipad</h4>
      </router-link>
    </div>
    <div>
      <router-link to="/company/apple/mac">
        <h4>mac</h4>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
