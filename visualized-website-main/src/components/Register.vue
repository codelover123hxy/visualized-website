<template>
    <div class="loginbar"  >
        <div class="textbox">
        <input type="text" name="" id="" class="logintext" placeholder="用户名:"> 
        <input type="password" name="" id="" class="logintext" placeholder="密码:">
        </div>
        <div class="btn" >  
            <Mybutton msg="注册" style="display:inline;"></Mybutton>
        </div>
    </div>
   
</template>

<script>
    export default{
        name:"Login",
        props:{
           msg:String
        },
        components:{
          Mybutton  
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>
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
        border:none;
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
</style>