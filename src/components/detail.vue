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
            
                <!-- <div class="breadcrumb">
                    <a href="#">全部分类</a>
                    <span>></span>
                    <a href="#">笔记本</a>
                    <span>></span>
                    <a href="#">mac电脑</a>
                </div> -->
            
                <div class="goods_detail_con clearfix">
                    <div class="goods_detail_pic fl"><img :src=" detail_sku.good_sku.default_image_url"></div>
                    
                    <div class="goods_detail_list fr" >
                        <!-- //字典不需要遍历直接点就行 -->
                        <h3>{{detail_sku.good_sku.name}}</h3>  
                        <p>{{detail_sku.good_sku.caption}}</p>
                        <div class="prize_bar" >
                            <span class="show_pirze">¥<em>{{detail_sku.good_sku.price}}</em></span>
                            <a href="javascript:;" class="goods_judge">{{detail_sku.good_sku.comments}}</a>
                        </div>
                        <div class="goods_num clearfix">
                            <div class="num_name fl">数 量：</div>
                            <div class="num_add fl">
                                <input type="text" class="num_show fl" value="1" v-model='number'>
                                <a href="javascript:;" class="add fr" @click='add(detail_sku.good_sku.id,1)'>+</a>
                                <a href="javascript:;" class="minus fr"  @click='add(detail_sku.good_sku.id,2)'>-</a>	
                            </div> 
                        </div>
                        <div class="type_select">
                            <label></label>
                            <a href="javascript:;" class="select"></a>
                            <a href="javascript:;"></a>
                        </div>
                        <div class="type_select" v-for='i in detail_sku.good_list'>
                            <label>{{i.cate_name}}</label>
                            <a :class="{select:selects==j.id}" @click='clecked(j.id)' v-for=' j in i.cate_value'>{{j.value}}</a>
                            
                        </div>
                        
                        <div class="total">总价：<em>{{number*detail_sku.good_sku.price}}</em></div>
                        <div class="operate_btn">
                            <a href="javascript:;" class="buy_btn">立即购买</a>
                            <a href="javascript:;" class="add_cart" id="add_cart" @click='add_cate(detail_sku.good_sku.id)'>加入购物车</a>				
                        </div>
                    </div>
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
                        <ul class="detail_tab clearfix">
                            <li :class="{active:shows==1}" @click="desc_detail">商品详情</li>
                            <li :class="{active:shows==2}" @click="desc_pack">规格与包装</li>
                            <li :class="{active:shows==3}" @click="desc_pingjia">商品评价{{}}</li>
                            <li :class="{active:shows==4}" @click="desc_service">售后服务</li>
                        </ul>
                        <div class="tab_content current" v-show='detail'>
                            <dl>
                                <dt>商品详情：</dt>
                                <dd v-html='detail_sku.dital'>{{detail_sku.dital}}</dd>
                            </dl>
                        </div>
                        <div class="tab_content current" v-show='pack'>
                            <dl>
                                <dt>规格与包装：</dt>
                                <dd v-html='detail_sku.pack'>{{detail_sku.pack}}</dd>
                            </dl>
                        </div>
                        <div class="tab_content current" v-show='pingjia'>
                            <ul class="judge_list_con">
                                <li class="judge_list fl">
                                    <div class="user_info fl">
                                        <img src="../../static/images/cat.jpg">
                                        <b>潇***啼</b>
                                    </div>
                                    <div class="judge_info fl">
                                        <div class="stars_five"></div>
                                        <div class="judge_detail">派送非常快，第二天上午就收到。2天使用初步总结，前一部手机也是华为P9plus.MATE10pro包装原封未拆精致大气。拆开后第一眼就看到宝石蓝的手机，非常惊艳；然后就是配件一应俱全。开机各方面设置，把通讯录、短信等同步好，同品牌手机同步很快。和P9plus一样的后置指纹识别很方便。录制指纹容易，解锁非常快，秒开！屏幕完好，默认分辨率显示效果很好。</div>
                                    </div>
                                </li>
                                <li class="judge_list fl">
                                    <div class="user_info fl">
                                        <img src="../../static/images/cat.jpg">
                                        <b>潇***啼</b>
                                    </div>
                                    <div class="judge_info fl">
                                        <div class="stars_four"></div>
                                        <div class="judge_detail">派送非常快，第二天上午就收到。2天使用初步总结，前一部手机也是华为P9plus.MATE10pro包装原封未拆精致大气。拆开后第一眼就看到宝石蓝的手机，非常惊艳；然后就是配件一应俱全。开机各方面设置，把通讯录、短信等同步好，同品牌手机同步很快。和P9plus一样的后置指纹识别很方便。录制指纹容易，解锁非常快，秒开！屏幕完好，默认分辨率显示效果很好。</div>
                                    </div>
                                </li>
                                <li class="judge_list fl">
                                    <div class="user_info fl">
                                        <img src="../../static/images/cat.jpg">
                                        <b>潇***啼</b>
                                    </div>
                                    <div class="judge_info fl">
                                        <div class="stars_four"></div>
                                        <div class="judge_detail">派送非常快，第二天上午就收到。2天使用初步总结，前一部手机也是华为P9plus.MATE10pro包装原封未拆精致大气。拆开后第一眼就看到宝石蓝的手机，非常惊艳；然后就是配件一应俱全。开机各方面设置，把通讯录、短信等同步好，同品牌手机同步很快。和P9plus一样的后置指纹识别很方便。录制指纹容易，解锁非常快，秒开！屏幕完好，默认分辨率显示效果很好。</div>
                                    </div>
                                </li>				
                            </ul>
                        </div>
                        <div class="tab_content current" v-show='service'>
                            <dl>
                                <dt>售后服务：</dt>
                                <!-- //v-html='detail_sku.service'   取出标签 -->
                                <dd v-html='detail_sku.service'>{{detail_sku.service}} </dd>
                            </dl>
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
            
            detail_sku:{'good_sku':{'default_image_url':''}}, 
            detail:false,
            pack:false,
            pingjia:false,
            service:false,
            number:1,
            selects:'',
            shows:'',


        }
    },
    mounted(){
        //显示详情页
        this.xiangqing()
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
                this.liulanjilu()   //用户给liulanjilu
                // this.add_cate()  //用户给add_cate
            }).catch(error=>{
                console.log(error)
            })
        },


        //显示详情页
        xiangqing:function(){
            let form_data = new URLSearchParams()
            let sku_id = this.$route.query.id // 获取传过来的id
            alert(sku_id)
            console.log(form_data)
            form_data.append('sku_id',sku_id)
            axios({
                url:'http://127.0.0.1:8000/api/xiangqingye/',
                method:'post',
                data:form_data,
               
            }).then(res=>{
                console.log(res.data)
                this.detail_sku = res.data
                console.log(this.detail_sku)

            })
        },
        //商品详情
        desc_detail:function(){
            this.shows==1
            this.detail=true
            this.pack=false
            this.pingjia=false
            this.service=false
        },
        //规格与包装
        desc_pack:function(){
            this.shows==2
            this.detail=false
            this.pack=true
            this.pingjia=false
            this.service=false
        },
        //评价
        desc_pingjia:function(){
            this.shows==3
            this.detail=false
            this.pack=false
            this.pingjia=true
            this.service=false
        },
        //售后服务
        desc_service:function(){
            this.shows==4
            this.detail=false
            this.pack=false
            this.pingjia=false
            this.service=true
        },
        //点击加减事件  sku_id接收的是点击哪个商品的id  加减 asd接收的是值是 1 是+  ，2是——
        add:function(sku_id,asd){
            let form_data = new URLSearchParams(); 
            form_data.append('sku_id',sku_id)
            form_data.append('asd',asd)
            form_data.append('number',this.number)

            this.axios({
                url:'http://127.0.0.1:8000/api/jia_jian/',
                method:'post',
                data:form_data
              }).then(res=>{
                  var code = res.data.code
                  if(code == 200){
                      if(asd==1){
                          this.number++;
                      }else{
                          this.number--;
                      }

                  }else{
                      alert(res.data.mes)

                  }

              }).catch(function(error){
                  console.log(error)

              })
        },

        //浏览记录
        liulanjilu:function(){
            let form_data = new URLSearchParams()
            let sku_id = this.$route.query.id // 获取点击商品 传过来的id
            form_data.append('good_id',sku_id)
            form_data.append('user_id',localStorage.user_id)
            // alert(form_data)
            axios({
                url:'http://127.0.0.1:8000/api/liulan/',
                method:'post',
                data:form_data,
                
            }).then(res=>{
                console.log(res.data)
            })
        },


        //选定规格
        clecked:function(id){
            let form_data = new URLSearchParams()
            this.selects = id   //选定规格
            let xuan_id = this.selects
            form_data.append('xuan_id',xuan_id)
            axios({
                url:'http://127.0.0.1:8000/api/xuanxiang/',
                method:'post',
                data:form_data

            }).then(res=>{
                this.detail_sku = res.data
            })
        },




        //点击加入购物车 按钮
        add_cate:function(sku_id){
            
            let form_data = new URLSearchParams(); 
            form_data.append('sku_id',sku_id)
            form_data.append('user_id',localStorage.user_id)
            form_data.append('number',this.number)
            alert(form_data)
            this.axios({
                url:'http://127.0.0.1:8000/api/add_cate/',
                method:'post',
                data:form_data
            }).then(res=>{


            }).catch(error=>{
                console.log(error)
            })
        },

    }
}
</script>        