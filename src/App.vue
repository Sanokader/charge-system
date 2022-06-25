<template>
  <div>
    <ControlMain></ControlMain>
  </div>
</template>

<script>
// import ControlLogin from "./views/ControlLogin.vue";
import ControlMain from "./views/ControlMain.vue";

export default {
  name: "App",
  components: {
    ControlMain,
  },
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
