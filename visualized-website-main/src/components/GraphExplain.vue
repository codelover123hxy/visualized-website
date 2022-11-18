<template>
    <div class="content">
       <h1>一、行列式的意义</h1>
       <p>行列式在数学中，是一个函数，其定义域为det的矩阵A，取值为一个标量，写作det(A)或 |A|。 </p>
       <h1>二、行列式的计算方法</h1>
       <h2>1.直接展开法</h2>
       <h2>2.余子式法</h2>
       <p>可按行或列展开，如图所示</p>
       <div style="text-align:center">
       <img src="../static/image/chapter1.jpg" style="height: 500px; width: 500px;" alt="">
       </div>
       <h1>三、行列式的性质</h1>

       <h1>四、范德蒙德行列式</h1>
       <div class="foot">
            下一章————线性方程组
        </div>
    </div>
    <router-link to="/Exam"><button class="isLearned">学会了</button></router-link> 
</template>

<script>
    import TheLatex2Math from './gs.vue'
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return{
               
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
.content{
    width: 1000px;
    height: 1000px;
    background-color: rgb(219, 255, 243);
    margin-left: 50%;
    transform: translate(-50%);
}
.loginbar{
        margin:30px auto;
        text-align: center;
        z-index: 10;
        height:500px;
        width:500px;
        border-radius: 20px;
        background-color: rgb(214, 255, 255);
        font-size: large;
        font-weight: 700;
    }
    .logintext{
        width: 300px;
        height: 40px;
        margin-top: 40px;
        border:solid 2px rgb(164, 255, 255);

        border-radius: 7px;
        opacity: 0.8;
        outline: none;
    }
    .logintext:first-child{
         margin-top: 0;
    }
    .textbox{
        position: absolute;
        top:100px;
        left:50%;
        transform: translate(-50%);
    }
    .btn{
        position: absolute;
        bottom:60px;
        text-align: center;
        left:50%;
        transform: translate(-50%);
    }

    .isLearned{
        position: fixed;
        bottom: 300px;
        right: 5%;
        background-color: rgb(188, 224, 255);
        border:none;
        width: 100px;
        height: 50px;
        border-radius: 10px;
        font-size: large;
    }
    .foot{
        display: absolute;
        text-align: center;
        font-size: large;
        bottom:0px;
    }
</style>