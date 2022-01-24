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
                            <h3 class="common_title2">基本信息</h3>
                                    <ul class="user_info_list">
                                        <li><span>用户名：</span>{{user_name}}</li>
                                        <li><span>手机号：</span>{{shoujihao}}</li>
                                        <li><span>Email：</span>{{email}}</li>
                                    </ul>
                            </div>
                            
                            <h3 class="common_title2">最近浏览</h3>
                            <div class="has_view_list">
                                <ul class="goods_type_list clearfix">
                            <li v-for='i in sku_list.sku_list1'>
                                <a :href="'#/detail?id='+ i.id"><img :src=i.default_image_url></a>
                                <h4><a href="detail.html" :href="'#/detail?id='+ i.id">{{i.name}}</a></h4>
                                <div class="operate">
                                    <span class="prize">￥{{i.price}}</span>
                                    <span class="unit">{{i.stock}}</span>
                                    <a href="#" class="add_goods" title="加入购物车"></a>
                                </div>
                            </li>
            
            
          
                        </ul>
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


    </div>
</template>

<style>
        @import "../../static/css/reset.css";
        @import "../../static/css/main.css";
        
</style>

<script>
document.title = "用户中心"    
import axios from 'axios'   
import Header from './header'
export default{
    components:{
        'Header':Header

    },
    data:function(){
        return{
            user_name:'',
            shoujihao:'',
            email:'',
            sku_list:'',
        }
    },
    mounted(){
        this.user_xianshi()
        this.zuijin_liulan()
    },
    methods:{
        user_xianshi:function(){
            axios({
                url:'http://127.0.0.1:8000/api/url_info/',
                method:'get',
                headers:{
                    'Authorization': 'JWT ' + localStorage.token
                }
            }).then(res=>{
                this.user_name = res.data['username']
                this.shoujihao = res.data['mobile']
                this.email = res.data['email']
            })
        },
        zuijin_liulan:function(){
            axios({
                url:'http://127.0.0.1:8000/api/zuijin_liulan/',
                method:'get',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            }).then(res=>{
                console.log(res.data)
                this.sku_list = res.data
                // alert(this.sku_list.sku_list1.name)

            })
        }

    }


} 

</script>

