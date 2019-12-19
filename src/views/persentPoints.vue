<template>
  <div class="persentPoints">
    <div class="head-top">
      <div class="user-info">
        <div class="account">
          <span>账号：</span>
          <span id="accountnr" />
        </div>
        <div class="points">
          <span>可赠送活动积分：</span>
          <span class="f-L" />
          <span class="f-M">积分</span>
        </div>
      </div>
    </div>
    <div class="persent-box">
      <div class="persent box">
        <div class="alert-msg none">
          <img src="../assets/images/alert.png" alt="">
          <span>您设置的活动积分超过可赠送活动积分，请重新输入</span>
        </div>
        <div class="mar30 title">
          赠送活动积分
        </div>
        <div class="mar30 content">
          <img src="../assets/images/icon-point.png" alt="">
          <input id="integral" type="number" placeholder="请输入赠送积分">
          <span class="persent-all">全部赠出</span>
        </div>
      </div>
      <div class="tel box">
        <div class="mar30 title">受赠人小程序账号（注册的手机号码）</div>
        <div><input id="phone" type="number" placeholder="请输入手机号码"></div>
      </div>
    </div>
    <div class="btn_z zzCenter flex">
      <button id="ensureIntegral" class="btn diable " disabled="disabled"> 确认赠送</button>
      <div class="btn_ng" />
    </div>

    <!-- 错误弹框   受赠人账号不能为自己账号 -->
    <div class="alert-dlg1 none">
      <div class="masking" />
      <div class="alert-box">
        <div class="alert-title">
          <img src="../assets/images/alert-account.png" alt="">
          <!-- <img class="none" src="./images/alert-points.png" alt=""> -->
        </div>
        <div class="alert-content">受赠人账号不能为自己账号</div>
        <div class="alert-btn1">我知道了</div>

      </div>
    </div>
    <!-- 错误弹框   输入的受赠人账号不存在 -->
    <div class="alert-dlg2 none">
      <div class="masking" />
      <div class="alert-box">
        <div class="alert-title">
          <img src="../assets/images/alert-points.png" alt="">
          <!-- <img class="none" src="./images/alert-points.png" alt=""> -->
        </div>
        <div class="alert-content">输入的受赠人账号不存在 </div>
        <div class="alert-btn2">我知道了</div>

      </div>
    </div>
    <!-- 提示信息 赠送失败 稍后重试 -->
    <!-- 提示信息 可赠送活动积分不足 -->
    <div class="showtoast flex zzCenter qxCenter none">
      <img src="../assets/images/sb.png" alt="">
      <span>赠送失败 稍后重试</span>
    </div>
    <!-- 短信验证码 -->
    <div class="L_code none">
      <div class="masking" />
      <div class="code_top">
        <div class="code_content">
          <div class="code_lists">
            <div class="code_list">
              <div>赠送账号</div>
              <div class="zszh_tc" />
            </div>
            <div class="code_list">
              <div>赠送活动积分</div>
              <div><span class="reg zsjf_tc" />分</div>
            </div>
            <div class="code_list ">
              <div>受赠账号</div>
              <div class="szzh_tc" />
            </div>
          </div>
          <div class=" flex zzCenter ">
            <div class="code">
              <img src="../assets/images/dunpai.png" alt="">
              <input id="yzm" type="tel" placeholder="请输入短信验证码" oninput="if(value.length>6) value=value.slice(0,6)" maxLength="6">
              <span class="code_btns">发送验证码</span>
            </div>
          </div>

          <div class="code_info">
            短信验证码已发送至您在江苏电力预留手机号中<span class="zszhs" />
          </div>
        </div>

        <div class="code_btn">
          <span class="cancel">取消</span>
          <div class="bgc_tcz">
            <span class="qd">确定</span>
            <span class="bgc_tcng" />
          </div>
        </div>
      </div>
    </div>
    <!-- 捐赠成功 -->
    <div class="present-success none">
      <div class="image"><img src="../assets/images/persent-success.png" alt=""></div>
      <div class="footer-bar">
        <div class="btn-m btn-red">查看赠送记录</div>
        <div class="btn-m btn-yellow">返回活动首页</div>
      </div>
    </div>
    <!--  -->

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
import '@/assets/css/Global.css'
import '@/assets/css/persent-points.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/js/toast.js'
import '@/assets/js/index.js'
export default {
  name: 'PersentPoints',
  components: {
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

  }
}
</script>
<style scoped>
.persentPoints{
    background: #f3f3f3;
    overflow-y: auto;
    overflow-x: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
}
.persentPoints.active{
    overflow-y:hidden ;
}
.none{
    display:none!important;
}
.mar30{
    margin: 0.3rem 0.4rem 0;
}
.f-L{
    font-size: .82rem;
}
.f-M{
    font-size: .48rem;
}
.head-top{
    padding-top:.2rem;
    background: #313131;
    position: relative;
}
.head-top::before {
    content: '';
    width: 120%;
    height: 100%;
    position: absolute;
    left: -10%;
    bottom: -75%;
    /* z-index: 1; */
    border-radius:50% 50% 0 0  ;
    background: #f3f3f3;
  }
