<script setup>
import Mybutton from '../components/Mybutton.vue'
import SelectBox from '../components/SelectBox.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
</script>
<template>
  <div class="content" >
    <div class="title" style="font-size: xx-large;">个人信息设置</div>
    <div style="font-size:larger;">用户名: <input type="text" name="" id=""></div>
    <div style="font-size:larger;">学习目的: 
        <select name="" id="">
            <option value="">复习期中/期末考</option>
            <option value="">考研</option>
            <option value="">兴趣爱好</option>
        </select>
    </div>
    <div style="font-size:larger;">已掌握的内容</div>
    <div v-for="(item,i) in name"  style="text-align:center">
      <SelectBox   v-bind:msg=item>{{i}}</SelectBox>
    </div>
    <Mybutton msg="保存"  style="text-align:center" @click="save"></Mybutton> 
  </div>
</template>
<script>
  export default{
    name:'App',
    components:{
      Mybutton,
      SelectBox
    },
    data(){
      return{
        name:['矩阵的概念','矩阵加减、数乘','矩阵乘除','向量','线性相关与无关'],
      }
    },
    methods:{
        save(){
            alert("已保存");
        }
    },
    created(){
      window.onhashchange=()=>{
        console.log(location.hash);
      }
    }
  }
</script>
<style scoped>
  .content{
    width: 1200px;
    height: 800px;
    background-image: linear-gradient(rgb(247, 226, 255),rgb(173, 201, 255)) ;
    text-align: center;
  }
</style>