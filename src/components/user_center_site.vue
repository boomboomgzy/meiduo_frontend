<template>

    <div>
            <Header></Header>
            <div id="app" v-cloak>
                    
                
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
                                <div class="site_top_con">
                                    <a @click="get_province">新增收货地址</a>
                                    <span>你已创建了<b>{{len_address}}</b>个收货地址，最多可创建<b>20</b>个</span>
                                </div>
                                <!-- //默认地址 -->
                                <div class="site_con" v-for='i in default_dizhi'>   
                                    <div class="site_title">
                                        <h3>{{i.consignee}}{{i.province}}</h3>
                                        <a href="javascript:;"></a>
                                        <em>默认地址</em>						
                                        <span @click='deletes(i.id)'>×</span>
                                    </div>
                                    <ul class="site_list">
                                        <li><span>收货人：</span><b>{{i.consignee}}</b></li>
                                        <li><span>所在地区：</span><b>{{i.province}}{{i.city}}{{i.county}}</b></li>
                                        <li><span>地址：</span><b>{{i.place}}</b></li>
                                        <li><span>手机：</span><b>{{i.mobile}}</b></li>
                                        
                                    </ul>
                                    <div class="down_btn">
                                        <a @click='readct_address(i.id)'>编辑</a>
                                    </div>
                                </div>
                                <!-- //普通地址 -->
                                <div class="site_con"  v-for='i in address_dizhi'>
                                    <div class="site_title">
                                        <h3>{{i.consignee}}{{i.province}}</h3>
                                        <a href="javascript:;"></a>
                                        <span @click='deletes(i.id)'>×</span>
                                    </div>
                                    <ul class="site_list">
                                        <li><span>收货人：</span><b>{{i.consignee}}</b></li>
                                        <li><span>所在地区：</span><b>{{i.province}}{{i.city}}{{i.county}}</b></li>
                                        <li><span>地址：</span><b>{{i.place}}</b></li>
                                        <li><span>手机：</span><b>{{i.mobile}}</b></li>
                                        
                                    </ul>
                                    <div class="down_btn">
                                        <!-- //点击默认事件时将id传参 -->
                                        <a @click='set_default(i.id)'>设为默认</a>
                                        <a @click='readct_address(i.id)'>编辑</a>
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
                        <p>CopyRight © 2016 北京美多商业股份有限公司 All Rights Reserved</p>
                        <p>电话：010-****888    京ICP备*******8号</p>
                    </div>
                
                    <div class="pop_con" v-show="is_show_edit">
                        <div class="site_con site_pop">
                                <div class="site_pop_title">
                                    <h3>新增收货地址</h3>
                                    <a @click="is_show_edit=false">×</a>
                                </div>				
                                <form>
                                    <div class="form_group">
                                        <label>*收货人：</label>
                                        <input type="text" name="" v-model='shouhuoren'>
                                    </div>
                                    <div class="form_group">
                                        <label>*所在地区：</label>
                                        <!-- // @change=当状态改变时触发事件 -->
                                        <select @change="get_province_subs" v-model="province_id">
                                            <option v-for="i in province" :value="i.id">{{i.name}}</option>
                                           
                                        </select>
                                        <select @change="get_city_subs" v-model="city_id">
                                            <option v-for="i in province_city" :value='i.id'>{{i.name}}</option>
                                           
                                        </select>
                                        <select @change="get_city_subs" v-model='county_id'>
                                            <option v-for="i in province_city_county" :value='i.id'>{{i.name}}</option>
                                            
                                        </select>
                                    </div>
                                    <div class="form_group">
                                        <label>*详细地址：</label>
                                        <input type="text" name="" v-model='dizhi'>
                                    </div>
                                    <div class="form_group">
                                        <label>*手机：</label>
                                        <input type="text" name="" v-model='shouji'>
                                    </div>
                                    
                                    <input type="text" v-model='red_id' v-show='redact_addres_id'>
                                    <input type="button" name="" value="保 存" class="info_submit" @click='baocun(red_id)'>
                                    <input @click="is_show_edit=false" type="reset" name="" value="取 消" class="info_submit info_reset">
                                </form>
                        </div>
                        <div class="mask"></div>
                    </div>
                    </div>


    </div>


</template>

<style>
        @import "../../static/css/reset.css";
        @import "../../static/css/main.css";
        
        </style>

