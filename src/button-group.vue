<template>
  <div class="button-group">
    <slot />
  </div>
</template>


<script>
export default {
  mounted() {
    for (let i = 0; i < this.$el.children.length; i++) {
      const name = this.$el.children[i].nodeName.toLowerCase();
      name !== "button" &&
        console.warn(`g-button-group子元素必须是button,但你写的是${name}`);
    }
  },
};
</script>
<style lang="scss" scoped>
.button-group {
  display: inline-flex;
  vertical-align: middle;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>

