<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import ControlLogin from './views/ControlLogin.vue';
import router from './router';
export default {
  name: "App",
  components: {
  },

  created(){
    router.push('/controllogin')
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
