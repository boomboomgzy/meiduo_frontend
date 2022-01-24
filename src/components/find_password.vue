<template>
    <div>
            <div class="find_header">
                    <img src="../../static/images/logo.png">
                    <span class="sub_page_name fl">|&nbsp;&nbsp;&nbsp;&nbsp;找回密码</span>
                </div>
                <div>
                <div>
                        <label>输入邮箱：</label>
                        <input type="text" v-model='email_pwd'>
                        <span class="error"></span>
                        <button @click='email_sub'>提交</button>
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
document.title = "找回密码";
import axios from "axios";
export default{
    data:function(){
        return{
            email_pwd:'',
        }
    },
    methods:{
        email_sub:function(){
            let post_data = new FormData()
            post_data.append('email_pwd',this.email_pwd)
            axios({
                method:'post',
                url:'http://127.0.0.1:8000/api/email_password/',
                data:post_data
            }).then(res=>{
                alert('请到邮箱修改密码')

                this.$router.push({'path':"/login"})



            }).catch(function(error){

            })
        },
    }
}


</script>