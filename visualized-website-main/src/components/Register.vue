<template>
    <div class="loginbar"  >
        <div class="textbox">
        <input type="text" name="" id="" class="logintext" v-model="userName" placeholder="用户名:"> 
        <input type="password" name="" id="" class="logintext" v-model="pwd" placeholder="密码:">
        <input type="password" name="" id="" class="logintext" v-model="repwd" placeholder="重复密码:">
        </div>
        <div class="tip" @click="toLogin">已有账号,去登录</div>
        <div class="btn" >  
            <Mybutton msg="注册" style="display:inline;" @click="register"></Mybutton>
        </div>
    </div>
   
</template>

<script>
    export default{
        name:"Login",
        props:{
           msg:String
        },
        data(){
            return {
                userName:'',
                pwd:'',
                repwd:''
            }
        },
        methods:{
            toLogin(){
                this.$router.push({
                        path:'Login'
                })
            },
            register(){
                
            }
        },
        components:{
          Mybutton  
        }
    }
    import Mybutton from './Mybutton.vue'
</script>

<style scoped>
.tip{
    position: absolute;
    bottom: 150px;
    left:50%;
    transform: translate(-50%);
    cursor: pointer;
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
    margin-top: 30px;
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