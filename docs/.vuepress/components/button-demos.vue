<template>
  <div>

    <g-button>默认按钮</g-button>
    <g-button icon="setting">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
    <pre style="color:white;font-size:16px">{{content}}</pre>

  </div>

</template>


<script>
import Button from "../../../src/button";

export default {
  components: {
    'g-button': Button
  },
  data() {
    return {
      content: `
<template>
  <g-button>默认按钮</g-button>
  <g-button icon="setting">默认按钮</g-button>
  <g-button :loading="true">默认按钮</g-button>
  <g-button disabled>默认按钮</g-button>
</template>

import {Button} from 'gulu-aslan'

export default {
  components: {
    'g-button': Button
  }
}


      `.trim()
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

