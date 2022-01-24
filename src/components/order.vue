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
                    <h3 class="common_title2">全部订单</h3>
                    <span v-for=' i in orders_ss'>
                        <ul class="order_list_th w978 clearfix">
                            <li class="col01">{{i.orders.create_time}}</li>
                            <li class="col02">{{i.orders.order_code}}</li>
                        </ul>
        
                        <table class="order_list_table w980">
                            <tbody>
                                <tr>
                                    <td width="55%">
                                        <ul class="order_goods_list clearfix" v-for='order in i.prders_xiangqing'>					
                                            <li class="col01"><img :src=order.image></li>
                                            <li class="col02">{{order.name}}</em></li>	
                                            <li class="col03">{{order.goods_number}}</li>
                                            <li class="col04">{{order.xiaoji}}</li>	
                                        </ul>
                                        
                                    </td>
                                    <td width="15%">{{i.orders.total_manoy}}元</td>
                                    <td width="15%" v-if='i.orders.pay_type==2'>支付宝</td>
                                    <td width="15%" v-if='i.orders.pay_type==1'>货到付款</td>
                                    <td width="15%" v-if='i.orders.stsaus==2'>
                                        <a href="#" class="oper_btn" @click='go_pay(i.orders.order_code)'>去付款</a>
                                    </td>
                                    <td width="15%" v-if='i.orders.stsaus==1'>
                                        <a href="#" class="oper_btn" @click='go_pay(i.orders.order_code)'>去评论</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            
                    </span>
                    
                    
    
                    <div class="pagenation">
                        <a href="#"><上一页</a>
                        <a href="#" class="active">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">下一页></a>
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
import axios from 'axios'
import Header from './header'
export default{
    components:{
        'Header':Header

    },
    data:function(){
        return{
            orders_ss:'',

        }
    },
    mounted(){
        this.order_list()

    },
    methods:{
        order_list:function(){            
            this.axios({
                url:'http://127.0.0.1:8000/api/zhanshi_order/',
                method:'post',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
                
            }).then(res=>{
                console.log(res.data)
                this.orders_ss=res.data
            
            

            }).catch(error=>{
                console.log(error)
            })

        },
        go_pay:function(code){
            let form_data = new URLSearchParams();
            form_data.append('code',code)
            alert(form_data)
            this.axios({
                url:'http://127.0.0.1:8000/api/zhifu/',
                method:'post',
                data:form_data
            }).then(res=>{
                window.location.href= res.data.pay_url
            }).catch(error=>{
                console.log(error)
            })

        }
    }
}


</script>