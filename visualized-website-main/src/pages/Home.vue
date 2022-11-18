<script setup>
import Mybutton from '../components/Mybutton.vue'
import SelectBox from '../components/SelectBox.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
</script>
<template>
  <div class="content" >
    <div class="title" style="text-align:center;font-size: xx-large;">欢迎来到线性代数可视化教学平台</div>
    <img src="../static/image/Aiyin.jpg" style="height:120px;margin: 0 auto;border-radius: 60px;"  alt="">
    <div style="text-align:center;font-size: x-large;">以下线代内容学会了吗?</div>
    <div v-for="(item,i) in name"  style="text-align:center">
      <SelectBox   v-bind:msg=item>{{i}}</SelectBox>
    </div>
    <router-link to="/KnowledgeGraph" style="background-color:lightgoldenrodyellow"> <Mybutton msg="开始学习"  style="text-align:center" @click="gotoLearn"></Mybutton> </router-link>
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