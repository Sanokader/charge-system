<template>
<div class="container">
    <h1>Manage Users Here</h1>
    <el-scrollbar height="400px">
        <p v-for="item in items" :key="item._id" class="scrollbar-demo-item">{{ item.username }}
            <el-button type="primary" size="small" class="btn" @click="showDetail(item.username)">Detail</el-button>
            <el-button type="danger" size="small" class="btn" @click="deleteUser(item.username)">Delete</el-button>
        </p>
    </el-scrollbar>
</div>
</template>

<script>
import axios from 'axios';

export default {
    name:'UserControl',
    data(){
        return{
            items:[],
        }
    },
    methods:{
        showDetail(value){
            const target = this.items.filter(item=>item.username==value);
            alert("user:"+target[0].username + "###password"+target[0].password)
        },
        update(){
axios.get('/users')
        .then((raw)=>{
            this.items = raw.data.users.map((item)=>{
                return item;
            })
        })
        },
        async deleteUser(value){
            const target = this.items.filter(item=>item.username==value);
            await axios.get(`/users/deleteOne?username=${target[0].username}&adminname=xiaominwei`)
            .then((data) => {
              console.log(data);
              alert(data.data+"has been deleted")
              this.update();
            });
        }
    },

    created(){
        this.update()
    }
}
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.container{
    width: 1500px;
}
.btn{
    margin-left: 50px;
}
</style>