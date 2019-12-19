<template>
  <div class="qzgl">
    <div class="L_wrapper">
      <div class="L_conten  zzCenter flex">
        <div class="L_tag flex ">
          <div class="L_img  zzCenter flex qxCenter">
            <img src="../assets/images/phone@2x.png" alt="">
          </div>
          <div class="L_yjf">
            <div class="L_titlejf">赚积分 赢大奖</div>
            <div class="L_timerq">
              <p>即日起至</p>
              <p>2020年2月17日10:00</p>
            </div>
            <div class="L_felg">
              攒积分兑好礼,还有机会0元得价值4999元的华为5G手机
            </div>
          </div>
        </div>

      </div>
      <div class=" zzCenter flex">
        <div class="L_btn">向好友求赠</div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/css/strategy.css'
import '@/assets/css/Global.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
import http from '@/assets/util/http.js'
export default {
  name: 'Qzgl',
  components: {
  },
  data() {
    return {
      my_item_data: [],
      msg: ''
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>
