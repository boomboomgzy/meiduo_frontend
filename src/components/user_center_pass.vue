<template>
        <div>
            
        
            <Header></Header>
    
        <div class="search_bar clearfix">
                <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>
            <div class="sub_page_name fl">|&nbsp;&nbsp;&nbsp;&nbsp;用户中心</div>
            <div class="search_con fr mt40">
                <input type="text" class="input_text fl" name="" placeholder="搜索商品">
                <input type="button" class="input_btn fr" name="" value="搜索">
            </div>		
        </div>
    
        <div class="main_con clearfix">
            <div class="left_menu_con clearfix">
                <h3>用户中心</h3>
                <ul>
                    <li><router-link to="/user_center_info">个人信息</router-link></li>
                            
                    <li><router-link to="/order">全部订单</router-link></li>
                    <li><router-link to="/user_center_site">收货地址</router-link></li>
                    <li><router-link to="/user_center_pass">修改密码</router-link></li>
                    
                </ul>
            </div>
            <div class="right_content clearfix">
                    <div class="info_con clearfix">
                    <h3 class="common_title2">修改密码</h3>
                    <div class="site_con pass_change_con">			
                        <form>
                            <div class="form_group">
                                <label>当前密码：</label>
                                <input type="password" name="" v-model='old_password'>
                            </div>
                            <div class="form_group">
                                <label>新密码：</label>
                                <input type="password" name="" v-model='new_password'>
                            </div>
                            
                            <input type="button" name="" value="确 定" class="info_submit" @click='update_pwd'>
                        </form>
                </div>
                    </div>
            
            </div>
            </div>
        
    
    
    
        <div class="footer">
            <div class="foot_link">
                <a href="#">关于我们</a>
                <span>|</span>
                <a href="#">联系我们</a>
                <span>|</span>
                <a href="#">招聘人才</a>
                <span>|</span>
                <a href="#">友情链接</a>		
            </div>
            <p>CopyRight ? 2016 北京美多商业股份有限公司 All Rights Reserved</p>
            <p>电话：010-****888    京ICP备*******8号</p>
        </div>
    </div>
    </template>
    
    
    <style>
            @import "../../static/css/reset.css";
            @import "../../static/css/main.css";
            </style>
    
<script>
import axios from 'axios';
import Header from './header'
export default{
    components:{
        'Header':Header

    },
    data:function(){
        return{
            old_password:'',
            new_password:'',
        }
    },
    mounted(){
        this.check_jwt_token()
    },
    //修改密码
    methods:{
        update_pwd:function(){
            let zipFormData = new FormData(); 
            zipFormData.append('old_password',this.old_password)
            zipFormData.append('new_password',this.new_password)
            axios({
                url:'http://127.0.0.1:8000/api/up_pwd/',
                method:'post',
                data:zipFormData,
                headers:{
                    'Authorization': 'JWT ' + localStorage.token,
                }
            }).then(res=>{
                alert('修改成功，请重新登录')
                this.$router.push({'path':'/login'})

            }).catch(error=>{

            })

        },
        //判断有没有token，如果没有token直接进修改路由页面会闪一下直接跳到登录页面
        check_jwt_token(){
            let token = localStorage.token
            let form_data = new FormData();
            form_data.append('token',token)
            axios({
                url:'http://127.0.0.1:8000/verify/',
                method:'post',
                data:form_data,

            }).then(res=>{

            }).catch(error=>{
                this.$router.push({'path':'/login'})
            })
        },

    }
}


</script>