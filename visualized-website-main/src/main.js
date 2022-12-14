import { createApp, VueElement } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from'./router'


import './assets/main.css'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
 
import locale from 'element-plus/lib/locale/lang/zh-cn'
createApp(App).use(router).use(ElementPlus, { locale }).mount('#app')
