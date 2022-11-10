
<script setup>
    import '@/assets/css/knowledgegraph.css'
    import KnowledgeBranch from '../components/KnowledgeBranch.vue'
</script>
<template >
  <div>
    <div style="font-size:xx-large;text-align: center;margin-top: 20px;z-index: 100;margin-left: 450px;">走进线性代数的神秘世界</div>

    <div class="selectbar" style="position:absolute;top:100px;left:350px">
          行列式
    </div>
    <div class="selectbar" style="position:absolute;top:400px;left:350px">
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
    left:700px;
    top:50px;
  }
  .graph2{
    position: absolute;
    left: 700px;
    top:450px;
  }
</style>