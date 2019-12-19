<template>
  <div class="scoreDetail">
    <div class="L_wrappe">
      <!-- 头部背景红色图片 -->
      <!-- 可用积分 活动已用积分 -->
      <div class="zzCenter flex">
        <div class="L_integral zzBetween flex">
          <div class="zzCenter flex qxCenter  " style=" border-right: 1px solid #f3f3f3;">
            <div class="L_kyintegral">
              <p>可用活动积分</p>
              <p class="L_kyval">4200</p>
            </div>
          </div>
          <div class="zzCenter flex qxCenter  ">
            <div class="L_yyintegral">
              <p>已用活动积分</p>
              <p class="L_yyval">200</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 使用列表 -->
      <div class="L_fig1">
        <!-- <div class="L_jfList">
                <div class="L_month qxCenter flex">2019年11月</div>
                <ul style="background: #fff; padding: 0 .306667rem;" class="L_menuList">
                    <li class="flex zzBetween">
                        <div class="L_height60">
                            <p class="L_dotitle">户号转入</p>
                            <p class="L_syhdjf">剩余活动积分：<span class="L_syjfval">4200</span></p>
                        </div>
                        <div class=" L_height60">
                            <p class="L_zrjfval L_just">+200</p>
                            <p class="L_gxtime">2019-11-11 10:00</p>
                        </div>
                    </li>
                    <li class="flex zzBetween">
                            <div class="L_height60">
                                <p class="L_dotitle">户号转入</p>
                                <p class="L_syhdjf">剩余活动积分：<span class="L_syjfval">4200</span></p>
                            </div>
                            <div class=" L_height60">
                                <p class="L_zrjfval L_just">+200</p>
                                <p class="L_gxtime">2019-11-11 10:00</p>
                            </div>
                        </li>
                </ul>
            </div>
            <div class="L_jfList">
                    <div class="L_month qxCenter flex">2019年11月</div>
                    <ul style="background: #fff; padding: 0 .306667rem;" class="L_menuList">
                        <li class="flex zzBetween">
                            <div class="L_height60">
                                <p class="L_dotitle">户号转入</p>
                                <p class="L_syhdjf">剩余活动积分：<span class="L_syjfval">4200</span></p>
                            </div>
                            <div class=" L_height60">
                                <p class="L_zrjfval L_just">+200</p>
                                <p class="L_gxtime">2019-11-11 10:00</p>
                            </div>
                        </li>
                        <li class="flex zzBetween">
                                <div class="L_height60">
                                    <p class="L_dotitle">户号转入</p>
                                    <p class="L_syhdjf">剩余活动积分：<span class="L_syjfval">4200</span></p>
                                </div>
                                <div class=" L_height60">
                                    <p class="L_zrjfval L_just">+200</p>
                                    <p class="L_gxtime">2019-11-11 10:00</p>
                                </div>
                            </li>
                    </ul>
                </div>-->
      </div>
      <!-- 当积分为0是替换使用列表 -->
      <div class="L_nopoints">
        <div class="zzCenter flex">
          <img src="../assets/images/zwjfhd.png" alt="" class="L_wujif">

        </div>
        <div class="L_tag">暂无活动积分</div>
        <div class="zzCenter flex">
          <div class="L_btn">快快去 赚积分</div>
        </div>
        <div class="L_tips">大波奖品等你拿~</div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/css/animate.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/css/Global.css'
