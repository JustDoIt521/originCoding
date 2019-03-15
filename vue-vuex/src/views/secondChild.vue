<template>
  <div id="secondChild">
    <h3>secondChild</h3>
    <div>
      <span>{{fatherMsg}}</span>
    </div>
    <div>
      <span>father's name: {{name}} </span>
      <span style="display:block">father's age: {{age}}</span>
    </div>
    <div>
      <button @click="sendFatherMsg">sendFatherMsg</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "secondChild",
  data() {
    return {
      fatherMsg: "" 
    }
  },
  props:[
    'name',
    'age'
  ],
  methods: {
    // 返回信息给父组件
    msg: function() {
      return "hello  I'm secondChild";
    },
    // 接收父组件信息
    getMsg: function(msg) {
      this.fatherMsg = msg;
    },
    sendFatherMsg: function() {
      let msg = "hello father  I'm secondChild";
      this.$emit("childMsg",msg);
    }
  }
}
</script>

