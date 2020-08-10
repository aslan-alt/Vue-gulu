<template>
  <div>
    <g-row>
      <g-col span="24" class="colStyle">
        <div>可接受组件</div>
      </g-col>

    </g-row>
    <g-row align="left">
      <g-col span="6" class="colStyle">
        <div></div>
      </g-col>
      <g-col span="6" offset="6" class="colStyle">
        <div></div>
      </g-col>
    </g-row>

    <g-row align="left">
      <g-col span="8">
        <div></div>
      </g-col>
      <g-col span="8" offset="8">
        <div></div>
      </g-col>
    </g-row>
    <pre style="color:white;font-size:16px">
      {{content}}
    </pre>
    <p>span的最大值为24 每24/1的宽度约等于4.1667%</p>
    <p>align可接受left/right/center，用于调整方向</p>
    <p>offset 代表中间空隙 默认会在左边</p>

  </div>

</template>


<script>
import Col from "../../../src/col";
import Row from "../../../src/row";

export default {
  components: {
    'g-col': Col,
    'g-row': Row
  },
  data() {
    return {
      content: `
     <g-row>
      <g-col span="24">
        <div>可接受组件</div>
      </g-col>
    </g-row>
    <g-row align="left">
      <g-col span="6">
        <div>可接受left</div>
      </g-col>
      <g-col span="6" offset="6">
        <div></div>
      </g-col>
    </g-row>
    <g-row align="left">
      <g-col span="8">
        <div></div>
      </g-col>
      <g-col span="8" offset="8">
        <div></div>
      </g-col>
    </g-row>
      `
    }
  }
};
</script>
<style lang="scss" scoped>
.colStyle {
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

