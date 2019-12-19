$(function() {
  // var fig=1;
  // 提示框函数
  // function showtoast(info) {
  //   $('body').toast({
  //     position: 'fixed',
  //     content: info,
  //     duration: 2000,
  //     isCenter: true
  //   })
  // }

  // console.log(unionid)
  // // 获取后台数据
  // function getData() {
  //   $.post(
  //     '/wxapp_2019powerbill/jfdh/jfdh_getScoreChangeJl.do',
  //     {
  //       unionid: unionid
  //     },
  //     function(data, status) {
  //       var re = JSON.parse(data)
  //       renderPage(re)
  //       console.log(data)
  //       getDetails(re.list)
  //       if (re.canUseScore == '0' && re.useredScore == '0') {
  //         jfjfymInfo(0)
  //       } else {
  //         jfjfymInfo(1)
  //       }
  //     }
  //   )
  // }
  // 判断是否有积分记录显示不同页面

  // function jfjfymInfo(fig) {
	//    if (fig == 1) {
	//         $('.L_nopoints').css('display', 'none')
	//         $('.L_fig1').css('display', 'block')
	//     } else {
	//         $('.L_nopoints').css('display', 'block')
	//         $('.L_fig1').css('display', 'none')
	//     }
  // }

  // // 渲染页面积分数据
  // function renderPage(obj) {
  //   $('.L_kyval').html(obj.canUseScore)
  //   $('.L_yyval').html(obj.useredScore)
  // }
  // var my_item_data = []
  // //    渲染转换详情
  // function getDetails(obj) {
  //   	console.log(obj)
  //   	var temp = {}
  //   	obj.map(function(item) {
  //   	    if (!temp[item['CREATE_TIME'].substr(0, 7)]) {
  //   	         temp[item['CREATE_TIME'].substr(0, 7)] = []
  //   	    }

  //   	    temp[item['CREATE_TIME'].substr(0, 7)].push(item)
  //   	})

  //   	console.log(temp)

  //   	console.log(Object.values(temp))
  //   	var t = Object.values(temp)
  //   	var s = Object.keys(temp)

  //   	for (var i = 0; i < t.length; i++) {
  //   		var temps = { time: '', list: '' }
  //   		temps.time = s[i]
  //   		temps.list = t[i]
  //   		my_item_data.push(temps)
  //   	}

  //   	console.log(my_item_data)
  //   	 var html = template('my_template', { items: my_item_data })
  //   	    console.log(html)
  //   	     $('.L_fig1').html(html)
  // }

  // 快快去赚积分
  $('.L_btn').click(function() {

  })
  // 有积分页面积分明细展示
  var t = -1
  if (t > 0) {
    console.log('111')
  } else {
    console.log('222')
  }

  // getData()
})
