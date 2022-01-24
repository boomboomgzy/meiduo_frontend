<template>
    <h1>正在跳转。---------</h1>

</template>


<script>
import axios from 'axios'   
export default{
    mounted(){
        this.get_code()

    },
    methods:{
        get_code:function(){
            var r = this.$router
            let code = this.$route.query.code  //从连接中取出code值
            console.log(code)   //code=43b70f204d595672e2cc3049b46f8795
            axios({
                url:'http://127.0.0.1:8000/api/weibo_back/?code='+code,
                method:'get',
            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    console.log('ok')
                    localStorage.username = res.data.username
                    localStorage.user_id = res.data.user_id
                    localStorage.token = res.data.token
                    // window.location.href = '/#/index'  //跳转到主页
                    r.push({"path":"/index"})

                }
                if(code==201){
                    console.log('没有UID,进入用户绑定页面')
                    localStorage.access_token = res.data.response
                    // window.location.href = '/#/userbind'  //跳转用户绑定界面
                    r.push({"path":"/userbind"})
                }
            }).catch(error=>{
                console.log(error)
            }
            
            )
        }
    } 
}
</script>