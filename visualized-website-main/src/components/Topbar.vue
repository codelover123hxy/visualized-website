<template>
    <div class="banner" style="display:flex;;">
        <!-- <div v-for="(item,index) in topbar" class="topbar" @click="toNavigate">
            {{item}}
        </div> -->   
        <div style="margin:0 auto">
        <router-link to="/Home" class="topbar">首页</router-link>
        <router-link to="/KnowledgeGraph" class="topbar">知识图谱</router-link>
        <router-link to="/KnowledgeGraph" class="topbar">知识讲解</router-link>
        <router-link to="/Home" class="topbar">基础设置</router-link>
        </div>
    </div>
</template>
<script>
    import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
    import Home from '../pages/Home.vue';
    export default{
        name:"Topbar",
        data(){
            return{
                topbar:['首页','知识图谱','知识讲解','基础设置']
            }
        },
        toNavigate(){
            return;
        }
    }
</script>

<style scoped>
    .banner{
        margin: 0 auto;
        height:8%;
        width:1200px;
        background-color: rgb(218, 188, 247);
    }
    .topbar{
        margin-left: 60px;
        font-size:xx-large ;
        color:black;
    }
</style>