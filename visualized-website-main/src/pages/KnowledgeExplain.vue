
<script setup>
import '@/assets/css/knowledgegraph.css'
import KnowledgeBranch from '../components/KnowledgeBranch.vue'
</script>
<template>
  <div class="content">
    <div style="font-size:xx-large;text-align: center;">欢迎来到知识讲解部分</div>
    <div class="select">
      <div @click.native="toVideo">视频讲解</div>
      <router-link to="/GraphExplain" ><div @click="toGraph">图文讲解</div></router-link>
      <div @click="toVisualized">可视化</div>
    </div>
  </div>
</template>
<script>
export default{
    name:'App',
    components:{
        KnowledgeBranch 
    },
data(){
  return{
  }
},
toVideo(){
  alert("123");
},
created(){
  window.onhashchange=()=>{
    console.log(location.hash);
  }
}
}
</script>
<style scoped>
.graph1{
  position: absolute;
  left:400px;
  top:100px;
}
.graph2{
  position: absolute;
  left: 400px;
  top:500px;
}
.select div{
  width: 200px;
  height:200px;
  border-radius: 20px;
  line-height: 200px;
  text-align: center;
  font-size:larger;
  border:solid aqua 2px;
  display: inline-block;
  margin-right: 40px;
}
.select :nth-child(1){
  background-color: rgb(238, 255, 255);
}
.select :nth-child(2){
  background-color: rgb(234, 255, 235);
}
.select :nth-child(3){
  background-color: rgb(255, 253, 230);
}
.select :nth-child(1):hover{
  background: rgb(173, 252, 247);
}
.select :nth-child(2):hover{
  background: rgb(226, 255, 227);
}
.select :nth-child(3):hover{
  background: rgb(240, 255, 197);
  
}
.select{
  text-align: center;
  margin:50px auto;
}
</style>