.head-top .user-info{
    margin:0 auto;
    width:9.65rem;
    height:3.38rem;
    background: url("../assets/images/bg-user.png") no-repeat;
    background-size: cover;
    font-size:14px;
    color:white;
}
.user-info .account,.points{
    padding:.4rem .8rem 0;
}

.persent-box{
    position: relative;

}
  .box{
    height:2.6rem;
    padding-top:.24rem;
    border-radius: .2rem;
    background:white;
    margin:0 .4rem;
}
.persent .alert-msg{
    margin:0 .24rem;
    height: .7rem;
    background: #ffecec;
    border-radius: .7rem;
    line-height: .7rem;
    padding:0 .3rem;
    color:#ea5649;
}
.alert-msg img{
    width:.37rem;
    vertical-align: sub;
    margin-right: .1rem;
}
.title{
    font-size: 14px;
    color:#3a0808;
    font-weight: bold;
}
.content{
    display:flex;
    justify-content:space-between;
}
.content img{
    width: .6rem;
    height: .6rem;
    vertical-align: bottom;
}
.content input{
    height:.6rem;
    line-height: .6rem;
    padding:0 .2rem;
    color:#ea5649;
    font-size: .64rem;
    width:5rem;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 14px;
    color: #9c8383;
}
::-moz-placeholder { /* Firefox 19+ */
    font-size: 14px;
    color: #9c8383;
}
:-ms-input-placeholder { /* IE 10+ */
    font-size: 14px;
    color: #9c8383;
}
:-moz-placeholder { /* Firefox 18- */
    font-size: 14px;
    color: #9c8383;
}
.persent-all{
    color: #ea5649;
    font-size: 14px;
}

.tel{
    margin-top:.3rem;
    height:3rem;
}
.tel input{
    border:.03rem solid #9c8383;
    height:1.2rem;
    width:7.6rem;
    margin:.4rem .2rem;
    border-radius:1.2rem;
    padding:0 .6rem;
    color:#ea5649;
    font-size: .64rem;
}
.btn{
    width: 8rem;
    height: 1.26rem;
    font-weight: bold;
    line-height: 1.26rem;
    font-size: 16px;
    color: #c3182c;
    text-align: center;

    background: url('../assets/images/btn-bottom.png') no-repeat;
    background-size: cover;
    margin:1.5rem auto 0;

}
.btn.diable{
    opacity: .6;
}

