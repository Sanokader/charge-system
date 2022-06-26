<template>
<div class="container">
    <h1>Manage Piles Here</h1>
    <el-collapse>
      <el-collapse-item v-for="item in items" :key="item._id" :title="item._id">
        <div>
            latitude:{{item.latitude}}
        </div>
        <div>
            longitude:{{item.longitude}}
        </div>
        <div>
            status:{{item.status}}
        </div>
        <div>
            maxpower:{{item.maxpower}}
        </div>
        <div>
            price:{{item.price}}
        </div>
      </el-collapse-item>

    </el-collapse>
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