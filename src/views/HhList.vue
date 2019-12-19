<template>
  <div class="HhList">
    <div class="account-header mar">
      <p class="title">已绑定的低压居民户号：</p>
      <p class="sub-title">(仅支持低压居民户号)</p>
      <div class="btn intro">转换说明</div>
    </div>
    <div class="account-list mar">
      <ul class="mycont" />

    </div>
    <div class="add-account mar">
      <img
        class="add"
        src="../assets/images/add.png"
        alt=""
      >
      <p class="addhh">添加低压居民户号</p>
    </div>
    <div class="btn-trans-point mar">去转换积分</div>
    <div class="circle">
      转换</br> 记录
    </div>

    <div class="mask" />
    <div class="showtoast">

      <img src="" alt="">
      <span />
    </div>
    <!-- 弹框 -->
    <div class="pop">
      <div class="pop_top">
        <img src="" alt="" class="popimg">
        <span class="popinfo" />
      </div>
      <div class="pop_foot">
        我知道了
      </div>
    </div>
    <form id="form" action="">
      <input type="hidden" value="${openid}" name="openid">
      <input type="hidden" value="${noncestr}" name="noncestr">
      <input type="hidden" value="${timestamp}" name="timestamp">
      <input type="hidden" value="${sign}" name="sign">
      <input type="hidden" value="${unionid}" name="unionid">
      <input type="hidden" name="userName" class="userName">
      <input type="hidden" name="userhh" class="userhh">
      <input type="hidden" name="userAddress" class="userAddress">
      <input type="hidden" name="consNo" class="myConsNo">
    </form>

    <form id="form1" action="">
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
import '@/assets/js/template.js'
import '@/assets/css/user-account.css'
import http from '@/assets/util/http.js'
export default {
  name: 'HhList',
  components: {
  },
  data() {
    return {
      my_item_data: [],
      msg: ''
    }
  },
  mounted() {
    this.getHhListDetails()
    this.getScore()
  },
  methods: {
    async getHhListDetails() {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getHhListDetails.do', { dataType: 'json', openid: '', noncestr: '', timestamp: '', sign: '', unionid: '' })
      var list = res.data.bindList
      console.log(list)
      // if(list.length  >  0){
      //   var my_item_data=data.bindList;
      //   var html = template('my_template', { items: my_item_data });
      //   var newArray= my_item_data.filter(function(item){
      //     return item.flag=='1'
      //   });
      //   userhh=newArray[0].tmHh;
      //   userName=newArray[0].userName;
      //   userAddress=newArray[0].addr;
      //   myConsNo=newArray[0].consNo;
      //   console.log(newArray)
      //     $('.mycont').html(html);
      // }
      if (res.data.bindList) {
        if (list.length > 0) {

        }
      } else {

      }
    },
    async turnToHhScoreChange() {
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do', { dataType: 'json' })
      console.log(res)
    },
    async getScore() { // 获取积分
      const res = await http.post('/wxapp_2019powerbill/jfdh/jfdh_getSeconds.do', { dataType: 'json', openid: '', noncestr: '', timestamp: '', sign: '', unionid: '' })
      if (res.data.return_flag === '-1') {

      } else {

      }
    }
  }
}
</script>
<style scoped>
.HhList{
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
.HhList.active{
    overflow-y:hidden ;
}
.mar{
    margin:0 .4rem;
    position: relative;
}
.btn{
    background: #ffcf95;
    color:#9f1c23;
    font-size:14px;
    /* width:2.68rem; */
    padding:0 .4rem;
    height:.68rem;
    border-radius: .34rem;
    line-height: .68rem;
    text-align:center;
}
img{
    width:100%;
}
.account-header{
    padding-top:.6rem;
    height:.96rem;
    display:flex;
    flex-direction:column;
    justify-content: space-around;

}
.account-header .title{
    font-size: 14px;
    font-weight: bold;
    color: #3a0808;
}
.account-header .sub-title{
    font-size: 12px;
    color: #ff4444;
}
.account-header .intro{
    position: absolute;
    right:-.8rem;
    top:.6rem;
}
.account-item{
    margin-top:.24rem;
    background: white;
    height:2.72rem;
    border-radius: .2rem;
    padding:0 .32rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.check-box{
    width:.52rem;
    height:.52rem;
    border-radius: .52rem;
    border:.02rem solid #ea5649;
    box-sizing: border-box;
}
.check-box.active{
    border: none;
    background: url(../assets/images/sel.png) no-repeat;
    background-size: contain;
}

.item-info{
    width:7.7rem;
    color:#3a0808;
    font-size: 14px;
    /* line-height: .5rem; */
}
.item-info span{
    display:inline-block;
    padding:0 .1rem;

}
.item-info img{
    width:.36rem;
    vertical-align: middle;
}
.item-info span.mark{
    border-radius: .2rem;
    padding: 0 .3rem;
    border:.03rem solid #ea5649;
    color:#ea5649;
    margin-left:.2rem;

}
.info{
    height:.7rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.addr{
    width:6.9rem;
}

.add-account{
    margin-top:.6rem;
    height:1.18rem;
    line-height: 1.18rem;
    border-radius:1.18rem;
    font-size: 16px;
    color:#b7a6a6;
    border:.03rem dashed #b7a6a6;
    text-align: center;
    position: relative;
}
.add{
    width:.4rem;
    height:.4rem;
    position: absolute;
    left:.48rem;
    top:50%;
    transform: translateY(-50%);
}
.btn-trans-point{
    width: 8rem;
    height: 1.26rem;
    font-weight: bold;
    line-height: 1.26rem;
    font-size: 16px;
    color: #c3182c;
    text-align: center;

    background: url('../assets/images/btn-bottom.png') no-repeat;
    background-size: cover;
    margin:.8rem auto;
}
.circle{
    position: fixed;
    bottom:5.12rem;
    right: .453333rem;
    width: 1.066667rem;
    height: 1.066667rem;
    background-color: #fff;
    border: .053333rem solid #BC3839;
    border-radius: 50%;
    color: #BC3839;
    font-size: .32rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mask{
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    top: 0;
    left: 0;
    z-index: 200;
    display: none;
}
.pop{
    height: 7.066667rem;
    width: 8rem;
    border-radius: .266667rem;
    background-color: #fff;
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 300;
    transform: translate(-50%,-50%);
    display: none;
}
.pop_top{
    height: 5.866667rem;
    display: flex;
    flex-direction: column;
    padding-top: .56rem;
    box-sizing: border-box;
    border-bottom: .026667rem solid #e5e5e5;
    align-items: center;
}
.pop_top img{
    width: 4.64rem;
    height: 3.826667rem;
}
.pop_top span{
    font-size: .373333rem;
    color: #3a0808;
    font-weight: 700;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 1.066667rem;
}
.pop_foot{
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: .32rem;
    color: #ea5649;
}
  .showtoast{
      width: 3.733333rem;
      display: none;
      height: 3.733333rem;
      position: fixed;
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
      z-index:10000;

  }
  .showtoast span{
  text-align:center
  }
  .showtoast.active{
      display: flex;
  }
  .showtoast img{
      width: 1.333333rem;
      height: 1.333333rem;
      margin-bottom: .4rem;
  }
</style>
