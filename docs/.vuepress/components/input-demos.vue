<template>
  <div>
    <div class="wrapperError">
      <g-input value="错误信息" error="可接受错误提示参数，并自带警示icon" class="item" />
    </div>
    <div class="wrapper-disable">
      <g-input value="禁用了哦" disabled class="item" />
      <g-input value="只能读哦" readonly class="item" />
    </div>

    <div class="wrapper">
      <g-input v-model="string" class="item" />
      <div class="notes">notes:{{string}}</div>
    </div>
    <pre style="color:white;font-size:16px">
      {{content}}
    </pre>

  </div>

</template>


<script>
import Input from "../../../src/input";

export default {
  components: {
    'g-input': Input
  },
  data() {
    return {
      content: `
      <g-input v-model="string" />
      <g-input value="禁用了哦" disabled />
      <g-input value="只能读哦" readonly />
      <g-input value="哇塞" error="可接受错误提示参数，并自带警示icon" />
      `,
      string: '在这输入，改变notes'
    }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .item {
    margin-bottom: 10px;
  }
  .notes {
    color: red;
  }
}
.wrapperError {
  .item {
    margin-bottom: 10px;
  }
}
.wrapper-disable {
  .item {
    margin-bottom: 10px;
  }
}
</style>

