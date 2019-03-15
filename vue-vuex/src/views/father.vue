<template>
  <div id="father">
    <h2>father</h2>
    <div>
      <span>{{msg}}</span>
    </div>
    <div>
      <span>{{childMsg}}</span>
    </div>
    <div>
      <button @click="getMsg('firstChild')">firstChild</button>
      <button @click="getMsg('secondChild')" style="margin-left:10px;">secondChild</button>
    </div>
    <div style="margin-top:20px;">
      <button @click="sendMsg('firstChild')">sendFirstChild</button>
      <button @click="sendMsg('secondChild')" style="margin-left:10px;">sendSecondChild</button>
    </div>
    <div style="display:flex;justify-content:space-around;margin-top:80px;">
      <first-child ref="firstChild" @childMsg="getChildMsg"></first-child>
      <second-child ref="secondChild" @childMsg="getChildMsg" :name="name" :age="age"></second-child>
    </div>
  </div>
</template>
<script>
import firstChild from "@/views/firstChild"
import secondChild from "@/views/secondChild"
export default {
  name: "father",
  data() {
    return {
      name: "programmer",
      age: "23",
      msg: "",
      childMsg: ""
    }
  },
  components:{
    "first-child": firstChild,
    "second-child": secondChild
  },
  methods: {
    //从子组件获取信息
    getMsg: function(component) {
      let msg = this.$refs[component].msg();
      this.msg = `这是从子组件 ${component} 获取的信息：${msg}`;
    },
    // 给子组件发送信息
    sendMsg: function(component) {
      this.$refs[component].getMsg(`这是来自父组件发送的信息:hello my ${component}`);
    },
    // 子组件调用父组件
    getChildMsg: function(msg) {
      this.childMsg = msg;
    }
  }
}
</script>
