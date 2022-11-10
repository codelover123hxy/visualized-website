<template>
    <div class="loginbar"  >
        <input type="text" name="" id="" class="logintext" placeholder="用户名:"> <br>
        <input type="password" name="" id="" class="logintext" placeholder="密码:">
        <div style="display:flex;margin-top: 7%;margin-left: 24%;" >  
            <Mybutton msg="登录"></Mybutton>
            <Mybutton msg="取消" style="margin-left: 30px;"></Mybutton>
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
    import Mybutton from '../components/Mybutton.vue'
</script>

<style scoped>
    
    .loginbar{
        position: fixed;
        left:40%;
        top:30%;
        text-align: center;
        z-index: 10;
        height:60%;
        width:40%;
        border-radius: 20px;
        background-color: rgb(226, 253, 253);
        font-size: large;
        font-weight: 700;
    }
    .logintext{
        margin-top: 10%;
        width: 60%;
        height:11%;
        border:none;
        opacity: 0.8;
        outline: none;
    }
</style>