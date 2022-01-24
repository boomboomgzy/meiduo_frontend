<template>
    
    <div class="register_con">
            <div class="l_con fl">
                <a class="reg_logo">
                <img src="../../static/images/logo.png">
                </a>
                <div class="reg_slogan">商品美 · 种类多 · 欢迎光临</div>
                <div class="reg_banner"></div>
            </div>
        
            <div class="r_con fr">
                <div class="reg_title clearfix">
                <h1>第三方用户首次登陆绑定</h1>
                <router-link to="/login">登录</router-link>
                </div>
                <div class="reg_form clearfix" id="app" v-cloak>
                <form>
                    <ul>
                    <li>
                        <label>用户名:</label>
                        <input type="text" name="user_name" id="user_name" @blur="usersid"  v-model="username">
                        <span v-show="error_name" v-model='user_true' class="error_tip">{{error_name_message}}</span>
                    </li>
                    <li>
                        <label>密码:</label>
                        <input type="password" name="pwd" id="pwd"  v-model='password'>
                        <!-- <span v-show="error_password" class="error_tip">{{erroe_pas}}</span> -->
                    </li>
                    <li>
                        <label>确认密码:</label>
                        <input type="password" name="cpwd" id="cpwd" v-model='password2'>
                        <!-- <span v-show="error_check_password" class="error_tip">{{erroe_pas2}}</span> -->
                      </li>
                    
                    
                    
                    
                    
                    <li class="reg_sub">
                        <input type="button" value="绑定登录" @click="banguser">
                        <!-- <span v-show="zhuce_e" class="error_tip2">{{zhuce_error}}</span> -->
                        
                    </li>
                    </ul>
                </form>
                </div>
            </div>
            </div>

</template>
<style>
        @import "../../static/css/reset.css";
        @import "../../static/css/main.css";
        </style>
<script>
document.title = "第三方用户首次登陆绑定页面";
import axios from "axios";
export default{
    data: function(){
        return{
            username:'',
            password:'',
            password2:'',
            error_name:false,
            error_name_message:'',
            user_true:false,



        }
    },
    methods:{
        banguser:function(){
            if(this.user_true==true){
            var r = this.$router
            let post_data = new FormData();  //生成一个容器
            let access_token = localStorage.access_token; //拿access_token去微博获取信息
            post_data.append('username',this.username)
            post_data.append('password',this.password)
            post_data.append('password2',this.password2)
            post_data.append('access_token',access_token)
            axios({
                url:'http://127.0.0.1:8000/api/bang_user/',
                method:'post',
                data:post_data,
            }).then(res=>{
                var code = res.data.code
                if(code==201){
                    alert(res.data.mes)
                }else{
                    // 将返回的 token,username,user_id保存，登录成功
                    console.log(res.data)
                    localStorage.clear() // 清空本地存储区域
                    sessionStorage.clear() // 清空session区域
                    localStorage.username = res.data.username
                    localStorage.token = res.data.token
                    localStorage.user_id = res.data.user_id
                    r.push({'path':"/index"})
                }
                
            }).catch(error=>{
                console.log(error)
            }
            )

            }else{
                alert('绑定失败,已有此用户')
            }
            

        },
        usersid:function(){
            var r = this.$router
            let zipFormData = new URLSearchParams();
            zipFormData.append('userid',this.username)
            
            axios({
                method:'post',
                url:'http://127.0.0.1:8000/api/user_u/',
                data:zipFormData

            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    this.error_name=true
                    this.user_true=true
                    this.error_name_message=res.data.mes

                }else{
                    this.error_name=true
                    
                    this.error_name_message=res.data.mes
                    
                    



                }

            }).catch(function(error){
                console.log(error)
            })

        },

    }
}


</script>