/*寮瑰嚭妗�*/
.alert-dlg1,.alert-dlg2{
    position:fixed;
    width:100%;
    height: 100%;
    top:0;
    left:0;
}
.masking{
    position: fixed;
    top:0;
    left:0;
    background:black;
    opacity:.5;
    width:100%;
    height: 100%;
}
.alert-dlg1 .alert-box,.alert-dlg2 .alert-box{
    position: absolute;
    border-radius: .2rem;
    height:4.8rem;
    width: 8rem;
    background:white;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

.alert-title{
    height: 1.2rem;
}
.alert-title img{
    width: 2.85rem;
    position: absolute;
    top:-30%;
    left:50%;
    transform: translateX(-50%);
}
.alert-content{
    height: 2.3rem;
    line-height: 2.3rem;
    border-bottom:.03rem solid #e5e5e5;
    text-align: center;
    font-size:16px;
    font-weight: bold;
    color:#542929;
}
.alert-btn1,.alert-btn2{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size:14px;
    color:#ea5649;
}

/* 鎹愯禒鎴愬姛 */
.present-success{
    position: fixed;
    top:0;
    left:0;
    background:#f3f3f3;
    width:100%;
    height: 100%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.present-success .image{
    widows: 5.3rem;
    height: 4.28rem;
    text-align: center;
}
.present-success .image img{
    height: 100%;
}
.present-success .footer-bar{
    display:flex;
    justify-content: space-around;
}
.btn-m{
    width: 3.73rem;
    height: 1.26rem;
    background-size: cover;
    color: white;
    line-height: 1.26rem;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}
.btn-red{
    background-image: url("../assets/images/red-btn.png");
}
.btn-yellow{
    background-image: url("../assets/images/yellow-btn.png");
}

/* 寮圭獥鎻愮ず淇℃伅 */
.showtoast{
    width: 4.733333rem;

    height: 3.733333rem;
    position: absolute;
    border-radius: .266667rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #4c4c4c;
    font-size: .346667rem;
    color: #fff;
    opacity: .9;
    z-index: 310;

}
.showtoast.active{
    display: flex;
}
.showtoast img{
    width: 1.333333rem;
    height: 1.333333rem;
    margin-bottom: .4rem;
}

.code_top{
    width: 10rem;
    position: absolute;
    box-sizing: border-box;

    height: 10.533333rem;
    /* display: none;  */
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    /* background: url(../images/codeInfo.png) no-repeat; */
    background-size: contain;
    z-index: 399;
}
.code_content{
    width:110%;
    height: 8.4rem;
    background-image: url(../assets/images/tcbgc.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    position: absolute;
    left: -0.546667rem;
}
.code_lists{
 padding: 1.76rem 0 0 2.56rem;
 font-size: .4rems;
}
.code_btn{
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    padding: 0 .933333rem;
    left:0 ;
    bottom: 0.133333rem;
    height: 1.28rem;
    display: flex;
    justify-content: space-between;
}
.code_btn .cancel{
    background: url(../assets/images/yellow-btn.png) no-repeat;
    background-size: contain;
    color: #c3182c;
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.733333rem;
    height: 100%;
}
.code_btn .qd{
  background: url(../assets/images/red-btn.png) no-repeat;
    background-size: contain;
    color: #fff;
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.733333rem;
    height: 100%;
}
/* .code_list{
  height: .933333rem;
}
.addre{
  height: 1.386667rem;
} */

.code_list{
  margin-bottom: .533333rem;
  display: flex;
  text-align: center;
}
.code_list>div:first-child{
  margin-right: .533333rem;
  color: #3a0808;
  font-size: .36rem;
  font-weight: bold;
  width: 2.2rem;
  text-align-last:justify;
text-align:justify;
text-justify:distribute-all-lines;
}
.reg{
    color: #ea5649;
    font-size: .4rem;
    font-weight: bold;
}
.code_list>div:last-child{
  color: #715c5c;
  font-size: .36rem;
}
.code_list_zr,.code_list_xh{
  color: #ea5649;
}
.addre{
  position: relative;
}
.address{

  width: 3.92rem;

}
.code{
  /* position: absolute;
  bottom: 1.3rem;
  left: 1.413333rem; */
  width: 7.2rem;
  height: 1.173333rem;
  border-radius: 1.173333rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background-color: #fff;
  box-sizing: border-box;
  padding-left: 1.16rem;
  margin-top: 1.713333rem;
}
.code>span{
  width: 2.4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .346667rem;
  color: #fff;
  background-color: #eda431;
}
.code img{
  position: absolute;
  width: .413333rem;
  height: .533333rem;
  top: .32rem;
  left: .533333rem;
}
.code input{
  width: 3.066667rem;
  height: 100%;
  display: flex;
  align-items: center;
  color: #333;
  font-size: .346667rem;
  border: none;
  outline: none;

}
.code input::placeholder{
  color: #d1cbcb;
}
.code_info{

  font-size: .24rem;
  color: #fff;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: .366667rem;
  left: 0;

}
.btn_ng{
    width: 8rem;
    height: 1.26rem;
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    margin-top: 1.5rem;
    border-radius: 1.26rem;

}
.bgc_tcz{
	    position: relative;
}
.bgc_tcng{
	 position: absolute;
    background-color: rgba(0,0,0,0.3);
    width: 3.733333rem;
    height: 100%;
    top: 0;
    border-radius: 1rem;
}
</style>
