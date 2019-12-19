<template>
  <div class="ChongBangDetail">
    <div class="L_head zzCenter flex"><img src="../assets/images/0yHead.png" alt=""></div>
    <div class="L_conten ">
      <div class="zzCenter  flex" style="position: relative;">

        <img class="L_tximg" src="../assets/images/glz.png" alt="">
        <div class="L_headimg ">
          <img src="${picture}" alt="">
        </div>

      </div>
      <div class="L_vote">
        <p>当前排名</p>
        <p class="color_F"><span class="L_ranking" />名</p>
        <!--  <p>当前共有<span>${totalPeople}</span>冲榜</p>-->
      </div>
      <!-- 倒计时开始 -->
      <div class="lastTime zzCenter  flex">
        <div class="lastTimeBox">
          <div class="times">
            <span class="tian1" />
            <span class="tian2" />
            天
            <span class="shi1" />
            <span class="shi2" />
            时
            <span class="fen1" />
            <span class="fen2" />
            分
            <span class="miao1" />
            <span class="miao2" />
            秒
          </div>
          <div class="timeInfo">

            <div class="timeInfoCon">
              <span class="timeInfo1" />
              距离豪礼中奖名单公布还剩
              <span class="timeInfo2" />
            </div>

          </div>
        </div>
      </div>
      <div style="margin-top: .266667rem;">
        <div class=" zzCenter flex">
          <img src="../assets/images/timeImg.png" class="L_timeImg " alt="">
        </div>

        <p class="L_ruleBtn">查看0元夺豪礼规则>></p>
      </div>
      <div class="L_userList flex zzCenter">
        <div style="width: 95%;">
          <div class=" zzCenter flex">
            <img src="../assets/images/banner.png" alt="" style="width: 80%;height:1.667rem">
          </div>
          <div class="zzBetween flex L_listHead">
            <div>用户</div>
            <div>活动积分</div>
          </div>
          <ul class="L_list">
            <li v-for="(item, index) in my_item_data" :key="index" class="zzBetween flex">
              <div v-if="item.PIC" class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">{{ item.USERNAME }}</span>
              </div>
              <div v-else class="flex qxCenter zzCenter">
                <img class="L_listImg" :src="item.PIC" alt="">
                <span class="L_userName">{{ item.USERNAME }}</span>
              </div>
              <div v-if="item.AGE==1" class="flex qxCenter zzCenter color_J">
                <span class="">{{ item.SCORE }}</span>
                活动积分
              </div>
              <div v-else class="flex qxCenter zzCenter">
                <span class="">{{ item.SCORE }}</span>
                活动积分
              </div>
            </li>
            <!-- <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li>
            <li class="zzBetween flex">
              <div class="flex qxCenter zzCenter">
                <img class="L_listImg" src="../assets/images/toxiang.jpg" alt="">
                <span class="L_userName">用户名称名称</span>
              </div>
              <div class="flex qxCenter zzCenter color_J">
                <span class="">3000</span>
                活动积分
              </div>
            </li> -->

          </ul>

        </div>
      </div>
    </div>
    <div class=" zzCenter flex">
      <div class="L_atlistBtn qxCenter zzCenter flex" @click="earnPoints">
        我要冲榜  去赚积分
      </div>
    </div>
    <img src="../assets/images/zd.png" alt="" class="zd">

    <form id="form" action="">
      <input type="hidden" value="${openid}" name="openid">
      <input type="hidden" value="${noncestr}" name="noncestr">
      <input type="hidden" value="${timestamp}" name="timestamp">
      <input type="hidden" value="${sign}" name="sign">
      <input type="hidden" value="${unionid}" name="unionid">
    </form>
  </div>
