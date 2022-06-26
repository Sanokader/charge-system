<template>
  <div class="container">
    <h1>What Would You Like to Manage?</h1>
    <router-link to="/usercontrol" class="link">Users</router-link>
    <router-link to="/pilecontrol" class="link">Piles</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  name: "ControlMain",
  components: {  },
};
</script>

<style>
.link{
  background-color: aquamarine;
  font-size: larger;
  margin-bottom: 50px;
  margin-top: 70px;
  text-decoration: none;
}
</style>
