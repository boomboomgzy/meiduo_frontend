<template>
    <div>

            <Header></Header>
            <div class="search_bar clearfix">
                <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>
                    <div class="search_wrap fl">
                        <div class="search_con">
                            <input type="text" class="input_text fl" name="" placeholder="搜索商品">
                            <input type="button" class="input_btn fr" name="" value="搜索">
                        </div>
                        <ul class="search_suggest fl">
                            <li><a href="#">索尼微单</a></li>
                            <li><a href="#">优惠15元</a></li>
                            <li><a href="#">美妆个护</a></li>
                            <li><a href="#">买2免1</a></li>
                        </ul>
                    </div>
            
                    <div class="guest_cart fr">
                        <a href="#" class="cart_name fl">我的购物车</a>
                        <div class="goods_count fl" id="show_count">15</div>
            
                        <ul class="cart_goods_show">
                            <li>
                                <img src="../../static/images/goods/goods001.jpg" alt="商品图片">
                                <h4>商品名称手机</h4>
                                <div>4</div>
                            </li>
                            <li>
                                <img src="../../static/images/goods/goods002.jpg" alt="商品图片">
                                <h4>商品名称手机</h4>
                                <div>5</div>
                            </li>
                            <li>
                                <img src="../../static/images/goods/goods003.jpg" alt="商品图片">
                                <h4>商品名称手机</h4>
                                <div>6</div>
                            </li>
                            <li>
                                <img src="../../static/images/goods/goods003.jpg" alt="商品图片">
                                <h4>商品名称手机</h4>
                                <div>6</div>
                            </li>
                        </ul>			
                    </div>
            
                </div>
            
                <div class="navbar_con">
                    <div class="navbar">
                        <div class="sub_menu_con fl">
                            <h1 class="fl">商品分类</h1>
                           


                            <ul class="sub_menu" >			
                                <li v-for='i in categories'>
                                    <div class="level1">
                                        <a v-for='cate1 in i.channels'>{{cate1.name}}</a>
                                    </div>
                                    <div class="level2">
                                        <div class="list_group" v-for='cate1 in i.channels'>
                                            <div class="group_name fl"> {{cate1.name}}&gt;</div>
                                            <div class="group_detail fl">
                                                    <!-- <router-link to="/list" v-for="cat2 in cate1.sub_cate" >{{cat2.name}}</router-link> -->
                                                    <a :href="'#/list?id='+ cat2.id" v-for="cat2 in cate1.sub_cate">{{cat2.name}}</a>
                                            </div>						
                                        </div>
                                       
                                    </div>
                                </li>
                            </ul>
                        </div>		
            
            
                        <ul class="navlist fl">
                            <li><a href="">首页</a></li>
                            <li class="interval">|</li>
                            <li><a href="">真划算</a></li>
                            <li class="interval">|</li>
                            <li><a href="">抽奖</a></li>
                        </ul>
                    </div>
                </div>
            
                <div class="breadcrumb">
                    <a href="#">全部分类</a>
                    <span>></span>
                    <a href="#">手机</a>
                </div>
            
                <div class="main_wrap clearfix">
                    <div class="l_wrap fl clearfix">
                        <div class="new_goods">
                            <h3>热销排行</h3>
                            <ul>
                                <li>
                                    <a href="#"><img src="../../static/images/goods/goods001.jpg"></a>
                                    <h4><a href="#">360手机 N6 Pro 全网通 6GB+128GB 极夜黑</a></h4>
                                    <div class="prize">￥3.90</div>
                                </li>
                                <li>
                                    <a href="#"><img src="../../static/images/goods/goods002.jpg"></a>
                                    <h4><a href="#">360手机 N6 Pro 全网通 6GB+128GB 极夜黑</a></h4>
                                    <div class="prize">￥16.80</div>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                    <div class="r_wrap fr clearfix">
                        <div class="sort_bar">
                            <a href="#" class="active">默认</a>
                            <a href="#">价格</a>
                            <a href="#">人气</a>
                        </div>
            
                        <ul class="goods_type_list clearfix">
                            <li v-for='i in sku'>
                                    <!-- //  :src="i.default_image_url" 页面显示要是一个连接  -->
                                <a :href="'#/detail?id='+i.id"><img :src="i.default_image_url"></a>  
                                <h4><a :href="'#/detail?id='+i.id">{{i.name}}</a></h4>
                                <div class="operate">
                                    <span class="prize">￥{{i.price}}</span>
                                    <span class="unit">{{i.stock}}台</span>
                                    <a href="#" class="add_goods" title="加入购物车"></a>
                                </div>
                            </li>
            
                            
                        </ul>
            
                        <div class="pagenation">
                            <a href="#">上一页</a>
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
    inject:['reload'],  //页面刷新
    data:function(){
        return{
            sku:'',    //列表商品
            categories:'',  //左侧频道分类


        }
    },
    mounted(){
            
            this.get_sku() 
            //显示频道
            this.get_address() 
        },
    methods:{
        get_sku:function(){
            let form_data = new URLSearchParams()
            let cat2_id = this.$route.query.id  //获取首页点击到传过来的id
            
            form_data.append('cat2_id',cat2_id)
            axios({
                url:'http://127.0.0.1:8000/api/sku_list/',
                method:'post',
                data:form_data,
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
            }).then(res=>{
                
                if(res.data.code==200){
                    console.log(res.data)
                    
                    this.sku = res.data.mes
                    
                }
            })
        },
        //显示频道
        get_address:function(){
            axios({
                url:'http://127.0.0.1:8000/api/get_categories/',
                method:'get',
                

            }).then(res=>{
                console.log(res.data)
                
                this.categories=res.data
                

            })
        },

    }
}


</script>