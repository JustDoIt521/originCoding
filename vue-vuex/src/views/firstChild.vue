<template>
  <div id="firstChild">
    <h3>firstChild</h3>
    <div>
      <span>{{fatherMsg}}</span>
    </div>
    <div>
      <button @click="sendFatherMsg">sendFatherMsg</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "firstChild",
  data() {
    return {
      fatherMsg: ""
    }
  },
  methods: {
    msg: function() {
      return "hello I'm firstChild";
    },
    getMsg: function(msg) {
      this.fatherMsg = msg;
    },
    sendFatherMsg: function() {
      let msg = "hello father  I'm firstChild";
      this.$emit("childMsg",msg);
    }
  },
}
</script>

