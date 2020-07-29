<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot />
  </div>
</template>


<script>
export default {
  name: "aslanRow",
  props: {
    gutter: [String, Number],
    align: {
      type: String,
      validator(value) {
        return ["left", "right", "center"].includes(value);
      },
    },
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter; //篡改了col组件的gutter
    });
  },
  computed: {
    rowStyle() {
      return {
        marginLeft: -(this.gutter / 2) + "px",
        marginRight: -(this.gutter / 2) + "px",
      };
    },
    rowClass() {
      const { align } = this;
      return [align && `align-${align}`];
    },
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-content: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>

