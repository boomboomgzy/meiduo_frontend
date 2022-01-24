<template>
    <div id="login">

            <div class="login_top clearfix">
                <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>	
                </div>
                <div class="login_form_bg">
                    <div class="login_form_wrap clearfix">
                        <div class="login_banner fl"></div>
                        <div class="slogan fl">商品美 · 种类多 · 欢迎光临</div>
                        <div class="login_form fr">
                            <div class="login_title clearfix">
                                <a href="javascript:;" class="cur">账户登录</a>
                            </div>
                            <div class="form_con">
                                <div class="form_input cur">
                                    <form >
                                        <input type="text" name="username" class="name_input" placeholder="请输入用户名" v-model='username'>
                                        <!-- <div class="user_error">输入错误</div> -->
                                        <input type="password" name="pwd" class="pass_input" placeholder="请输入密码" v-model='password'>
                                        <!-- <div class="pwd_error">输入错误</div> -->
                                        <div class="more_input clearfix">
                                            <input type="checkbox" name="">
                                            <label>记住登录</label>
                                            <!-- <a href="/find_password.html">忘记密码</a> -->
                                            <router-link to="/find_password">忘记密码</router-link>
                                        </div>
                                        <input type="button" name="" value="登 录" class="input_submit" @click='denglu'>
                                        <!-- <input type="button" name="" value="校 检" class="input_submit" @click='jiaojian'> -->
                                    </form>
                                </div>
                            </div>
                            <div class="third_party">
                                <a href="#" class="qq_login">QQ</a>
                                <a href="#" class="weixin_login">微信</a>
                                <a :href="get_weibo_url" class="qq_login">微博</a>
                                
                                <router-link to="/register" class="register_btn">立即注册</router-link>
                            </div>
            
                        </div>
                    </div>
                </div>
            
                <div class="footer no-mp">
                    <div class="foot_link">
                        <a href="#">关于我们</a>
                        <span>|</span>
                        <a href="#">联系我们</a>
                        <span>|</span>
                        <a href="#">招聘人才</a>
                        <span>|</span>
                        <a href="#">友情链接</a>		
                    </div>
                    <p>CopyRight © 2016 北京美多商业股份有限公司 All Rights Reserved</p>
                    <p>电话：010-****888    京ICP备*******8号</p>
                </div>
    </div>
</template>
<style>
        @import "../../static/css/reset.css";
        @import "../../static/css/main.css";
</style>

<script>
    document.title = "登录页面"
    import axios from "axios"    //导入axios
    export default{
        data:function(){
            return{
                username:'',
                password:'',
                get_weibo_url:'',

            }
        },

        mounted(){
            this.getweibo_url()
        },
        methods:{
            denglu:function(){
                var r = this.$router
                let zipFormData = new URLSearchParams();
                zipFormData.append('username',this.username)
                zipFormData.append('password',this.password)
                axios({
                    method:'post',
                    url:'http://127.0.0.1:8000/login/',
                    data:zipFormData
                }).then(res=>{
                    console.log(res)
                    localStorage.clear()  //清空本地储存区域
                    sessionStorage.clear() //清空session区域
                    localStorage.username = res.data.username
                    localStorage.token = res.data.token  //
                    localStorage.user_id = res.data.user_id  
                    r.push({'path':"/index"})

                }).catch(function(error){
                    console.log(error)
                    alert('用户名或密码错误')
                })

            },
            //微博登录
            getweibo_url:function(){
                axios({
                    url:'http://127.0.0.1:8000/api/weibo_url/',
                    method:'get'

                }).then(res=>{
                    this.get_weibo_url = res.data.weibo_url

                })
            },


        }
    }


</script>