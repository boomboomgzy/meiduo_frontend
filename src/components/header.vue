<template>
    <div>
        <div class="header_con">
            <div class="header">
                <div class="welcome fl">欢迎来到美多商城!</div>
                <div class="fr">
                    <!-- <div class="login_info fl" v-show='show_user'>
                        
                    </div> -->
                    <div class="login_btn fl" v-show='show_login'>
                        
                        <router-link to="/login">登录</router-link>
                        <span>|</span>
                        
                        <router-link to="/register">注册</router-link>
                    </div>
                    <div class="user_link fl" v-show="show_user">
                        欢迎您：<em>{{login_name}}</em>
                        <a href="javascript:;" class="quit" @click='out'>退出</a>
                        <span>|</span>
                        
                        <router-link to="/user_center_info">用户中心</router-link>
                        <span>|</span>
                        <!-- <a href="cart.html">我的购物车</a> -->
                        <router-link to="/cart">我的购物车</router-link>
                        <span>|</span>
                        
                        <router-link to="/order">我的订单</router-link>
                    </div>
                </div>
            </div>		
        </div>
    </div>


</template>
<style>
        @import "../../static/css/reset.css";
        @import "../../static/css/main.css";
</style>

<script>
    document.title = "商品首页"
    import axios from "axios"    //导入axios
    export default{
        data:function(){        
            return{
                show_user:false,
                show_login:true,
                login_name:'',

            }
        }, 
        mounted(){
        var r = this.$router
        let login_name = localStorage.username
        if(login_name){
            this.login_name = login_name
            this.show_user = true
            this.show_login = false
        }else{
            this.show_user = false
            this.show_login = true
        }
            
        },
        methods:{
            out:function(){
                var r = this.$router
                localStorage.clear()
                r.push({'path':'/login'})
            },
        }
        
       
    }


</script>