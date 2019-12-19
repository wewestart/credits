$(function() {
  // 提示框函数
  // function showtoast(info) {
  //   $('body').toast({
  //     position: 'fixed',
  //     content: info,
  //     duration: 2000,
  //     isCenter: true
  //   })
  // }
  // 获取后台数据
  // function getData() {
  //   $.post(
  //     '/wxapp_2019powerbill/jfdh/jfdh_getChongBangDetails.do',
  //     function(data, status) {
  //       var re = JSON.parse(data)
  //       console.log(re)
  //       getDetails(re)
  //     }
  //   )
  // }
  var my_item_data = []

  function getDetails(obj) {
    	console.log(obj.list)
    	my_item_data = obj.list
    	console.log(my_item_data)
    	 var html = template('my_template', { items: my_item_data })
    	    console.log(html)
    	    $('.L_list').html(html)
  }
  //   获取倒计时数据
  var maxtime

  function getTime() {
    $.post(
      '/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do',
      function(data, status) {
        var re = JSON.parse(data)
        console.log(re)
        if (re.flag == 1) {
	    			maxtime = re.time
	    		} else {
	    			maxtime = ''
	    		}
      }
    )
  }
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
  //   倒计时
  //     var maxtime = 1 * 1 * 1 * 10;
  //     var mytimer = setInterval(function () {
  //         if (maxtime >= 0) {
  //             var d = parseInt(maxtime / 60 / 60 / 24) > 9 ? parseInt(maxtime / 60 / 60 / 24) : '0' + parseInt(maxtime / 60 / 60 / 24);
  //             var h = parseInt(maxtime / 60 / 60 % 24) > 9 ? parseInt(maxtime / 60 / 60 % 24) : '0' + parseInt(maxtime / 60 / 60 % 24);
  //             var m = parseInt(maxtime / 60 % 60) > 9 ? parseInt(maxtime / 60 % 60) : '0' + parseInt(maxtime / 60 % 60);
  //             var s = parseInt(maxtime % 60) > 9 ? parseInt(maxtime % 60) : '0' + parseInt(maxtime % 60);
  //             maxtime--;
  //             $('.tian1').html(parseInt(d / 10))
  //             $('.tian2').html(d % 10)
  //             $('.shi1').html(parseInt(h / 10))
  //             $('.shi2').html(h % 10)
  //             $('.fen1').html(parseInt(m / 10))
  //             $('.fen2').html(m % 10)
  //             $('.miao1').html(parseInt(s / 10))
  //             $('.miao2').html(s % 10)
  //         } else {
  //             clearInterval(mytimer);
  //             //showtoast('时间到，活动结束！')
  //         }
  //     }, 1000);
  //  查看0元夺豪礼规则
  // $('.L_ruleBtn').click(function (){
  //   alert('1');
  // });
  //  我要冲榜  去赚积分
  // $('.L_atlistBtn').click(function (){
  //   alert('2');
  // });

  // getTime()
  // getData()
})
