<template>
  <div class="OneGoodsDetail">
    <img src="" alt="" class="good">
    <div class="info">
      <span class="goodName"/>
      <div class="info_footer">
        <div class="info_footer_left">
          <img src="../assets/images/icon1.jpg" alt="">
          <span class="goodSprice"/>
          <span>积分</span>
        </div>
        <div class="info_footer_right">
          <span>市场参考价:</span>
          <span class="yuansprice"/>
        </div>
      </div>
    </div>
    <div class="title">商品详情</div>
    <ul class="imglist">
      <li class="imgitems"/>
    </ul>
    <div class="btns">
      <span class="btnTo">立即兑换</span>
    </div>
    <img src="../assets/images/zd.png" alt="" class="zd">

    <div class="mask"/>

    <div class="pop">
      <div class="pop_top">
        <img src="../assets/images/goodDetail.jpg" alt="" class="goodDetail">
        <div class="pop_top_right">
          <span class="pop_good_name">商品名称商品名称商品名称商品名称商品名称商品名称商品名称</span>
          <div class="pop_top_right_sprice">
            <img src="../assets/images/icon1.jpg" alt="">
            <span class="goodNumber"/>
            <span class="jfspan">积分</span>
          </div>
        </div>
        <img src="../assets/images/goodClose.jpg" alt="" class="goodClose">
      </div>
      <div class="pop_center">
        <span>支付</span>
        <div class="pop_center_right">
          <img src="../assets/images/footerleft.png" alt="" class="footerleft">
          <span class="sumNumber"/>
          <span class="pop_center_right_name">积分</span>
        </div>
      </div>
      <div class="pop_footer">
        <span>数量</span>
        <div class="tools">
          <div class="cut ">-</div>
          <input type="number" class="jfNumber " value="1" pattern="[0-9]*">
          <div class="add ">+</div>
        </div>
      </div>
      <div class="pop_footer_btn">
        <span class="pop_footer_btn_to">
          立即兑换
        </span>
      </div>
    </div>

    <div class="pop1">
      <img src="../assets/images/goodtitle.jpg" alt="" class="goodtitle">
      <div class="pop1_info">哎呀，活动积分不够~</div>
      <div class="pop1_nav">
        <div class="pop1_nav_left">
          <img src="../assets/images/btn-1.png" alt="">
          <span>转入户号积分</span>
        </div>
        <div class="pop1_nav_right">
          <img src="../assets/images/btn-2.png" alt="">
          <span>转入掌电积分</span>
        </div>

      </div>
      <div class="pop1_btn">
        <span class="btn1">去转换</span>
        <span class="btn2">去转换</span>
      </div>
      <div class="pop1_footer">
        <span class="pop1_footer_btn1">取消</span>
        <span class="pop1_footer_btn2">赚积分</span>
      </div>
    </div>

    <form id="form" action="">
      <input type="hidden" value="${openid}" name="openid">
      <input type="hidden" value="${noncestr}" name="noncestr">
      <input type="hidden" value="${timestamp}" name="timestamp">
      <input type="hidden" value="${sign}" name="sign">
      <input type="hidden" value="${unionid}" name="unionid">
      <input type="hidden" name="goodsNumber" class="goodsNumber">
      <input type="hidden" name="goodId" class="goodId" >
    </form>
  </div>
</template>
<script>
import '@/assets/css/goodDetail.css'
// import '@/assets/css/layui.css'
import '@/assets/css/animate.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/js/layui.all.js'
import http from '@/assets/util/http.js'
export default {
  name: 'OneGoodsDetail',
  components: {
  },
  data() {
    return {
      my_item_data: [],
      msg: ''
    }
  },
  mounted() {
    var unionid = '${unionid}'
    // 商品id
    var myID = '${myId}'
    console.log(myID)

    // 开始默认价格
    var sprice = $('.goodNumber').text()
    $('.sumNumber').text(sprice)
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

    // 点击兑换
    $('.btnTo').on('click', function() {
      $('body').addClass('active')
      $('.pop_good_name').text($('.goodName').text())
      $('.goodNumber').text($('.goodSprice').text())
      $('.sumNumber').text($('.goodSprice').text() * Number($('.jfNumber').val()))
      $('.mask').show()
      $('.pop').show()
    })
    // 点击减号
    $('.cut').on('click', function() {
      var jfNumber = Number($('.jfNumber').val())
      if (jfNumber <= 1) {
        return false
      } else {
        jfNumber = jfNumber - 1
        $('.jfNumber').val(jfNumber)
        $('.sumNumber').text($('.goodSprice').text() * Number($('.jfNumber').val()))
      }
    })
    $('.add').on('click', function() {
      var jfNumber = Number($('.jfNumber').val())

      jfNumber = jfNumber + 1
      $('.jfNumber').val(jfNumber)
      $('.sumNumber').text($('.goodSprice').text() * Number($('.jfNumber').val()))
    })
    $('.jfNumber ').on('input', function() {
    	if (Number($('.jfNumber').val()) % 1 != 0) {
    		return false
    	}
    	$('.sumNumber').text($('.goodSprice').text() * Number($('.jfNumber').val()))
    })
    // 点击叉号
    $('.goodClose').on('click', function() {
      $('.pop').hide()
      $('.mask').hide()
      $('body').removeClass('active')
    })
    $('.pop1_footer_btn1').on('click', function() {
      $('.pop1').hide()
      $('.mask').hide()
      $('body').removeClass('active')
    })
    // 点击赚积分
    // 转入户号积分
    $('.btn1').on('click', function() {
      $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToHhjfzh.do')
      $('#form').submit()
    })
    // 转入掌电积分
    $('.btn2').on('click', function() {
      window.location.href = 'https://deb-testenv.95598pay.com:12111/html/jiangsu/jiangsuPoints.html?mobile=' + '${strCiphertext}' + '&unionid=' + '${unionid}'
    })
    this.getOneGoodsDetail()
    this.getScoreDetails()
  },
  methods: {
    async getOneGoodsDetail() {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getOneGoodsDetail.do', { dataType: 'json', id: '' })
      if (res.data.result) {
        $('.goodName').text(res.data.result.GOODS_NAME)
    		$('.goodSprice').text(res.data.result.SCORE)
    		$('.yuansprice').text(res.data.result.PRICE + '元')
    		const imgUrl = JSON.parse(res.data.picList).list
    		$('.good').attr('src', '../' + imgUrl[0])

    		// var html = template('my_template', { items:imgUrl.slice(1) });
    		// console.log(html)
    	    // $('.imgitems').html(html);
    		// console.log(imgUrl)
    		// layui.use('flow',function(){
    		// 	var flow=layui.flow;
    		// 	flow.lazyimg({
        	// 		elem:'.imglist img',
        	// 		scrollElem:'.imglist'
        	// 	})
    		// })
      }
    },
    async getScoreDetails() {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getScoreDetails.do', { dataType: 'json', unionid: '' })
      if (res.data) {
        var sumNumber = Number($('.sumNumber').text())
        var canUseScore = Number(res.data.canUseScore)
        if (canUseScore > sumNumber) {
          // 可以跳
          $('.goodsNumber').val($('.jfNumber ').val())
          $('.goodId').val('4484')
          // $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToOrder.do')
          // $('#form').submit()
        			console.log(1111)
        } else {
          $('.pop').hide()
          $('.pop1').show()
        }
      }
    }
  }
}
</script>
