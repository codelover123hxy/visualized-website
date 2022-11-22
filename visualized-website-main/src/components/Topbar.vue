<template>
    <div class="banner">
        <div style="text-align:center;position:relative">
            <router-link to="/Home" class="topbar">首页</router-link>
            <router-link to="/KnowledgeGraph" class="topbar">知识图谱</router-link>
            <router-link to="/KnowledgeExplain" class="topbar">知识讲解</router-link>
            <router-link to="/Setting" class="topbar">基础设置</router-link>
            <span class="user" >
                用户名
            </span>
            <router-link to="/Login" class="login">登录</router-link>
            <router-link to="/Register" class="register">注册</router-link>
        </div>
        
    </div>
</template>
<script>
    import KnowledgeGraph from '../pages/KnowledgeGraph.vue';
    import Home from '../pages/Home.vue';
    import Login from '../components/Login.vue';
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
        height:60px;
        width: 1200px;
        background-color: rgb(238, 220, 255);
    }
    .topbar{
        margin-left: 60px;
        font-size:xx-large ;
        color:black;
    }
    .topbar:first-child{
        margin-left: 0;
    }

    *{
        margin:0;
    }
    .user{
        position:absolute;
        right:10px;
        border-radius: 25px;
        width: 50px;
        height:50px;
        border: solid 1px black;
        cursor: pointer;
        line-height: 50px;
    }
    .login{
        position:absolute;
        right:150px;
        line-height: 60px;
        cursor: pointer;
        color: black;
       
    }
    .register{
        position:absolute;
        right:100px;
        line-height: 60px;
        cursor: pointer;
        color: black;
    }
    .login:hover{
        background-color:  rgb(238, 220, 255);
    }
    .register:hover{
        background-color:  rgb(238, 220, 255);
    }
</style>