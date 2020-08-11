<template>
  <div style="margin-top: 10px;color:white">
    <div class="item">
      <g-popover position="right">
        <div slot="content">内容在右侧</div>
        <g-button>点我</g-button>
      </g-popover>
      <g-popover position="left">
        <div slot="content">内容在左侧</div>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div class="item">
      <g-popover position="bottom">
        <template slot="content" slot-scope="{close}">
          <div>
            内容在底部，还带关闭按钮
            <button @click="close">关闭</button>
          </div>
        </template>
        <g-button>点我</g-button>
      </g-popover position="top">
      <g-popover>
        <div slot="content">内容在顶部</div>
        <g-button>点我</g-button>
      </g-popover>
    </div>
    <div class="item">
      <g-popover position="bottom" trigger="hover">
        <div slot="content">
          支持hover状态，也支持四个位置属性
        </div>
        <g-button>hover</g-button>
      </g-popover position="top" trigger="hover">
      <g-popover position="left" trigger="hover">
        <div slot="content">内容</div>
        <g-button>hover</g-button>
      </g-popover>
    </div>

    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Popover from "../../../src/popover";
import Button from "../../../src/button";


export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  },
  data() {
    return {
      content: `
<g-popover position="bottom">
    <template slot="content" slot-scope="{close}">
        <div>
            内容
            <button @click="close">关闭</button>
        </div>
    </template>
    <g-button>点我</button>
</g-popover position="top">

<g-popover>
    <div slot="content">内容</div>
    <g-button>点我</g-button>
</g-popover>
import { Popover,Button } from 'gulu-aslan'
export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  }
}
`.trim()
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

