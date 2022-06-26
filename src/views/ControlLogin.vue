<template>
  <div class="container">
    <h1>Login as Super User</h1><br/>
    <el-form :model="form" label-width="120px">
      <el-form-item label="Username" prop="username">
        <el-input
          v-model="form.username"
          placeholder="username here"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input
          v-model="form.password"
          placeholder="password here"
          type="password"
          show-password
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import router from "@/router";
export default {
  name: "ControlLogin",
  data() {
    const form = reactive({
      username: "",
      password: "",
    });
    return {
      form,
    };
  },

  methods: {
    async onSubmit() {
      await axios.get(`/users/login?username=${this.form.username}&password=${this.form.password}`)
      .then((data)=>{
        if(data.data==="error"){
          console.log(data);
          router.replace('/controllogin');
          alert('Validation Failed')
        }
        else{
        router.push('/controlmain')
        console.log(data);
        }
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
