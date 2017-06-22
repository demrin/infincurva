<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <h1>INFINVIDEO</h1>
    <router-view></router-view>
    <hello></hello>
  </div>
</template>

<script>
  import hello from './pages/hello'
  export default {
    name: 'app',
    components: {
      hello
    }
  }
</script>

<style>
  #app {
    font-family: '中易黑体';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
