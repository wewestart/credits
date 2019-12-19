<template>
  <div class="EarnPoints">
    <header class="points-head">
      <div class="points-head-top">
        <div class="point">
          22000
        </div>
        <div class="point-activities">
          <span>积分活动</span>
          <span class="arrow" />
        </div>
        <div class="btn how-earn" @click="qzgl">
          如何求增积分？
        </div>
      </div>
      <div class="trans-points">
        <div>
          <ul class="suggest-list">
            <li class="suggest-item  suggest-item1" @click="HhList">
              <div class="suggested" />
              <div class="suggest-center">
                <img class="suggest-btn1" src="../assets/images/btn-1.png" alt="">
                <p>转入户号积分</p>
              </div>

            </li>
            <li class="suggest-item suggest-item2">
              <div class="suggested" />
              <div class="suggest-center">
                <img class="suggest-btn2" src="../assets/images/btn-2.png" alt="">
                <p class="zrzdjfBtn">转入掌电积分</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <section class="earn-method">
      <div class="method-top">
        赚积分方式
      </div>
      <div class="">
        <ul>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">注册掌电赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn1">
              去注册
            </div>
          </li>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">推荐好友赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn2">
              去推荐
            </div>
          </li>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">掌电交电费赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn3">
              去交费
            </div>
          </li>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">掌电认证赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn4">
              去认证
            </div>
          </li>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">转入户号赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn5">
              去转入
            </div>
          </li>
          <li class="method-bar">
            <div class="method-img"><img src="../assets/images/btn-3.png" alt=""></div>
            <div class="method-intro">
              <div class="title">转入掌电赚积分</div>
              <div class="content">活动介绍活动介绍活动介绍活动介绍活动介绍活动介绍</div>
            </div>
            <div class="method-btn btn6">
              去转入
            </div>
          </li>

        </ul>
      </div>
    </section>
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
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/css/earn-points.css'
export default {
  name: 'EarnPoints',
  data() {
    return {

    }
  },
  methods: {
    HhList() {
      this.$router.push({ path: '/HhList' })
    },
    qzgl() {
      this.$router.push({ path: '/qzgl' })
    }
  }
}
</script>
<style scoped>
.EarnPoints{
    background:#b21929;
    min-height: 100vh;
}
img{
    width: 100%;
}
.points-head{
    height: 6.1rem;
    background-image: url(../assets/images/bj.png);
    background-size: 100%;
    background-position: bottom;
}
.points-head-top{
    padding:.32rem;
    height:1.44rem;
}

.points-head-top .point{
    font-size:1.06rem;
    color:white;
    display:inline-block;
}
.points-head-top .point-activities{
    font-size:14px;
    color:white;
    display:inline-block;
    position: relative;
}

.arrow{
    display:inline-block;
    width:.32rem;
    height: .32rem;
    border-radius:.2rem;
    background:white;
    position: relative;
}
.arrow:after{
    width:0.18rem;
    height:.18rem;
    content:"";
    border-top:2px solid #b21929;
    border-right:2px solid #b21929;
    transform: rotate(45deg);
    position: absolute;
    top:.037rem;
    left:0;
}

.btn{
    background: #ffcf95;
    color:#9f1c23;
    font-size:14px;
    width:2.68rem;
    height:.68rem;
    border-radius: .34rem;
    line-height: .68rem;
    text-align:center;
}
.how-earn{
    position: absolute;
    right:.32rem;
    top:.32rem;
    font-size:0.36rem !important;
}

.trans-points{
    padding:0 .32rem;
}

.suggest-list{
    display:flex;
    /* flex-direction: column; */
}
.suggest-item{
    width:3.1rem;
    height:2.56rem;
    background-image: url(../assets/images/suggest-btn.png);
    background-size: cover;
    margin-right:.4rem;
    display:flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.suggest-center{
    text-align: center;
    color:#3a0808;
    font-weight: bold;
}

.suggest-item .suggested{
    width:1.28rem;
    height:1.17rem;
    background-image: url(../assets/images/suggest.png);
    background-size: cover;
    position: absolute;
    top:0;
    left:-.1rem;
}

.suggest-item .suggest-btn1{
    width:1.3rem;
    /* height:1.37rem; */
}
.suggest-item .suggest-btn2{
    width:1.3rem;
    /* width:1.24rem; */
}
.earn-method{
    margin:-.5rem .4rem;
    padding-bottom: .2rem;
}
.method-top{
    font-size: 14px;
    text-align: center;
    background:url("../assets/images/navtitle.png") no-repeat center;
    color:white;
    margin:0 .4rem;
    font-weight: bold;
    letter-spacing:.05rem;
}
.method-bar{
    height:2.14rem;
    border-radius:10px;
    background: #ffe8d5;
    margin:10px auto;
    display:flex;
    justify-content: space-around;
    align-items: center;
}

.method-img{
    width:1.2rem;
}

.method-intro{
    width:5.17rem;
}
.method-btn{
    width:1.89rem;
    height:.85rem;
    background:url('../assets/images/method-btn.png') no-repeat  center;
    background-size: cover;
    text-align: center;
    line-height: .85rem;
    color:white;
    letter-spacing:.05rem;
}

.method-intro .title{
    color:#3a0808;
    margin:.1rem;
    font-size: 14px;
    font-weight: bold;
}
.method-intro .content{
    color:#9c8277;
    margin:.1rem;
    font-size: 12px;
}
</style>
