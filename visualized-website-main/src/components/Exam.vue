<template>
    <div class="content" style="text-align:center">
        <div class="title" style="text-align:center">
            下面线性代数行列式章节测试
            限时20min    
            <el-button type="primary" @click="start" round>开始考试</el-button>
            <el-button type="danger" round @click="stop">暂停考试</el-button>
            <el-button type="primary" @click="submit" round>提交试卷</el-button>
            <div>1.已知A=(1 1 1 1)>
            1 2 0 0 <br>
            1 0 3 0 <br>
            1 0 0 4          求|A|
            </div> 
            
            <option value=""></option>


          <p style="text-align:center">剩余时间:{{minute}}分{{second}}秒</p> 
        </div>
   
    </div>
</template>

<script>
import { vModelCheckbox } from 'vue'
import TheLatex2Math from './gs.vue'
var time;
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
               minute:20,
               second:0,
               score:''
            }
        },
        methods:{
          start(){
            // var a=document.getElementsByClassName("title");
            
            // var e =document.createElement("input");
            // e.type="button";
            // e.value="你好"

            let that=this;
            time=setInterval(function(){
                if (that.$data.minute==0&&that.$data.second==0){
                  alert("考试结束!");
                }
                else if (that.$data.second==0){
                  that.$data.minute--;
                  that.$data.second=60;
                }
                that.$data.second--;
            },1000)
          },
          stop(){
            clearInterval(time);
          },
          submit(){

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