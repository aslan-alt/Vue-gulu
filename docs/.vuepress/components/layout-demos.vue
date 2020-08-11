<template>
  <div style="margin-top: 10px;color:white">
    <g-layout style="height:400px;border:1px solid #191A40" class="layout">
      <g-sider style="width:150px;background:#216A70" :visible="true">

        <div slot="button">click隐藏</div>
        <div slot="content">侧边栏内容</div>
      </g-sider>
      <g-layout>
        <g-header style="height:80px;background:#208773" class="item">header</g-header>
        <g-content style="background:#1E7D50" class="item">content</g-content>
        <g-footer style="height:80px;background:#206487" class="item">footer</g-footer>
      </g-layout>
    </g-layout>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Layout from "../../../src/layout";
import Header from "../../../src/header";
import Content from "../../../src/content";
import Footer from "../../../src/footer";
import Sider from "../../../src/sider";

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider
  },
  data() {
    return {
      content: `
<g-layout style="height:400px;border:1px solid #191A40">
    <g-sider style="width:100px;background:#216A70">侧边栏</g-sider>
    <g-layout>
        <g-header style="height:80px;background:#208773">header</g-header>
        <g-content style="background:#1E7D50">content</g-content>
        <g-footer style="height:80px;background:#206487">footer</g-footer>
    </g-layout>
</g-layout>

import { Layout,Header,Content,Footer,Sider } from 'gulu-aslan'
export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-footer': Footer,
    'g-sider': Sider
  }
}
`.trim()
    }
  }
};
</script>
<style lang="scss" scoped>
.layout {
  overflow: hidden;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
}
</style>

