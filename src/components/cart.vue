<template>
    <div>
            <Header></Header>
            <div class="search_bar clearfix">
                    <a href="index.html" class="logo fl"><router-link to="/index"><img src="../../static/images/logo.png"></router-link></a>
                    
                    <div class="sub_page_name fl">|&nbsp;&nbsp;&nbsp;&nbsp;购物车</div>
                    <div class="search_con fr mt40">
                        <input type="text" class="input_text fl" name="" placeholder="搜索商品">
                        <input type="button" class="input_btn fr" name="" value="搜索">
                    </div>		
                </div>
            
                <div class="total_count">全部商品<em>{{cart_list.lens}}</em>件</div>	
                <ul class="cart_list_th clearfix">
                    <li class="col01">商品名称</li>
                    <li class="col03">商品价格</li>
                    <li class="col04">数量</li>
                    <li class="col05">小计</li>
                    <li class="col06">操作</li>
                </ul>                                    
                <ul class="cart_list_td clearfix" v-for='i in cart_list.data_list'>
                    <li class="col01"><input type="checkbox" name="" checked></li>
                    <li class="col02"><img :src=i.default_image_url></li>
                    <li class="col03">{{i.name}}</li>
                    <li class="col05">{{i.price}}</li>
                    <li class="col06">
                        <div class="num_add">
                            <a href="javascript:;" class="add fl" @click='add(i.id,i.number,1)'>+</a>
                            <!-- 绑定属性 :value="num=i.number"  和绑定图片一样 -->                    
                            <input type="text" class="num_show fl" :value="i.number" >	
                            <a href="javascript:;" class="minus fl" @click='add(i.id,i.number,2)'>-</a>	
                        </div>
                    </li>
                    <li class="col07">{{i.total}}元</li>
                    <li class="col08"><a href="javascript:;">删除</a></li>
                </ul>
            
                
                
            
                <ul class="settlements">
                    <li class="col01"><input type="checkbox" name="" checked=""></li>
                    <li class="col02">全选</li>
                    <li class="col03">合计(不含运费)：<span>¥</span><em>{{cart_list.totals}}</em><br>共计<b>{{cart_list.lens}}</b>件商品</li>
                    <li class="col04"><a href='#/place_order'>去结算</a></li>
                                      
                    <!-- <li class="col04"><router-link to="/place_order">去结算</router-link></li> -->
                </ul>
            
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
            cart_list:'',
            

        }
    },
    mounted(){
        //显示购物车数据
        this.cart_lists()
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
        //显示购物车数据
        cart_lists:function(){
            this.axios({
                url:'http://127.0.0.1:8000/api/cart_list1/',
                method:'post',
                headers:{
                'Authorization': 'JWT ' + localStorage.token
        }
                

            }).then(res=>{
                // console.log(res.data)
                this.cart_list = res.data


            }).catch(function(error){
                // console.log(error)
            })
        },
        //点击加减
        add:function(good_id,number,asd){
            let form_data = new URLSearchParams();
            form_data.append('good_id',good_id)
            form_data.append('number',number)
            form_data.append('asd',asd)
            form_data.append('user_id',localStorage.user_id)
           
            this.axios({
                url:'http://127.0.0.1:8000/api/cart_add/',
                method:'post',
                data:form_data
            }).then(res=>{
          
                var code = res.data.code
                
                if(code==200){
                    console.log(res.data)
                    // this.cart_list = res.data
                    this.reload();  //刷新当前页面
                }else{
                    alert(res.data.mes)
                }

            }).catch(error=>{
                console.log(error)
            })

        },
    }
}   
 

</script>