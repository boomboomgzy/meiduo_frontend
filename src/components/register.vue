<template>
  <div class="register_con">
    <div class="l_con fl">
      <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>
      <div class="reg_slogan">商品美 · 种类多 · 欢迎光临</div>
      <div class="reg_banner"></div>
    </div>

    <div class="r_con fr">
      <div class="reg_title clearfix">
        <h1>用户注册</h1>
        <router-link to="/login">登录</router-link>
      </div>
      <div class="reg_form clearfix" id="app" v-cloak>
        <form>
          <ul>
            <li>
              <label>用户名:</label>
              <input type="text" name="user_name" id="user_name" @blur="usersid"  v-model="user">
              <span v-show="error_name" class="error_tip">{{error_name_message}}</span>
            </li>
            <li>
              <label>密码:</label>
              <input type="password" name="pwd" id="pwd" @blur='password' v-model='passw'>
              <span v-show="error_password" class="error_tip">{{erroe_pas}}</span>
            </li>
            <li>
              <label>确认密码:</label>
              <input type="password" name="cpwd" id="cpwd" @blur='password2' v-model='passw2'>
              <span v-show="error_check_password" class="error_tip">{{erroe_pas2}}</span>
            </li>
            <li>
              <label>手机号:</label>
              <input type="text" name="phone" id="shouji" @blur='mob' v-model='mobile'>
              <span v-show="error_shouji" class="error_tip">{{ error_shsouji_message }}</span>
            </li>
            <li>
              <label>邮箱:</label>
              <input type="text" name="phone" id="phone" v-model='qq_youxiang'>
              <span v-show="error_phone" class="error_tip">{{ error_phone_message }}</span>
            </li>
            <li>
              <label>图形验证码:</label>
              <!-- @blur 焦点移除 -->
              <input
              
                @blur="check_image_code"
                v-model="image_code"
                type="text"
                name="pic_code"
                id="pic_code"
                class="msg_input"
              >
              <img :src="image_code_url" @click="generate_image_code" alt="图形验证码" class="pic_code">
              <span v-show="image_code_status" class="error_tip">{{ image_code_message }}</span>
            </li>
            <li>
              <label>邮箱验证码:</label>
              <input type="text" name="msg_code" id="msg_code" class="msg_input" @blur='yan' v-model='yanzhengma'>
              <a class="get_msg_code" @click="youx" v-show='huoqu'>点击获取邮箱验证码</a>
              <!-- <button type="submit" style="height:40px;width:120px"  @click="youx" v-show='huoqu'>获取邮箱验证码</button> -->
              <a style="height:40px;font-size:30px" v-show='miao'>{{jishi}}</a>
              <span v-show="error_sms_code" class="error_tip">{{ error_sms_code_message }}</span>
            </li>
            <li class="agreement">
              <input type="checkbox" name="allow" id="allow" checked="checked" v-model='gouxuan' @click="dian">
              <label>同意”美多商城用户使用协议“</label>
              <span v-show="error_allow" class="error_tip2">{{gouxuan_error}}</span>
            </li>
            <li class="reg_sub">
              <input type="button" value="注 册" name @click="zhuce">
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
document.title = "注册页面";
import axios from "axios";
export default {
  data: function() {
    // 存储变量
    return {
      image_code: "",
      image_code_url: "",
      image_code_uuid: "",
      image_code_status: false,
      image_code_message: '',
      user:'',   //绑定用户
      error_name:false,  //隐藏为false
      error_name_message:'',   //提示的变量
      passw:'',   //绑定密码
      error_password:false, 
      erroe_pas:''   ,    //密码变量的提示
      passw2:'',   //绑定确认密码
      error_check_password:false,
      erroe_pas2:'',  //确认密码变量的提示
      qq_youxiang:'',  //绑定邮箱
      yanzhengma:'',    //输入的验证码
      error_sms_code:false,
      error_sms_code_message:'',
      error_phone:false,
      error_phone_message:'',
      mobile:'',        //手机号
      error_shouji:false,
      error_shsouji_message:'',
      gouxuan:0,     //点击勾选
      error_allow:false,
      gouxuan_error:'',
      miao:false,    //计时
      jishi:'',
      huoqu:true,
      zhuce_e:false,  //注册
      zhuce_error:'',  






    };
  },
  methods: {
    generate_uuid: function() {
      // 在浏览器生成UUID值
      var d = new Date().getTime();
      if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
      }
      var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function(c) {
          var r = (d + Math.random() * 16) % 16 | 0;
          d = Math.floor(d / 16);
          return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
        }
      );
      return uuid;
    },
    generate_image_code: function() {
      // 将uuid值生成后 拼接到图片的src属性部分
      this.image_code_uuid = this.generate_uuid();
      this.image_code_url =
        "http://127.0.0.1:8000/api/" +
        "image_code/" +
        this.image_code_uuid +
        "/";
    },
    check_image_code: function() {
      let post_data = new URLSearchParams()
      post_data.append('image_code',this.image_code)
      axios({
        method: "post", // 以post方式访问接口
        url: this.image_code_url,
        data: post_data, // 提交参数是表单输入的验证码值
      })
        .then( result => { 
          console.log(result.data.code)
          // result后台返回的数据结果
          if (result.data.code == 200) {
            this.image_code_status = true
            this.image_code_message = '验证码输入正确'
          }else{
            this.image_code_message = '验证码输入错误'
          }
          
        })
        .catch(function(result) {});
    },
    //用户名
    usersid:function(){
      let zipFormData = new URLSearchParams();
      zipFormData.append('userid',this.user)
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/user_u/',
        data:zipFormData

      }).then(res=>{
        var code = res.data.code
        if(code==200){
          this.error_name = true
          this.error_name_message = res.data.mes
        }else{
          this.error_name = true
          this.error_name_message = res.data.mes
        }
      }).catch(function(error){
        console.log(error)
        // alert('连接失败')
      })

    
    },
    //密码
    password:function(){
      let zipFormData = new URLSearchParams();
      zipFormData.append('passw_id',this.passw)
      
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/passw/',
        data:zipFormData
      }).then(res=>{
        var code = res.data.code
        if(code==200){
          this.error_password = true
          this.erroe_pas = res.data.mes
        }else{
          this.error_password = true
          this.erroe_pas = res.data.mes
        }
      }).catch(function(error){
        console.log(error)
        // alert('连接失败')
      })

    },
    //确认密码
    password2:function(){
      var pas1 = this.passw
      var pas2 = this.passw2
      this.error_check_password = true
      if(pas1==pas2){
        this.erroe_pas2='两次输入密码‘正确’'
      }else{
        this.erroe_pas2='两次输入密码‘错误’'
      }
    },
    //手机号
    mob:function(){
      let zipFormData = new URLSearchParams();
      zipFormData.append('mobile',this.mobile)
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/mobile/',
        data:zipFormData

      }).then(res=>{
        var code = res.data.code
        if(code==200){
          this.error_shouji=true
          this.error_shsouji_message='手机号格式“正确”'

        }else{
          this.error_shouji=true
          this.error_shsouji_message='手机号格式“错误”'

        }
      }).catch(function(error){
        console.log(error)
      })


    },

    //qq邮箱
    youx:function(){
      let zipFormData = new URLSearchParams();
      zipFormData.append('send_email',this.qq_youxiang)
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/youxiang/',
        data:zipFormData
      }).then(res=>{
        console.log(res.data.code)
        var code = res.data.code
        if(code==200){
          this.error_phone=true
          this.error_phone_message='发送成功'
          var num = 60;
          var t = setInterval(()=>{
            if (num==1){
              // 如果计数器到最后一秒后，清除计数器对象
              clearInterval(t); 
              //将点击按钮的点击事件回复回去
              this.miao=false
              this.huoqu = true
              this.error_sms_code=true
            }else{
              this.error_sms_code=false
              this.huoqu = false
              this.miao=true
              num-=1;
              //展示倒计时信息
              this.jishi = num;
            }
          },1000,60)
        }else{
          this.error_phone=true
          this.error_phone_message='发送失败'


        }
      }).catch(function(error){
        console.log(error)
      })

    },
    //输入验证码
    yan:function(){
      let zipFormData = new URLSearchParams();
      zipFormData.append('email_code',this.yanzhengma)
      zipFormData.append('send_email',this.qq_youxiang)
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/yanzhengma/',
        data:zipFormData
      }).then(res=>{
        var code = res.data.code
        if(code==200){
          this.error_sms_code=true
          this.error_sms_code_message="匹配成功"
        }else{
          this.error_sms_code=true
          this.error_sms_code_message="匹配失败"

        }
      }).catch(function(error){
        console.log(error)
      })

    },
    //点击注册
    zhuce:function(){
      var r = this.$router
      let zipFormData = new URLSearchParams();  //定义一个容器
      zipFormData.append('username',this.user)
      zipFormData.append('password',this.passw)
      zipFormData.append('password2',this.passw2)
      zipFormData.append('mobile',this.mobile)
      zipFormData.append('email',this.qq_youxiang)
      axios({
        method:'post',
        url:'http://127.0.0.1:8000/api/zhuce/',
        data:zipFormData
      }).then(res=>{
        var code = res.data.code
        if(code==200){
          alert('注册成功')
          r.push({'path':"/login"})

        }else{
          
          alert(res.data.mes)

        }
      }).catch(function(error){
        console.log(error)
        alert('连接失败')
      })
    },


    
    //点击勾选
    dian:function(){
      if(this.gouxuan==0){
        this.gouxuan=1
        this.error_allow=true
        this.gouxuan_error='你已同意此协议'


      }else{
        this.gouxuan=0
        this.error_allow=true
        this.gouxuan_error='请勾选协议'

      }

    },


    
    






  },
  mounted() {
    // 钩子函数
    this.generate_image_code();
  }
};
</script>