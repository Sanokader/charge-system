<template>
  <div class="container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Username" prop="username">
        <el-input
          v-model="form.username"
          placeholder="Please input username here"
        ></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input
          v-model="form.password"
          placeholder="Please input password here"
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
export default {
  name: "ControlForm",
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
    onSubmit() {
      axios.get("127.0.0.1:4000/user/");
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
