<!--
 * @Author: your name
 * @Date: 2021-07-29 11:47:18
 * @LastEditTime: 2021-08-02 22:42:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-project/src/App.vue
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <button @click="handlerError">直接new一个错误</button>
    <button @click="handlerError2">直接111</button>
    <div>hahahaha</div>
    <!-- <HelloWorld msg="欢迎来到自动化项目,提交代码自动构建" /> -->
    <!-- <test-js /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   // HelloWorld,
  //   TestJs: () => import("./views/test"),
  // },
  mounted() {
    // console.log("error");
    // throw console.error("自定义错误,可以传送官网吗");
  },

  methods: {
    handlerError() {
      throw new Error("throw new Error");
    },
    handlerError2() {
      var a = 1;
      console.log(a);
      // this.data.list = 1;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
