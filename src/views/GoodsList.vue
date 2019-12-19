<template>
  <div class="GoodsList">
    <!-- 头部 -->
    <div class="header">
      <div class="head">
        <span class="head_dh">兑换记录</span>
        <span class="head_jf" @click="earnPoints">赚积分</span>
      </div>
      <div class="head_jf_number" @click="scoreDetail">
        <span class="jf_num">22000</span>
        <div class="head_hdjf">
          <span>活动积分</span>
          <img src="../assets/images/jfto.png" alt="" class="jfto">
        </div>
      </div>
    </div>
    <!-- nav导航 -->
    <ul class="good_nav">
      <li class="active" data-id="1">全部商品</li>
      <li data-id="2">
        <span>500积分</span>
        <img src="../assets/images/arrow_down.png" alt="">
      </li>
      <li data-id="3">
        <span>1000积分</span>
        <img src="../assets/images/arrow_down.png" alt="">
      </li>
      <li data-id="4">
        <span>1000积分</span>
        <img src="../assets/images/arrow_up.png" alt="">
      </li>
    </ul>
    <div class="head_center">
      <div class="swiper-container mytop">
        <div class="swiper-wrapper my_lists">
          <div v-for="(item, index) in my_item_data" :key="index" class="swiper-slide mytoplist stop-swiping">
            <img src="../assets/images/laba.png" alt="">
            <span >{{ item.userName }}刚刚成功兑换了{{ item.num }}个{{ item.goodsName }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="good_list">
      <ul class="active goodList1 ">
        <li v-for="(item, index) in goods_first_data" :key="index" :data-id="item.id">
          <div class="goods_list_img">
            <div class="good_box">
              <span/>
              <img :src="`../${item.picture_url}`" alt="">
            </div>

          </div>
          <div class="line"/>
          <span class="goods_name">{{ item.goods_name }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.score }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
      <ul class="goodList2">
        <li v-for="(item, index) in goods_second_data" :key="index" :data-id="item.id">
          <div class="goods_list_img">
            <div class="good_box">
              <span/>
              <img :src="`../${item.picture_url}`" alt="">
            </div>

          </div>
          <div class="line"/>
          <span class="goods_name">{{ item.goods_name }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.score }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
      <ul class="goodList3">
        <li v-for="(item, index) in goods_three_data" :key="index" :data-id="item.id">
          <div class="goods_list_img">
            <div class="good_box">
              <span/>
              <img :src="`../${item.picture_url}`" alt="">
            </div>

          </div>
          <div class="line"/>
          <span class="goods_name">{{ item.goods_name }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.score }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li></ul>
      <ul class="goodList4">
        <li v-for="(item, index) in goods_four_data" :key="index" :data-id="item.id">
          <div class="goods_list_img">
            <div class="good_box">
              <span/>
              <img :src="`../${item.picture_url}`" alt="">
            </div>

          </div>
          <div class="line"/>
          <span class="goods_name">{{ item.goods_name }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.score }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
    </div>
    <form id="form" action="">
      <input type="hidden" value="${openid}" name="openid">
      <input type="hidden" value="${noncestr}" name="noncestr">
      <input type="hidden" value="${timestamp}" name="timestamp">
      <input type="hidden" value="${sign}" name="sign">
      <input type="hidden" value="${unionid}" name="unionid">
      <input type="hidden" name="goodsType" class="goodsType">
      <input type="hidden" name="myId" class="myId">
    </form>

  </div>
</template>
<script>
import '@/assets/css/goodList.css'
// import '@/assets/css/layui.css'
import '@/assets/css/animate.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/js/layui.all.js'
import '@/assets/js/goodList.js'
import http from '@/assets/util/http.js'
import Swiper from '@/assets/js/swiper.min.js'
export default {
  data() {
    return {
      goods_first_data: [],
      goods_second_data: [],
      goods_three_data: [],
      goods_four_data: [],
      goodsType: '',
      mySwiper: null,
      my_item_data: []
    }
  },
  activated() {
    this.mySwiper = null
    this.broadcast()
  },
  mounted() {
    console.log(this.$route.query)
    this.goodsType = this.$route.query.goodsType
    const that = this
    $('.good_nav li').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
      var dataId = $(this).attr('data-id') - 1
      console.log(dataId)
      $('.good_list').find('ul').eq(dataId).addClass('active').siblings().removeClass('active')
      that.getGoodsDetailsByDataId(dataId)
    })
    this.broadcast() // 广播
    this.getScoreDetails() // 积分总数
    this.getGoodsDetails() // 商品总数据

    var unionid = '${unionid}'
    var goodsType = '${goodsType}'
    // $('.jfto').on('click',function(){
    //   $("#form").attr("action","/wxapp_2019powerbill/jfdh/jfdh_turnToScoreDetail.do");
    //   $("#form").submit();
    // })

    // $('.head_jf').on('click',function(){
    //   $("#form").attr("action","/wxapp_2019powerbill/jfdh/jfdh_turnToMoreMethods.do");
    //   $("#form").submit();
    // })

    // $('.head_dh').on('click',function(){
    //   $("#form").attr("action","/wxapp_2019powerbill/jfdh/jfdh_turnToScoreDetail.do");
    //   $("#form").submit();
    // })
    // 点击任意商品获取商品信息
    $('.good_list').on('click', 'li', function() {
    	 var id = $(this).attr('data-id')
    	 console.log(id)
      $('.myId').val(id)
      that.turnToOneGoodsDetail()
      // $("#form").attr("action","/wxapp_2019powerbill/jfdh/jfdh_turnToOneGoodsDetail.do");
     	  // $("#form").submit();
    })
  },
  methods: {
    turnToOneGoodsDetail() {
      this.$router.push({ path: '/oneGoodsDetail' })
    },
    turnToMoreMethods() {

    },
    scoreDetail() {
      this.$router.push({ path: '/scoreDetail' })
    },
    earnPoints() {
      this.$router.push({ path: '/earnPoints' })
    },
    async getGoodsDetailsByDataId(dataId) {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getGoodsDetails.do', { dataType: 'json', type: this.goodsType, pageSize: '100', pageNo: '1', score: dataId })
      if (res.data.list) {
        console.log(res.data)
        if (dataId == 1) {
          this.goods_second_data = res.data.list
        } else if (dataId == 2) {
          this.goods_three_data = res.data.list
        } else if (dataId == 3) {
          this.goods_four_data = res.data.list
        } else {
          this.goods_first_data = res.data.list
        }
      }
    },
    async broadcast() { // 广播
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getShowMsg.do', { dataType: 'json' })
      if (res.data.list) {
        this.my_item_data = res.data.list
        this.$nextTick(() => {
          this.mySwiper = new Swiper('.swiper-container', {
            direction: 'vertical', // 垂直切换选项 horizontal vertical
            loop: true, // 循环模式选项
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            autoplay: {
              delay: 1000, // 1秒切换一次
              stopOnLastSlide: false,
              disableOnInteraction: false
            }
          })
        })
      }
    },
    async getScoreDetails() { // 积分总数
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getScoreDetails.do', { dataType: 'json', unionid: 'unionid' })
      if (res.data.data) {
        $('.jf_num').text(res.data.canUseScore)
      }
    },
    async getGoodsDetails() { // 商品总数据
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getGoodsDetails.do', { dataType: 'json', type: this.goodsType, pageSize: '100', pageNo: '1', score: '' })
      if (res.data.list) {
    		this.goods_first_data = res.data.list
      }
    }
  }
}
</script>
<style scoped>
.header {
  height: 3.066667rem;
  width: 100%;
  background: url(../assets/images/goods_list_bj.png) no-repeat;
  background-size: cover;
  background-position: 0 -1.706667rem;
  overflow: hidden;
}
.header .head {
  height: 0.8rem;
  margin-top: 0.4rem;
  box-sizing: border-box;
  padding: 0 0.226667rem 0 4.666667rem;
  display: flex;
  justify-content: space-between;
}
.header .head span {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.373333rem;
  color: #9f1c23;
  background-color: #ffcf95;
  width: 2.426667rem;
  height: 0.8rem;
  border-radius: 0.8rem;
}
.header .head_jf_number {
  height: 0.826667rem;
  width: 100%;
  margin-top: 15px;
  box-sizing: border-box;
  padding-left: 0.266667rem;
  display: flex;
}
.header .head_jf_number .jf_num {
  font-size: 40px;
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
}
.header .head_jf_number .head_hdjf {
  margin-left: 0.24rem;
  height: 100%;
  font-size: 0.373333rem;
  color: #fff;
  display: flex;
  align-items: flex-end;
}
.header .head_jf_number .head_hdjf img {
  width: 0.32rem;
  height: 0.32rem;
  margin-left: 0.08rem;
  margin-bottom: 0.08rem;
}
.good_nav {
  background-color: #ffe8d5;
  width: 100%;
  height: 1.173333rem;
  display: flex;
  align-items: center;
  padding: 0 0.333333rem;
  box-sizing: border-box;
  justify-content: space-between;
}
.good_nav li {
  font-size: 0.373333rem;
  color: #3a0808;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
}
.good_nav li.active {
  border-bottom: 0.053333rem solid #d35249;
  color: #d35249;
  font-size: 0.426667rem;
}
.good_nav li img {
  width: 0.266667rem;
  height: 0.346667rem;
  margin-left: 0.026667rem;
}
.head_center {

   width: 100%;
  height: 0.666667rem;
  background-color: #FFCF95;
  overflow: hidden;
}
.head_center .mytop {
  height: 100%;
}
.head_center .mytop .mytoplist {
  display: flex;
  align-items: center;
  justify-content: center;
}
.head_center img {
  width: 0.44rem;
  height: 0.44rem;
  margin-right: 0.133333rem;
}
.head_center span {
 font-size: 0.293333rem;
  color: #9F1C23;
  width:7.3333rem;
  text-align:center;
  display:block;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.good_list {
  background-color: #f1f1f1;
  box-sizing: border-box;
  padding: 0 0.293333rem;
  padding-top: 0.373333rem;
}
.good_list ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  display: none;
  height:12rem;
  overflow-y:auto;
  overflow-x:hidden;
}
.good_list ul.active {
  display: flex;
}
.good_list li {
  height: 5.093333rem;
  width: 4.533333rem;
  border-radius: 0.266667rem;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 0.213333rem;
}
.good_list li .goods_list_img {
  height: 3.453333rem;
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  position: relative;
}
.good_list li .goods_list_img .good_box {
  width: 4.346667rem;
  height: 3.346667rem;
  margin-top: 0.106667rem;
  margin-left: 0.106667rem;
  overflow: hidden;
}
.good_list li .goods_list_img .good_box img {
  width: 100%;
  height: 2.96rem;
}
.good_list li .goods_list_img .good_box span {
  background-color: #fff;
  border-radius: 0.266667rem 0.266667rem 0 0;
  height: 0.386667rem;
  display: block;
}
.good_list li .line {
  margin-left: 0.2rem;
  width: 4.026667rem;
  height: 0.026667rem;
  background-color: #e5e5e5;
}
.good_list li .goods_name {
  display: block;
  height: 0.746667rem;
  font-size: 0.32rem;
  font-weight: 700;
  line-height: 0.746667rem;
  box-sizing: border-box;
  margin-left: 0.2rem;
  width: 4.16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.good_list li .goods_footer {
  height: 0.666667rem;
  margin-top: 0.053333rem;
  background-color: #fff;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
}
.good_list li .goods_footer .goods_footer_right {
  position: absolute;
  right: 0.266667rem;
  width: 0.666667rem;
  height: 0.666667rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.373333rem;
  font-weight: 700;
  background-color: #e45b53;
  color: #fff;
  border-radius: 50%;
}
.good_list li .goods_footer .goods_footer_left {
  height: 0.666667rem;
  margin-left: 0.346667rem;
  display: flex;
  align-items: center;
  position: relative;
}
.good_list li .goods_footer .goods_footer_left img {
  width: 0.36rem;
  height: 0.4rem;
  position: absolute;
  left: 0;
  bottom: 0.08rem;
}
.good_list li .goods_footer .goods_footer_left .goods_price {
  font-size: 0.72rem;
  font-weight: 700;
  color: #C6362E;
  padding-left: 0.453333rem;
}

</style>
