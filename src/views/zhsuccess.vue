<template>
  <div class="zhsuccess">
    <img src="../assets/images/success1.png" alt="" class="success">
    <div class="info">转换成功</div>
    <div class="bt">
      <span>查看转换记录</span>
      <span>返回活动首页</span>
    </div>
  </div>
</template>
<script>
import '@/assets/css/success.css'
import '@/assets/js/flexible.js'
import '@/assets/js/flexible_css.js'
export default {
  name: 'Zhsuccess',
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
