<template>
<div class="container">
    <h1>Manage Piles Here</h1>
    <el-scrollbar height="400px">
        <p v-for="item in items" :key="item._id" class="scrollbar-demo-item">{{ item._id }}
            <!-- <el-button type="primary" size="small" class="btn" @click="showDetail(item.username)">Detail</el-button>
            <el-button type="danger" size="small" class="btn" @click="deleteUser(item.username)">Delete</el-button> -->
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
            // console.log(this.items);
            alert("user:"+target[0].username + "###password"+target[0].password)
        },
        deleteUser(){
            
        }
    },

    created(){
        axios.get('/charges')
        .then((raw)=>{
            console.log(raw);
            this.items = raw.data.places.map((item)=>{
                return item;
            })
        })
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