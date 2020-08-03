<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "aslanTabsHeader",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      let { width, height, top, left } = vm.$el.getBoundingClientRect();
      this.$refs.line.style.width = width + "px";
      this.$refs.line.style.left = left + "px";
    });
  },
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
$blue: red;
$border-color: #ddd;
.tabs-head {
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  align-items: center;

  position: relative;
  border-bottom: 1px solid $border-color;
  > .line {
    transition: all 0.3s;
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
  }
  > .actions-wrapper {
    margin-left: auto;
  }
}
</style>