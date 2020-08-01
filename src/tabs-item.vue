<template>
  <div class="tabs-item" @click="xxx">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "aslanTabsItem",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    console.log(this.eventBus);
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs-item {
}
</style>