<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "aslanTabsItem",
  inject: ["eventBus"],
  created() {
    console.log(this.eventBus);
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
};
</script>
<style lang="scss" scoped>
.tabs-body {
}
</style>