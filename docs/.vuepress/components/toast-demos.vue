<template>
  <div>
    <button @click="()=>showToast({position:'top',autoClose:false})" class="item">顶部弹出</button>
    <button @click="()=>showToast({position:'middle'})" class="item">中间弹出</button>
    <button @click="()=>showToast({position:'bottom'})" class="item">底部弹出</button>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Toast from '../../../src/plugin'
import Vue from 'vue'

Vue.use(Toast)

export default {
  data() {
    return {
      selectedItem: ['1'],
      content: `
<template>
  <button @click="()=>showToast({position:'top',autoClose:false})">顶部弹出</button>
  <button @click="()=>showToast({position:'middle'})">中间弹出</button>
  <button @click="()=>showToast({position:'bottom'})">底部弹出</button>
<template>

import { Toast } from 'gulu-aslan'
import Vue from 'vue'

Vue.use(Toast)

export default {
  methods: {
    showToast(propOption) {
      this.$toast(弹窗内容, {//设置默认值
        position: 'middle',//弹出方向
        closeButton: {
          text: '关闭',//按钮名称
          callback() {//关闭弹窗后的callback
            console.log('用户说他知道了')
          }
        },
        enableHtml: true,//是否支持HTML内容
        autoClose: true,//是否自动关闭
        ...propOption//每次调用如果需求发生变化，添加新的属性去覆盖
      })
    },
  }
}`.trim()
    }
  },
  methods: {
    showToast(propOption) {
      this.$toast(`当前余额${Math.random() * 1000}`, {//设置默认值
        position: 'middle',//弹出方向
        closeButton: {
          text: '关闭',//按钮名称
          callback() {//关闭弹窗后的callback
            console.log('用户说他知道了')
          }
        },
        enableHtml: true,//是否支持HTML内容
        autoClose: true,//是否自动关闭
        ...propOption//每次调用如果需求发生变化，添加新的属性去覆盖
      })
    },
  }
};
</script>
<style lang="scss" scoped>
.item {
  padding: 8px 8px;
  background: black;
  color: white;
  border-radius: 4px;
}
</style>

