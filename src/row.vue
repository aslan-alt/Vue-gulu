<template>
  <div class="row" :style="rowStyle">
    <slot />
  </div>
</template>


<script>
export default {
  name: "aslanRow",
  props: {
    gutter: [String, Number],
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
  },
};
</script>
<style lang="scss" scoped>
.row {
  display: flex;
}
</style>

