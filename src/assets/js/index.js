import https from '../util/http.js'
$(function() {
  // //   头部数组模板循环
  // var my_item_data

  // // 提示框函数
  // function showtoast(info) {
  //   $('body').toast({
  //     position: 'fixed',
  //     content: info,
  //     duration: 2000,
  //     isCenter: true
  //   })
  // }
  // // 广播
  // async function broadcast () {
  //   const res = await https.post('/wxapp_2019powerbill/jfdh/jfdh_getShowMsg.do', {dataType: 'json'})
  //   if (res.data.list) {
  //     my_item_data = res.data.list
  //   } else {

  //   }
  // }
  // broadcast ()
  // // 广播
  // $.ajax({

  //   	type: 'post',
  //   	url: '/wxapp_2019powerbill/jfdh/jfdh_getShowMsg.do',
  //   	dataType: 'json',
  //   	success: function(data) {
  //   		console.log(data)
  //   		my_item_data = data.list
  //   		var html = template('my_template', { items: my_item_data })
  //   		console.log(html)
  //   	    $('.my_lists').html(html)
  //   		// 头部轮播滚动
  //   	    var mySwiper = new Swiper('.swiper-container', {
  //   	        direction: 'vertical', // 垂直切换选项 horizontal vertical
  //   	        loop: true, // 循环模式选项
  //   	        autoplay: false,
  //   	        autoplay: {
  //   	            delay: 1000, // 1秒切换一次
  //   	            stopOnLastSlide: false,
  //   	            disableOnInteraction: false
  //   	        }
  //   	    })
  //   	}
  // })
  // //   倒计时
  // var maxtime
  // async function countdown () {
  //   const res = await https.post('/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do', {dataType: 'json'})
  //   if (res.data.flag == 1) {
  //     maxtime = res.data.time
  //   } else {
  //     maxtime = ''
  //   }
  //   console.log(maxtime)
  // }
  // countdown ()
  // $.ajax({

  //   	type: 'post',
  //   	url: '/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do',
  //   	dataType: 'json',
  //   	success: function(data) {
  //   		console.log(data)
  //   		if (data.flag == 1) {
  //   			maxtime = data.time
  //   		} else {
  //   			maxtime = ''
  //   		}
  //   	}
  // })
  // console.log(maxtime)
  // if (!maxtime) {
  //   	timer = setInterval(function() {
  //     if (maxtime >= 0) {
  //       var d = parseInt(maxtime / 60 / 60 / 24) > 9 ? parseInt(maxtime / 60 / 60 / 24) : '0' + parseInt(maxtime / 60 / 60 / 24)
  //       var h = parseInt(maxtime / 60 / 60 % 24) > 9 ? parseInt(maxtime / 60 / 60 % 24) : '0' + parseInt(maxtime / 60 / 60 % 24)
  //       var m = parseInt(maxtime / 60 % 60) > 9 ? parseInt(maxtime / 60 % 60) : '0' + parseInt(maxtime / 60 % 60)
  //       var s = parseInt(maxtime % 60) > 9 ? parseInt(maxtime % 60) : '0' + parseInt(maxtime % 60)
  //       maxtime--
  //       $('.tian1').html(parseInt(d / 10))
  //       $('.tian2').html(d % 10)
  //       $('.shi1').html(parseInt(h / 10))
  //       $('.shi2').html(h % 10)
  //       $('.fen1').html(parseInt(m / 10))
  //       $('.fen2').html(m % 10)
  //       $('.miao1').html(parseInt(s / 10))
  //       $('.miao2').html(s % 10)
  //     } else {
  //       clearInterval(timer)
  //       showtoast('时间到，活动结束！')
  //     }
  //   }, 1000)
  // } else {
  //   	$('.tian1').html(0)
  //   $('.tian2').html(0)
  //   $('.shi1').html(0)
  //   $('.shi2').html(0)
  //   $('.fen1').html(0)
  //   $('.fen2').html(0)
  //   $('.miao1').html(0)
  //   $('.miao2').html(0)
  // }
  // var firstType = $('.more_first').attr('data-more-id')
  // var secondType = $('.more_second').attr('data-more-id')
  // var threeType = $('.more_three').attr('data-more-id')
  // var goods_first_data
  // var goods_second_data
  // var goods_three_data
  // var goods_first_html
  // var goods_second_html
  // var goods_three_html

  // // 必抢商品展示
  // async function getBQGoods () {
  //   const res = await https.post('/wxapp_2019powerbill/jfdh/jfdh_getBQGoods.do', {dataType: 'json',type1: firstType, type2: secondType,type3: threeType})
  //   goods_first_data = res.data.list1.length > 2 ? res.data.list1.slice(0, 2) : res.data.list1
  //   goods_second_data = res.data.list2.length > 2 ? res.data.list2.slice(0, 2) : res.data.list2
  //   goods_three_data = res.data.list3.length > 2 ? res.data.list3.slice(0, 2) : res.data.list3
  //   goods_first_html = template('my_goods_first_template', { items: goods_first_data })
  //   goods_second_html = template('my_goods_second_template', { items: goods_second_data })
  //   goods_three_html = template('my_goods_second_template', { items: goods_three_data })
  //   $('.goods_first').html(goods_first_html)
  //     //  智能配件商品列表
  //   $('.goods_second').html(goods_second_html)
  //   //  生活好物商品列表
  //   $('.goods_three').html(goods_three_html)
  // }
  // getBQGoods ()
  // 必抢商品展示
  // $.ajax({
  //   	type: 'post',
  //   	url: '/wxapp_2019powerbill/jfdh/jfdh_getBQGoods.do',
  //   	data: {
  //   		type1: firstType,
  //   		type2: secondType,
  //   		type3: threeType
  //     //    		unionid:goods_unionid,
  //   	},
  //   	dataType: 'json',
  //   	success: function(data) {
  //   		console.log(data)

  //   		goods_first_data = data.list1.length > 2 ? data.list1.slice(0, 2) : data.list1
  //   		goods_second_data = data.list2.length > 2 ? data.list2.slice(0, 2) : data.list2
  //   		goods_three_data = data.list3.length > 2 ? data.list3.slice(0, 2) : data.list3
  //   		goods_first_html = template('my_goods_first_template', { items: goods_first_data })
  //   		goods_second_html = template('my_goods_second_template', { items: goods_second_data })
  //   		goods_three_html = template('my_goods_second_template', { items: goods_three_data })
  //   		$('.goods_first').html(goods_first_html)
  //   	    //  智能配件商品列表
  //   	    $('.goods_second').html(goods_second_html)
  //   	    //  生活好物商品列表
  //   	    $('.goods_three').html(goods_three_html)
  //   	}
  // })

  //  智享生活商品列表

  // console.log(goods_first_html)

  // // 点击任意商品获取商品信息
  // $('.goods').on('click', 'li', function() {
  //   	 var id = $(this).attr('data-id')
  //   $('.myId').val(id)
  //   $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToOneGoodsDetail.do')
  //    	 $('#form').submit()
  // })

  // // 点击兑换更多
  // $('.more').click(function() {
  //   console.log($(this).attr('data-more-id'))
  //   var goodsType = $(this).attr('data-more-id')

  //   $('.goodsType').val(goodsType)
  //   $('#form').attr('action', '/wxapp_2019powerbill/jfdh/jfdh_turnToGoodsList.do')
  //   	$('#form').submit()
  // })

  // // 回到顶部设置
  // var timer = null
  // // 获取页面的可视窗口高度
  // var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
  // // 滚动条滚动时触发
  // window.onscroll = function() {
  //   // 在滚动的时候增加判断
  //   var osTop = document.documentElement.scrollTop || document.body.scrollTop
  //   if (osTop <= 50) {
  //     $('.zd').hide()
  //   } else {
  //     $('.zd').show()
  //   }
  // }
  // // 点击回到顶部
  // $('.zd').on('click', function() {
  //   timer = setInterval(function() {
  //     var current = document.documentElement.scrollTop // 取得当前滚动的距离
  //       ? document.documentElement.scrollTop
  //       : document.body.scrollTop
  //     if (current === 0) {
  //       clearInterval(timer)
  //     }
  //     document.documentElement.scrollTop = current - 50
  //     document.body.scrollTop = current - 50
  //   }, 16)
  // })
})