import '@/assets/css/integralSubsidiary.css'
import '@/assets/js/integralSubsidiary.js'
import http from '@/assets/util/http.js'
export default {
  name: 'ScoreDetail',
  components: {
  },
  data() {
    return {
      my_item_data: [],
      msg: ''
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    jfjfymInfo(fig) {
      if (fig == 1) {
	        $('.L_nopoints').css('display', 'none')
	        $('.L_fig1').css('display', 'block')
	    } else {
	        $('.L_nopoints').css('display', 'block')
	        $('.L_fig1').css('display', 'none')
	    }
    },
    renderPage(obj) { // 渲染页面积分数据
      $('.L_kyval').html(obj.canUseScore)
      $('.L_yyval').html(obj.useredScore)
    },
    getDetails(obj) { //    渲染转换详情
    	console.log(obj)
    	var temp = {}
    	obj.map(function(item) {
    	    if (!temp[item['CREATE_TIME'].substr(0, 7)]) {
    	         temp[item['CREATE_TIME'].substr(0, 7)] = []
    	    }

    	    temp[item['CREATE_TIME'].substr(0, 7)].push(item)
    	})

    	console.log(temp)

    	console.log(Object.values(temp))
    	var t = Object.values(temp)
    	var s = Object.keys(temp)

    	for (var i = 0; i < t.length; i++) {
    		var temps = { time: '', list: '' }
    		temps.time = s[i]
    		temps.list = t[i]
    		this.my_item_data.push(temps)
    	}

    	console.log(this.my_item_data)
    	//  var html = template('my_template', { items: my_item_data })
    	//     console.log(html)
    	//      $('.L_fig1').html(html)
    },
    async getData() {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getScoreChangeJl.do', { dataType: 'json', openid: '', noncestr: '', timestamp: '', sign: '', unionid: '' })
      if (res.data) {
        // var re = JSON.parse(res.data)
        this.renderPage(res.data)
        this.getDetails(res.data.list)
        if (res.data.canUseScore == '0' && res.data.useredScore == '0') {
          this.jfjfymInfo(0)
        } else {
          this.jfjfymInfo(1)
        }
      }
    }
  }
}
</script>
<style scoped>
.scoreDetail{
  width: 100%;
  height: 100%;
}
.L_wrappe{
    /* width: 10rem; */
    background-image: url(../assets/images/tbys.png);
    background-repeat: no-repeat;
    background-size: 100% auto;
}
.L_integral{
    height: 2.666667rem;
    width: 9.333333rem;
    margin-top: .533333rem;
    background: #fff;
    border-radius: .346667rem;
}
.L_integral>div{
    width: 50%;
}
.L_kyintegral p,.L_yyintegral p{
    font-size: .4rem;
    margin: .4rem 0;
    text-align: center;
}

.L_kyintegral .L_kyval,.L_yyintegral .L_yyval{
    font-size: .533333rem;
    font-weight: bold;
}
.L_kyintegral .L_kyval{
    color: #ff9b6f;
 }
 .L_yyintegral .L_yyval{
     color: #689aff;
 }
.L_month{
    padding: 0 .306667rem;
    font-size: .36rem;
    height: 1.066667rem;
}
.L_menuList li{
    border-bottom: 1px solid #f3f3f3;
    padding: 0.13rem;
}
.L_dotitle,.L_zrjfval{
    font-size: .4rem;
    font-weight: bold;

}
.L_just{
    color: #ff9b6f;
}
.L_lose{
    color: #689aff;
}
.L_height60 p{
    line-height: .8rem;
}

.L_height30 .L_syhdjf{
	 line-height: .2rem;
}
.L_zrjfval,.L_gxtime{
    text-align: right;
}
.L_gxtime,.L_syhdjf{
    font-size: .293333rem;
    color: #715c5c;
}

.L_headImg{
    width: 100%;
}
.L_head div{
    width: 50%;

}
.L_nopoints{
    margin-top: 1.533333rem;
}
.L_wujif{
    width: 4.893333rem;
    height: 3.786667rem;
}
.L_tag{
    text-align: center;
    font-size: .56rem;
    margin-top: .133333rem;
}
.L_btn{
    margin-top: 2.333333rem;
    width: 90%;
    height: 1.333333rem;
    background-image: url(../assets/images/zjfbtn.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    font-size: .533333rem;
    color: #c3182c;
    text-align: center;
    line-height:  1.333333rem;

}
.L_tips{
    font-size: .373333rem;
    text-align: center;
}
</style>
