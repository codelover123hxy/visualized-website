<script setup>
import Home from './pages/Home.vue';
import KnowledgeGraph from './pages/KnowledgeGraph.vue';
import Topbar from './components/Topbar.vue';
import Login from './components/Login.vue';
</script>
<template>
  <div id="app">
      <!-- <Login></Login> -->
      <Topbar></Topbar>
      <router-view style="position:absolute;top:8%"></router-view>
  </div>
</template>
<script>
</script>
<style scoped>
  #app{
    width: 100%;
  }
</style>