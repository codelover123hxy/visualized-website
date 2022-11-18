import { createApp, VueElement } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from'./router'
import MathJax from '../MathJax.js' 

import './assets/main.css'

createApp(App).use(router).mount('#app')
