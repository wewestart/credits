$(function() {
//   var goods_first_data
//   var goods_second_data
//   var goods_three_data
//   var goods_four_data
//   var goods_first_html
//   var goods_second_html
//   var goods_three_html
//   var goods_four_html

//   $('.good_nav li').on('click', function() {
//     $(this).addClass('active').siblings().removeClass('active')
//     var dataId = $(this).attr('data-id') - 1
//     $('.good_list').find('ul').eq(dataId).addClass('active').siblings().removeClass('active')
//     $.ajax({
//         	type: 'post',
//         	url: '/wxapp_2019powerbill/jfdh/jfdh_getGoodsDetails.do',
//         	dataType: 'json',
//         	data: {
//         		type: goodsType,
//           		pageSize: '100',
//           		pageNo: '1',
//           		score: dataId
//         	},
//         	success: function(data) {
//         		console.log(data)
//         		if (dataId == 1) {
//         			 goods_second_data = data.list
//         			 goods_second_html = template('my_goods_second_template', { items: goods_second_data })
//         			$('.goodList2').html(goods_second_html)
//         			layui.use('flow', function() {
//             			var flow = layui.flow
//             			flow.lazyimg({
//                 			elem: '.goodList2 img',
//                 			scrollElem: '.goodList2'
//                 		})
//             		})
//         		} else if (dataId == 2) {
//         			 goods_three_data = data.list
//         			 goods_three_html = template('my_goods_three_template', { items: goods_three_data })
//         			$('.goodList3').html(goods_three_html)
//         			layui.use('flow', function() {
//             			var flow = layui.flow
//             			flow.lazyimg({
//                 			elem: '.goodList3 img',
//                 			scrollElem: '.goodList3'
//                 		})
//             		})
//         		} else if (dataId == 3) {
//         			 goods_four_data = data.list
//         			 goods_four_html = template('my_goods_four_template', { items: goods_four_data })
//         			$('.goodList4').html(goods_four_html)
//         			layui.use('flow', function() {
//             			var flow = layui.flow
//             			flow.lazyimg({
//                 			elem: '.goodList4 img',
//                 			scrollElem: '.goodList4'
//                 		})
//             		})
//         		} else {
//         			 goods_first_data = data.list
//             		 goods_first_html = template('my_goods_first_template', { items: goods_first_data })
//             		$('.goodList1').html(goods_first_html)
//             		layui.use('flow', function() {
//             			var flow = layui.flow
//             			flow.lazyimg({
//                 			elem: '.goodList1 img',
//                 			scrollElem: '.goodList1'
//                 		})
//             		})
//         		}
//         	}
//     })
//   })
  // 广播
//   $.ajax({

//     	type: 'post',
//     	url: '/wxapp_2019powerbill/jfdh/jfdh_getShowMsg.do',
//     	dataType: 'json',
//     	success: function(data) {
//     		console.log(data)
//     		my_item_data = data.list
//     		var html = template('my_template', { items: my_item_data })
//     	    $('.my_lists').html(html)
//     		// 头部轮播滚动
//     	    var mySwiper = new Swiper('.swiper-container', {
//     	        direction: 'vertical', // 垂直切换选项 horizontal vertical
//     	        loop: true, // 循环模式选项
//     	        autoplay: false,
//     	        autoplay: {
//     	            delay: 1000, // 1秒切换一次
//     	            stopOnLastSlide: false,
//     	            disableOnInteraction: false
//     	        }
//     	    })
//     	}
//   })
  // 积分总数
//   $.ajax({
//     	type: 'post',
//     	url: '/wxapp_2019powerbill/jfdh/jfdh_getScoreDetails.do',
//     	dataType: 'json',
//     	data: {
//     		unionid: unionid
//     	},
//     	success: function(data) {
//     		$('.jf_num').text(data.canUseScore)
//     	}
//   })

//   // 商品总数据
//   $.ajax({
//     	type: 'post',
//     	url: '/wxapp_2019powerbill/jfdh/jfdh_getGoodsDetails.do',
//     	dataType: 'json',
//       	data: {
//       		type: goodsType,
//       		pageSize: '100',
//       		pageNo: '1',
//       		score: ''
//     	},
//     	success: function(data) {
//     		console.log(data)
//     		 goods_first_data = data.list
//     		 goods_first_html = template('my_goods_first_template', { items: goods_first_data })
//     		$('.goodList1').html(goods_first_html)
//     		layui.use('flow', function() {
//     			var flow = layui.flow
//     			flow.lazyimg({
//         			elem: '.goodList1 img',
//         			scrollElem: '.goodList1'
//         		})
//     		})
//     	}
//   })

  //  全部商品列表

  // 图片流加载
//   layui.use('flow', function() {
//     var flow = layui.flow
//     // 按屏加载图片
//     flow.lazyimg({
//       elem: '.goodList1 img'
//     })
//     flow.lazyimg({
//       elem: '.goodList2 img'
//     })
//     flow.lazyimg({
//       elem: '.goodList3 img'
//     })
//     flow.lazyimg({
//       elem: '.goodList4 img'
//     })
//   })
})
