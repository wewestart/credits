<template>
  <div class="home"><!-- 头部banner开始 -->
    <div class="header">
      <!-- 广播 -->
      <div class="head">
        <div class="head_left" @click="persentPoints">
          <img
            src="../assets/images/headleft.png"
            alt=""
          > <span>互赠积分</span>
        </div>
        <div class="head_center" >
          <div ref="swiper-container" class="swiper-container mytop">
            <div class="swiper-wrapper my_lists" >
              <div v-for="(item, index) in my_item_data" :key="index" class="swiper-slide mytoplist stop-swiping">
                <img src="../assets/images/laba.png" alt="">
                <span>{{ item.userName }}刚刚成功兑换了{{ item.num }}{{ item.goodsName }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="head_right" @click="activityRules">
          <img
            src="../assets/images/headright.png"
            alt=""
          > <span>活动规则</span>
        </div>
      </div>
      <!-- 积分 -->
      <div class="jf" @click="scoreDetail">
        <span>活动积分</span> <img
          src="../assets/images/jfto.png"
          alt=""
          class="jfto"
        >
      </div>
      <p class="jfNumber" />
      <p class="jfcs">
        有效期:<span class="csTime" />(逾期积分清零)
      </p>
      <div class="jfbtn">
        <img
          src="../assets/images/jfcb.png"
          alt=""
          class="jfcb"
          @click="chongBangDetail"
        > <img
          src="../assets/images/jfdh.png"
          alt=""
          class="jfdh"
          @click="goodsList"
        >
      </div>
    </div>
    <!-- nav导航开始 -->
    <div class="nav">
      <p class="navtitle">赚积分方式</p>
      <ul class="navList">
        <li class="item1">
          <div class="navbox">
            <img
              src="../assets/images/nav1.png"
              alt=""
            >
          </div> <span>注册掌电</span>
        </li>
        <li class="item2">
          <div class="navbox">
            <img
              src="../assets/images/nav2.png"
              alt=""
            >
          </div> <span>推荐好友</span>
        </li>
        <li class="item3" @click="hhList">
          <div class="navbox">
            <img
              src="../assets/images/nav3.png"
              alt=""
            >
          </div> <span>转入户号积分</span>
        </li>
        <li class="item4">
          <div class="navbox">
            <img
              src="../assets/images/nav4.png"
              alt=""
            >
          </div> <span>转入掌电积分</span>
        </li>
        <li class="item5" @click="earnPoints">
          <div class="navbox">
            <span /> <span class="circle" /> <span />
          </div> <span>更多</span>
        </li>

      </ul>
    </div>

    <!-- 倒计时开始 -->

    <div class="lastTime">
      <div class="lastTimeBox">
        <img
          src="../assets/images/lasttimebj.png"
          alt=""
          class="lasttimebj"
        >
        <div class="times">
          <span class="tian1" /> <span class="tian2" /> 天 <span
            class="shi1"
          /> <span class="shi2" /> 时 <span
            class="fen1"
          /> <span class="fen2" /> 分 <span
            class="miao1"
          /> <span class="miao2" /> 秒
        </div>
        <div class="timeInfo">

          <div class="timeInfoCon">
            <span class="timeInfo1" /> 距离豪礼中奖名单公布还剩 <span
              class="timeInfo2"
            />
          </div>

        </div>
        <img
          src="../assets/images/timeImg.png"
          alt=""
          class="timeImg"
        >
      </div>
    </div>
    <img
      src="../assets/images/jfdhhw.png"
      alt=""
      class="jfdhhw"
    >

    <!-- 商品列表开始 -->
    <!-- 智享生活 -->
    <div class="goods ">
      <div class="goods_title">
        <img
          src="../assets/images/zxsh.png"
          alt=""
          class="zxsh"
        > <img
          src="../assets/images/more.png"
          alt=""
          data-more-id="1"
          class="more more_first"
          @click="moreClick('1')"
        >
      </div>
      <ul class="goods_list goods_first">
        <li v-for="(item, index) in goods_first_data" :key="index" :data-id="item.ID" >
          <div class="goods_list_img">
            <div class="good_box">
              <span />
              <img :src="`../assets/${item.PICTURE_URL}`" alt="">
            </div>
            <div class="fast_box">
              必抢
            </div>
          </div>
          <span class="goods_info">{{ item.GOODS_SHOW }}</span>
          <span class="goods_name">{{ item.GOODS_NAME }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.SCORE }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 智能配件 -->
    <div class="goods ">
      <div class="goods_title">
        <img
          src="../assets/images/znpj.png"
          alt=""
          class="zxsh"
        > <img
          src="../assets/images/more.png"
          alt=""
          data-more-id="2"
          class="more more_second"
          @click="moreClick('2')"
        >
      </div>
      <ul class="goods_list goods_second">
        <li v-for="(item, index) in goods_second_data" :key="index" :data-id="item.ID">
          <div class="goods_list_img">
            <div class="good_box">
              <span />
              <img :src="`../assets/${item.PICTURE_URL}`" alt="">
            </div>
            <div class="fast_box">
              必抢
            </div>
          </div>
          <span class="goods_info">{{ item.GOODS_SHOW }}</span>
          <span class="goods_name">{{ item.GOODS_NAME }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.SCORE }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 生活好物 -->
    <div class="goods  last">
      <div class="goods_title">
        <img
          src="../assets/images/shhw.png"
          alt=""
          class="zxsh"
        > <img
          src="../assets/images/more.png"
          alt=""
          data-more-id="3"
          class="more more_three"
          @click="moreClick('3')"
        >
      </div>
      <ul class="goods_list goods_three">
        <li v-for="(item, index) in goods_three_data" :key="index" :data-id="item.ID">
          <div class="goods_list_img">
            <div class="good_box">
              <span />
              <img :src="`../assets/${item.PICTURE_URL}`" alt="">
            </div>
            <div class="fast_box">
              必抢
            </div>
          </div>
          <span class="goods_info">{{ item.GOODS_SHOW }}</span>
          <span class="goods_name">{{ item.GOODS_NAME }}</span>
          <div class="goods_footer">
            <div class="goods_footer_left">
              <img src="../assets/images/footerleft.png" alt="">
              <span class="goods_price">{{ item.SCORE }}</span>
            </div>
            <div class="goods_footer_right">
              抢
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="kong" />

    <img
      src="../assets/images/zd.png"
      alt=""
      class="zd"
    >
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
// @ is an alias to /src
import '@/assets/css/animate.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/css/index.css'
import '@/assets/js/index.js'
import Swiper from '@/assets/js/swiper.min.js'
import http from '@/assets/util/http.js'
import utils from '@/assets/util/util.js'
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      goods_first_data: [],
      goods_second_data: [],
      goods_three_data: [],
      my_item_data: [],
      mySwiper: null,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  activated() {
    this.mySwiper = null
    this.broadcast()
  },
  mounted() {
    console.log(this.$store.getters.defaultParam)
    this.fillTime(0) // 初始化
    var goods_unionid = '${unionid}'
    var nowPoint = '${nowPoint}'
    if (!nowPoint) {
      $('.jfNumber').text(0)
    } else {
      $('.jfNumber').text(nowPoint)
    }
    var jiezhiDate = '${jiezhiDate}'

    var ifjf = $('.jfNumber').text()
    if (ifjf === 0) {
      $('.jfcs').text('快快去赚积分大波奖品等你拿~')
    } else {
      $('.csTime').text(jiezhiDate)
    }
    this.broadcast()
    this.countdown()
    this.getBQGoods()
    $('.goods').on('click', 'li', () => {
      console.log(445)
    	var id = $(this).attr('data-id')
      $('.myId').val(id)
      this.turnToOneGoodsDetail()
    // $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToOneGoodsDetail.do')
    //   $('#form').submit()
    })
    // // 点击兑换更多
    // $('.more').click(() => {
    //   console.log($(this).attr('data-more-id'))
    //   var goodsType = $(this).attr('data-more-id')
    //   console.log(goodsType)
    //   $('.goodsType').val(goodsType)
    //   const ob = JSON.parse(utils.serializeToJson('form'))
    //   console.log(ob)
    //   this.turnToGoodsList(ob)
    // // $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToGoodsList.do')
    // // 	$('#form').submit()
    // })
    // 回到顶部设置
    var timer = null
    // 获取页面的可视窗口高度
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    // 滚动条滚动时触发
    window.onscroll = function() {
      // 在滚动的时候增加判断
      var osTop = document.documentElement.scrollTop || document.body.scrollTop
      if (osTop <= 50) {
        $('.zd').hide()
      } else {
        $('.zd').show()
      }
    }
    // 点击回到顶部
    $('.zd').on('click', function() {
      timer = setInterval(function() {
        var current = document.documentElement.scrollTop // 取得当前滚动的距离
          ? document.documentElement.scrollTop
          : document.body.scrollTop
        if (current === 0) {
          clearInterval(timer)
        }
        document.documentElement.scrollTop = current - 50
        document.body.scrollTop = current - 50
      }, 16)
    })
  },
  methods: {
    getQueryString() { // 解析URL参数
      var after = window.location.search
      if (after.indexOf('?') === -1) return null // 如果url中没有传参直接返回空
      // key存在先通过search取值如果取不到就通过hash来取
      after = after.substr(1) || window.location.hash.split('?')[1]
      if (after) {
        return decodeURIComponent(after)
      } else {
        return null
      }
    },
    getswipers() {
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
    },
    moreClick(goodsType) { // 点击兑换更多
      $('.goodsType').val(goodsType)
      const ob = JSON.parse(utils.serializeToJson('form'))
      this.turnToGoodsList(ob)
    },
    scoreDetail() {
      this.$router.push({ path: '/scoreDetail' })
    },
    activityRules() {
      this.$router.push({ path: '/activityRules' })
    },
    persentPoints() {
      this.$router.push({ path: '/persentPoints' })
    },
    earnPoints() {
      this.$router.push({ path: '/earnPoints' })
    },
    hhList() {
      this.$router.push({ path: '/hhList' })
    },
    chongBangDetail() {
      this.$router.push({ path: '/chongBangDetail' })
    },
    goodRecord() {
      this.$router.push({ path: '/goodRecord' })
    },
    goodsList() {
      this.$router.push({ path: '/goodsList' })
    },
    async turnToGoodsList(obj) {
      // const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_turnToGoodsList.do', { dataType: 'json' })
      this.$router.push({ path: '/goodsList', query: obj })
    },
    async turnToOneGoodsDetail() {
      // const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_turnToOneGoodsDetail.do', { dataType: 'json' })
      this.$router.push({ path: '/oneGoodsDetail' })
    },
    async broadcast() { // 广播
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getShowMsg.do', { dataType: 'json' })
      if (res.data.list) {
        this.my_item_data = res.data.list
        this.getswipers()
      }
    },
    async countdown() { // 倒计时
      let maxtime = 0
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do', { dataType: 'json' })
      if (res.data.flag === '1') {
        maxtime = res.data.time
      } else {
        maxtime = ''
      }
      this.fillTime(maxtime)
    },
    fillTime(maxtime) { // 填充倒计时
      const that = this
      var timer = null
      if (maxtime) {
    	  timer = setInterval(function() {
          if (maxtime >= 0) {
            var d = parseInt(maxtime / 60 / 60 / 24) > 9 ? parseInt(maxtime / 60 / 60 / 24) : '0' + parseInt(maxtime / 60 / 60 / 24)
            var h = parseInt(maxtime / 60 / 60 % 24) > 9 ? parseInt(maxtime / 60 / 60 % 24) : '0' + parseInt(maxtime / 60 / 60 % 24)
            var m = parseInt(maxtime / 60 % 60) > 9 ? parseInt(maxtime / 60 % 60) : '0' + parseInt(maxtime / 60 % 60)
            var s = parseInt(maxtime % 60) > 9 ? parseInt(maxtime % 60) : '0' + parseInt(maxtime % 60)
            maxtime--
            $('.tian1').html(parseInt(d / 10))
            $('.tian2').html(d % 10)
            $('.shi1').html(parseInt(h / 10))
            $('.shi2').html(h % 10)
            $('.fen1').html(parseInt(m / 10))
            $('.fen2').html(m % 10)
            $('.miao1').html(parseInt(s / 10))
            $('.miao2').html(s % 10)
          } else {
            clearInterval(timer)
            that.showtoast('时间到，活动结束！')
          }
        }, 1000)
      } else {
  	    $('.tian1').html(0)
        $('.tian2').html(0)
        $('.shi1').html(0)
        $('.shi2').html(0)
        $('.fen1').html(0)
        $('.fen2').html(0)
        $('.miao1').html(0)
        $('.miao2').html(0)
      }
    },
    async getBQGoods() { // 必抢商品
      var firstType = $('.more_first').attr('data-more-id')
      var secondType = $('.more_second').attr('data-more-id')
      var threeType = $('.more_three').attr('data-more-id')
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getBQGoods.do', { dataType: 'json', type1: firstType, type2: secondType, type3: threeType })
      if (res.data.list1.length) {
        this.goods_first_data = res.data.list1.length > 2 ? res.data.list1.slice(0, 2) : res.data.list1
      }
      if (res.data.list2.length) {
        this.goods_second_data = res.data.list2.length > 2 ? res.data.list2.slice(0, 2) : res.data.list2
      }
      if (res.data.list3.length) {
        this.goods_three_data = res.data.list3.length > 2 ? res.data.list3.slice(0, 2) : res.data.list3
      }
      console.log(this.goods_first_data)
    }
  }
}
</script>
<style scoped>
.home{
  background-color: #bc1b2b;
  width: 100%;
  height: 100%;
}
</style>
