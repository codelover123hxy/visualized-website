<template>
    <div class="loginbar"  >
        <div class="textbox">
        <input type="text" name="" id="" class="logintext"  v-model="userName" placeholder="用户名" > 
        <input type="password" name="" id="" class="logintext" v-model="pwd" placeholder="密码">
        </div>
        <div @click="toRegister" class="tip">没有账号,去注册</div>
        <div class="btn" >  
            <Mybutton msg="登录" style="display:inline;" @click="login"></Mybutton>
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
            return{
                userName:'',
                pwd:''
            }
        },
        components:{
          Mybutton  
        },
        methods:{
            login(){
                let userName=this.$data.userName;
                let pwd=this.$data.pwd;
                if (userName=="123456"&&pwd=="123456"){
                    alert("登录成功");
                    this.$router.push({
                        path:'Home'
                    })
                }
            },
            toRegister(){
                this.$router.push({
                        path:'Register'
                })
            }
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
</style>