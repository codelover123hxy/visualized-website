
<script setup>
import '@/assets/css/knowledgegraph.css'
import KnowledgeBranch from '../components/KnowledgeBranch.vue'
</script>
<template>
<div style="font-size:xx-large;text-align: center;">走进线性代数的神秘世界</div>
<div class="selectbar" style="margin:0 auto">
    行列式
</div>
<div class="selectbar" style="margin:0 auto">
    线性方程组
</div>
<div class="graph1">
<template v-for="(item,index) in determinant" >
  <KnowledgeBranch  v-bind:msg=item>{{item}}</KnowledgeBranch> 
</template>
</div>
<div class="graph2">
<template v-for="(item,index) in linear" >
  <KnowledgeBranch  v-bind:msg=item>{{item}}</KnowledgeBranch>
</template>
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
    determinant:['n阶行列式','行列式的计算','行列式展开','cramer法则'],
    linear:['解的判定定理','解的结构'],
    isShow1:'',
    isShow2:''
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
</style>