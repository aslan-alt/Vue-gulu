<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
import Vue from 'vue'
export default {
  name: "aslanCollapse",
  data() {
    return {
      eventBus: new Vue
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    },
    selected: {
      type: String,
    }
  },
  provide() {

    return {
      eventBus: this.eventBus
    }

  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
  }
};
</script>
<style lang="scss" scoped>
$grey: grey;
.collapse {
  border: 1px solid $grey;
  border-radius: 4px;
}
</style>

