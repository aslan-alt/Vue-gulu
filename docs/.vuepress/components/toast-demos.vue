<template>
  <div>
    <button @click="()=>showToast('top')">顶部弹出</button>
    <button @click="()=>showToast('middle')">中间弹出</button>
    <button @click="()=>showToast('bottom')">底部弹出</button>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Toast from '../../../src/plugin'
import Vue from 'vue'

Vue.use(Toast)

export default {
  components: {
    'g-toast': Toast
  },
  data() {
    return {
      selectedItem: ['1'],
      content: `
<template>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
      {{selectedTab}}
    </g-collapse>
<template>

import {Collapse,CollapseItem} from 'gulu-aslan'
export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data(){
      return {
          selected:['1']
      }
  }
}`.trim()
    }
  },
  methods: {
    showToast(position) {
      this.$toast(`当前余额${Math.random() * 1000}`, {
        position: 'top',
        closeButton: {
          text: '关闭',
          callback() {
            console.log('用户说他知道了')
          }
        },
        enableHtml: true,
        autoClose: true
      })
    },
  }
};
</script>
<style lang="scss" scoped>
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 60px;
}
</style>

