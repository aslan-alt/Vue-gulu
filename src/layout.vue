<template>
  <div class="layout" :class="layoutClass">
    <slot />
  </div>
</template>


<script>
export default {
  name: "aslanLayout",
  data() {
    return {
      layoutClass: {
        hasSider: false,
      },
    };
  },

  mounted() {
    this.$children.forEach((vm) => {
      console.log(vm.$options.name);
      if (vm.$options.name === "aslanSider") {
        this.layoutClass.hasSider = true;
      }
    });
  },
};
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  &.hasSider {
    flex-direction: row;
  }
}
</style>