</template>
<script>
import '@/assets/css/animate.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/css/integralRushed.css'
import '@/assets/css/Global.css'
import '@/assets/js/layui.all.js'
import '@/assets/js/mui.min.js'
import http from '@/assets/util/http.js'
export default {
  name: 'ChongBangDetail',
  components: {
  },
  data() {
    return {
      goods_first_data: [],
      goods_second_data: [],
      goods_three_data: [],
      my_item_data: [],
      msg: ''
    }
  },
  mounted() {
    this.getData()
    this.getTime()
    var ranking = '${ranking}'
    if (ranking == '') {
    	$('.L_ranking').html('2000+')
    } else {
    	$('.L_ranking').html(ranking)
    }
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
    earnPoints() {
      this.$router.push({ path: '/earnPoints' })
    },
    async getData() { // 获取后台数据
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getChongBangDetails.do', { dataType: 'json' })
      if (res.data) {
        var re = res.data.list
        this.my_item_data = re
        this.getDetails(re)
      }
    },
    getDetails(obj) {

    },
    async getTime() {
      let maxtime = 0
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do', { dataType: 'json' })
      if (res.data.flag === '1') {
        maxtime = res.data.time
      } else {
        maxtime = ''
      }
      this.fillTime(maxtime)
    },
    fillTime(maxtime) {
      const that = this
      let timer = null
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
    }
  }
}
</script>
<style scoped>
.ChongBangDetail{
  position: relative;
  width: 100%;
  height: 100%;
  /* float: left; */
}
/* 0元夺豪礼 */
.L_head{
    width: 100%;
    z-index: 2;
    position: absolute;
}
.L_head img{
    width: 90%;
    height:2.97334rem
}
.L_conten{
    /* height: 163%; */
        min-height: 165%;
        overflow-y:auto;
        overflow-x:hidden;

    background-image: url(../assets/images/dkbj.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: 100%;
    margin-top: 1.066667rem;
    padding-top: 1.066667rem;
}
.L_tximg{
    margin-top: .64rem;
    width: 2.346667rem;
    height:1.8rem;
}
.L_headimg{
    width: 1.613333rem;
    border: 2px solid #fff;
    height:  1.613333rem;
    border-radius: 50%;
    position: absolute;
    top: 0.493333rem;
}
.L_headimg img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.L_vote {
    margin-top: .32rem;
}
.L_vote p{
    font-size: .333333rem;
    color: #ffc67e;
    text-align: center;
}
.L_vote p .L_ranking{
    font-size: .56rem;
}
/* 计时器 */

  /* .lastTime .lastTimeBox {
    width: 8.893333rem;
    border-radius: 0.266667rem;

    transform: translate(-50%, -50%);
    background-color: #E84C4D;
    box-shadow: 0.08rem 0.08rem 0 #9e2422;
  } */
  .lastTime .lastTimeBox .lasttimebj {
    width: 8.506667rem;
    height: 2.546667rem;
    position: absolute;
    left: 50%;
    transform: translateX(-48%);
    top: -1.626667rem;
  }
  .lastTime .lastTimeBox .times {
    height: 0.8rem;
    width: 100%;
    margin-top: .533333rem;
    font-size: 0.32rem;
    color: #F8C8A9;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lastTime .lastTimeBox .times > span {
    width: 0.48rem;
    height: 0.8rem;
    border-radius: 0.08rem;
    background-color: #e8bb8c;
    color: #c12223;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .lastTime .lastTimeBox .times .tian1,
  .lastTime .lastTimeBox .times .shi1,
  .lastTime .lastTimeBox .times .fen1,
  .lastTime .lastTimeBox .times .miao1 {
    margin-right: 0.106667rem;
    margin-left: 0.106667rem;
  }
  .lastTime .lastTimeBox .times .tian2,
  .lastTime .lastTimeBox .times .shi2,
  .lastTime .lastTimeBox .times .fen2,
  .lastTime .lastTimeBox .times .miao2 {
    margin-right: 0.106667rem;
  }
  .lastTime .lastTimeBox .timeInfo {
    height: 0.853333rem;
    display: flex;
    width: 100%;
    justify-content: center;
    font-size: 0.32rem;
    font-weight: 700;
    align-items: center;
  }
  .lastTime .lastTimeBox .timeInfo .timeInfoCon {
    position: relative;
    color: #F8C8A9;
  }
  .lastTime .lastTimeBox .timeInfo .timeInfoCon .timeInfo1,
  .lastTime .lastTimeBox .timeInfo .timeInfoCon .timeInfo2 {
    position: absolute;
    width: 0.48rem;
    height: 1px;
    top: 50%;
    background-color: #F8C8A9;
  }
  .lastTime .lastTimeBox .timeInfo .timeInfoCon .timeInfo1 {
    left: -24px;
  }
  .lastTime .lastTimeBox .timeInfo .timeInfoCon .timeInfo2 {
    right: -24px;
  }
  .lastTime .lastTimeBox .timeImg {
    width: 8.12rem;
    height: 4.186667rem;
    margin-top: 0.506667rem;
    margin-left: 0.4rem;
  }
  .L_timeImg{
      width: 8.133333rem;
      height: 4.133333rem;
  }
  .L_ruleBtn{
      text-align: center;
      color: #ffc67e;
  }
  /* 用户列表 */
  .L_userList{
     margin-top: 1.8rem;

  }

  .L_listHead div{
    width: 50%;
    text-align: center;
    font-size: .32rem;
    font-weight: bold;
    margin-top: .533333rem;
    font-size: .32rem;
  }
  .L_list{
  height:13rem;
  overflow-y:auto;
  overflow-x:hidden;
  }
  .L_list li{
    height: 1.333333rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .L_list li div{
      width: 50%;
   }
  .L_listImg{
      width: .826667rem;
      height: .826667rem;
      border-radius: 50%;
  }
  .L_userName{
      margin-left: .16rem;
  }
  .L_atlistBtn{
      width: 90%;
      height: 1.333333rem;
      background-image: url(../assets/images/zjfbtn.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-size: .533333rem;
      color: #c3182c;
     margin-top: .4rem;
     margin-bottom: .533333rem;
  }
  .zd {
    width: 1.066667rem;
    height: 1.066667rem;
    position: fixed;
    right: 0.493333rem;
    bottom: 2.48rem;
    z-index: 10;
    display: none;
  }
</style>