<script>
import axios from 'axios'
import Header from './header'
export default{
    components:{
        'Header':Header
    },
    inject:['reload'],  //页面刷新
    data:function(){
        return{
            is_show_edit:false,
            province:'',  //省
            province_id:'' ,//当前选中的省的id
            province_city:'', //市
            city_id:'',  // 当前市的id
            province_city_county:'',  //县
            county_id:'',  //选中当前县的id

            shouhuoren:'', //收货人
            dizhi:'',   //详细地址
            shouji:'', // 手机号
            red_id:'',  //当前地址id，点击编辑时要用这个id做条件，后台更新数据
            redact_addres_id:false,  //当前地址id 是否显示input框

            default_dizhi:[], //默认地址
            address_dizhi:[], //普通地址
            len_address:[],   //一共多少地址

            
        }
    },

    //定义钩子函数，进页面就显示地址信息
    mounted(){
            //获取地址
            this.get_address()
            
            //获取默认地址
            this.get_def_address()
        },

    methods:{
        //获取一级城市   省
        get_province:function(){
            this.is_show_edit=true
            axios({
                url:'http://127.0.0.1:8000/api/province/',
                method:'get',
            }).then(res=>{
                console.log(res)
                this.province = res.data
            })
        },
        //连接传参，把省的id传到后台 获取市
        get_province_subs:function(){
            console.log(this.province_id)
            axios({
                url:'http://127.0.0.1:8000/api/city/'+ this.province_id + '/',
                method:'get',
            }).then(res=>{
                console.log(res)
                this.province_city = res.data
            })
            
        },
        get_city_subs:function(){
            console.log(this.city_id)
            axios({
                url:'http://127.0.0.1:8000/api/county/' + this.city_id + '/',
                method:'get',
            }).then(res=>{
                console.log(res)
                this.province_city_county = res.data
            })
        },
        //保存用户地址和信息   接收参数编辑时用
        baocun:function(adres_id){
            //发送给后端的数据必须和表里的字段一样
            let zipFormData = new URLSearchParams();
            zipFormData.append('consignee',this.shouhuoren)
            zipFormData.append('province',this.province_id)  //获取省的id
            zipFormData.append('city',this.city_id)    //市的id
            zipFormData.append('county',this.county_id)  // 县的id
            zipFormData.append('place',this.dizhi)  //地址
            zipFormData.append('mobile',this.shouji)  //手机号
            zipFormData.append('adres_id',adres_id)   // 点击某条的id 编辑用     传参不用this（全局变量）
           

            axios({
                method:'post',
                url:'http://127.0.0.1:8000/api/baocundizhi/',
                data:zipFormData,
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }

            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    console.log(res)
                    this.is_show_edit = false
                    this.reload()  //刷新当前页面

                }else{
                    console.log(res.data.mes)
                    alert(res.data.mes)

                }

            }).catch(function(error){
                console.log(error)
            })

        },



        
        //获取地址  
        get_address:function(){
            
            this.axios({
                url:'http://127.0.0.1:8000/api/get_add/',
                method:'get',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            }).then(res=>{
                this.address_dizhi = res.data.address  //将不是默认的地址赋值给变量
                this.len_address = res.data.len_address //将用户一共有多少地址赋值

            }).catch(error=>{
                console.log(error)
                this.$router.push({'puth':'/login'})
            })
        },
        //获取默认地址
        get_def_address:function(){
            
            this.axios({
                url:'http://127.0.0.1:8000/api/def_address/',
                method:'get',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            
            }).then(res=>{
                if(res.data.code==200){
                    this.default_dizhi = res.data.mes

                }
                

            }).catch(error=>{
                console.log(error)
                this.$router.push({'puth':'/login'})
            })
        },


        //点击默认
        set_default:function(address_id){
            this.axios({
                url:'http://127.0.0.1:8000/api/set_def_address/'+address_id+'/',
                method:'get',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            }).then(res=>{
                if(res.data.code==200){
                    this.reload();    //页面刷新
                }
            }).catch(error=>{
                console.log(error)
                this.$router.push({'path':'/login'})
            })
        },


        //点击 编辑地址 获取到点击某条的id，携带数据打开添加地址框
        readct_address:function(adres_id){
            this.axios({
                url:'http://127.0.0.1:8000/api/redact_address/'+adres_id+'/',
                method:'get',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }

            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    console.log(res.data)  
                    this.shouji = res.data.mes.mobile   //收货人手机
                    this.dizhi = res.data.mes.place  //收货地址
                    this.shouhuoren = res.data.mes.consignee //收货人
                    //给当前id赋值
                    this.red_id = res.data.mes.id   
                    // 将当前的地址数据获取后触动三级联动事件，三级联动里this.is_show_edit=true打开添加地址框，这次是带有数据的，修改用户地址也是走的添加地址
                    this.get_province()

                }
            }).catch(error=>{
                console.log(error)
                this.$router.push({'puth':'/login'})
            })
        },
        //点击x号删除 传参点击哪条的x
        deletes:function(adres_id){
            this.axios({
                url:'http://127.0.0.1:8000/api/deletes/'+adres_id+'/',
                method:'delete',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            }).then(res=>{
                var code = res.data.code
                if(code==200){
                    alert('删除成功')
                    this.reload();    //页面刷新

                }

            }).catch(error=>{
                console.log(error)
            })
        }


    








    }
}
</script>


