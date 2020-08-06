<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>


<script>
import Vue from "vue";

export default {
  name: "aslanTabs",
  props: {
    selected: {
      type: [String, Number],
      required: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      },
    },
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  methods: {
    checkChildren() {
      if (this.$children.length === 0) {
        console &&
          console.warn &&
          console.warn("g-tabs的子组件应该是g-tabs-head和g-tabs-body");
      }
    },
    selectedTab() {
      this.$children.forEach((vm) => {
        if (vm.$options.name === "aslanTabsHeader") {
          vm.$children.forEach((childVm) => {
            if (
              childVm.$options.name === "aslanTabsItem" &&
              childVm.name === this.selected
            ) {
              this.eventBus.$emit("update:selected", this.selected, childVm);
            }
          });
        }
      });
    }
  },
  mounted() {
    this.checkChildren()
    this.selectedTab()
  },
};
</script>
<style lang="scss" scoped>
</style>