<template>
    <div class="content">
        <div class="title" style="text-align:center">
            下面线性代数行列式章节测试
            限时20min
        </div>
        <button class="start" @click="start">开始考试</button>
        剩余时间:{{minute}}分{{second}}秒
    </div>
</template>

<script>
    import { vModelCheckbox } from 'vue'
import TheLatex2Math from './gs.vue'
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
               minute:20,
               second:0
            }
        },
        methods:{
          
          start(){
            let that=this;
            var time=setInterval(function(){
                if (that.$data.second==0){
                  that.$data.minute--;
                  that.$data.second=60;
                }
                that.$data.second--;
            },1000)
          },
          stop(){
            clearInterval(time);
          }
        },
        components:{
          Mybutton  ,
          TheLatex2Math
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>

</style>