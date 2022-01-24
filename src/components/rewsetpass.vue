<template>
        <div>
                <div class="find_header">
                        <img src="../../static/images/logo.png">
                        <span class="sub_page_name fl">|&nbsp;&nbsp;&nbsp;&nbsp;找回密码</span>
                    </div>
                    <div>
                    <div>
                            <label>输入新密码：</label>
                            <input type="password" v-model='news_password'>
                            <span class="error"></span>
                            <button @click='update_sub'>修改密码</button>
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
import axios from 'axios'    
export default{
    data:function(){
        return{
            news_password:'',

            

        }
    },
    methods:{
        update_sub:function(){
            
            let token =  this.$route.query.token
            let post_data = new FormData()
            post_data.append('password',this.news_password)
            post_data.append('token',token)
            axios({
                url:'http://127.0.0.1:8000/api/reset_pass/',
                method:'post',
                data:post_data,
            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    alert('修改密码成功')
                    console.log(res)
                    this.$router.push({'path':"/login"})
                }else{
                    alert('不能为空')

                }
                
            }).catch(function(error){
                

            })
        }

    }
}


</script>