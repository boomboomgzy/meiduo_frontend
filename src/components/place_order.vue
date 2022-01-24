<template>
    <div>
            <Header></Header>
            <div class="search_bar clearfix">
                    <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>
                    <div class="sub_page_name fl">|&nbsp;&nbsp;&nbsp;&nbsp;提交订单</div>
                    <div class="search_con fr  mt40">
                        <input type="text" class="input_text fl" name="" placeholder="搜索商品">
                        <input type="button" class="input_btn fr" name="" value="搜索">
                    </div>		
                </div>
                <h3 class="common_title">确认收货地址</h3>
                <div class="common_list_con clearfix" id="get_site">
                        <dl>
                            <dt>寄送到：</dt>
                            <dd :class="[(nowsite==0)?'current':'']" @click="nowsite=0"><input type="radio" name="get_site" value="0" v-model="nowsite">{{order.dizhi.province}}{{order.dizhi.city}}{{order.dizhi.county}}{{order.dizhi.place}} </br>姓名：{{order.dizhi.consignee}} </br>电话：{{order.dizhi.mobile}}</dd>
                        </dl>
                        <!-- <a href="user_center_site.html" class="edit_site">编辑收货地址</a> -->
                        <router-link class="edit_site" to="/user_center_site">编辑收货地址</router-link>
                    </div>
                    <h3 class="common_title">支付方式</h3>
                    <div class="common_list_con clearfix">
                            <div class="pay_style_con clearfix">
                                <input type="radio" name="pay_style" value="1">
                                <label class="cash">货到付款</label>
                                <input type="radio" name="pay_style" value="2">
                                <label class="zhifubao"></label>
                            </div>
                        </div>
                        <h3 class="common_title">商品列表</h3>
                        <div class="common_list_con clearfix" >
                                <ul class="goods_list_th clearfix">
                                    <li class="col01">商品名称</li>
                                    <li class="col03">商品价格</li>
                                    <li class="col04">数量</li>
                                    <li class="col05">小计</li>		
                                </ul>
                                <ul class="goods_list_td clearfix" v-for='i in order.data_list'>
                                    <li class="col01">{{i.id}}</li>			
                                    <li class="col02"><img :src=i.default_image_url></li>
                                    <li class="col03">{{i.name}}</li>
                                    <li class="col05">{{i.price}}</li>
                                    <li class="col06">{{i.number}}</li>
                                    <li class="col07">{{i.total}}</li>	
                                </ul>
                                
                            </div>
                            <h3 class="common_title">总金额结算</h3>
                            <div class="common_list_con clearfix">
                                    <div class="settle_con">
                                        <div class="total_goods_count" >共<em>{{order.lens}}</em>件商品，总金额<b>{{order.totals}}元</b></div>
                                        <div class="transit">运费：<b>{{yunfei}}元</b></div>
                                        <div class="total_pay">实付款：<b>{{order.totals+yunfei}}元</b></div>
                                    </div>
                                </div>
                                <div class="order_submit clearfix">
                                        <a href="javascript:;" id="order_btn" @click='tijiaodingdan(order.totals,order.lens)'>提交订单</a>
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
            order:'',
            nowsite:0,
            yunfei:10,
            
        }
    },
    mounted(){
        //显示订单列表
        this.order_list()
        this.verify_jwt_token()
    },
    methods:{
        verify_jwt_token:function(){
            let token = localStorage.token
            let form_data = new URLSearchParams()
            form_data.append('token',token)
            this.axios({
                url:'http://127.0.0.1:8000/verify/',
                method:'post',
                data:form_data,
            }).then(res=>{

            }).catch(error=>{
                
            })

        },
        //展示提交订单页面
        order_list:function(){
        this.axios({
            url:'http://127.0.0.1:8000/api/cart_list1/',
            method:'post',
            headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
        }).then(res=>{
            console.log(res.data)
            this.order = res.data

        }).catch(error=>{
            console.log(error)
        })
        },

        //提交订单
        tijiaodingdan:function(total_price,numbers){
            var r = this.$router
            var checklist = []
            this.order.data_list.forEach((item,index)=>{
                checklist.push(item.id)
                
            })
            let form_data = new URLSearchParams();
            let goods_id = this.$route.query.goods_id
            form_data.append('user_id',localStorage.user_id)
            form_data.append('goods_id',checklist)
            form_data.append('numbers',numbers)
            form_data.append('total_price',total_price)

            alert(form_data)
            this.axios({
                url:'http://127.0.0.1:8000/api/ruku_order/',
                method:'post',
                data:form_data
            }).then(res=>{
                if(res.data.code==200){
                    
                    r.push({'path':'/order?code='+res.data.mes})
                    

                }else{

                }

            }).catch(error=>{
                console.log(error)
            })

        },


    }
    

}




</script>