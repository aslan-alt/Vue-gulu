<template>
  <div>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="woman" disabled>
          <g-icon name="setting"></g-icon>
          人物被禁用了
        </g-tabs-item>
        <g-tabs-item name="finance">
          财经
        </g-tabs-item>
        <g-tabs-item name="sports">
          体育
        </g-tabs-item>
        <g-tabs-item name="news">
          新闻
        </g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">
          人物相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="finance">
          财经相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="sports">
          体育相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="news">
          新闻相关资讯
        </g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Tabs from "../../../src/tabs";
import TabHead from "../../../src/tabs-head";
import TabItem from "../../../src/tabs-item";
import TabPane from "../../../src/tabs-pane";
import TabBody from "../../../src/tabs-body";
import Icon from "../../../src/icon";



export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabHead,
    'g-tabs-item': TabItem,
    'g-tabs-pane': TabPane,
    'g-tabs-body': TabBody,
    'g-icon': Icon
  },
  data() {
    return {
      content: `

<template>
    <g-tabs :selected.sync="selectedTab">
        <g-tabs-head>
        <template>
            <button slot="actions">wowowowow</button>
        </template>
        <g-tabs-item name="woman" disabled>
            <g-icon name="setting"></g-icon>
            人物
        </g-tabs-item>
        <g-tabs-item name="finance">
            财经
        </g-tabs-item>
        <g-tabs-item name="sports">
            体育
        </g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
        <g-tabs-pane name="woman">
            人物相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="finance">
            财经相关资讯
        </g-tabs-pane>
        <g-tabs-pane name="sports">
            体育相关资讯
        </g-tabs-pane>
        </g-tabs-body>
    </g-tabs>
<template>
import {Tabs,TabHead,TabItem,TabPane,TabBody,Icon} from 'gulu-aslan'
export default {
  components: {
    'g-tabs': Tabs,
    'g-tabs-head': TabHead,
    'g-tabs-item': TabItem,
    'g-tabs-pane': TabPane,
    'g-tabs-body': TabBody,
    'g-icon': Icon
  }
}`.trim(),
      selectedTab: 'finance'
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

