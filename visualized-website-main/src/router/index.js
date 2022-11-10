// import Vue from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Mybutton from '../components/Mybutton.vue'
import KnowledgeGraph from '../pages/KnowledgeGraph.vue'
import Home from '../pages/Home.vue'
import Login from '../components/Login.vue'
const routes=[
        {path:'/Mybutton',component:Mybutton},
        {path:'/KnowledgeGraph',component:KnowledgeGraph},
        {path:'/Home',component:Home},
        {path:'/Login',component:Login}
    ]
const router=createRouter({
    routes,
    history:createWebHashHistory()
})
export default router

