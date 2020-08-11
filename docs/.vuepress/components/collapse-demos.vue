<template>
  <div>
    <g-collapse :selected.sync="selectedItem" single>
      <g-collapse-item title="土豆" name="1">土豆丝、土豆烧牛腩、老干妈土豆丝</g-collapse-item>
      <g-collapse-item title="茄子" name="2">红烧茄子、鱼香茄子、烤茄子</g-collapse-item>
    </g-collapse>
    <p v-if="selectedItem.length >= 1" style="color:green">您展开标题{{...selectedItem}} 的内容</p>
    <p v-else style="color:green">您目前没选中任何内容，可以添加默认值的哦</p>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Collapse from "../../../src/collapse";
import CollapseItem from "../../../src/collapse-item";


export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item': CollapseItem
  },
  data() {
    return {
      selectedItem: ['1'],
      content: `
<template>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="土豆丝" name="1">土豆丝、土豆烧牛腩、老干妈土豆丝</g-collapse-item>
      <g-collapse-item title="茄子" name="2">红烧茄子、鱼香茄子、烤茄子</g-collapse-item>
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

