<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="setting">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
  </div>
</template>


<script>
import Button from "../../../src/button";

export default {
  components: {
    'g-button': Button
  }
};
</script>
<style lang="scss" scoped>
</style>

