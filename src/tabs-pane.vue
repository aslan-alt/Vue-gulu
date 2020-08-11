<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "aslanTabsItem",
  inject: ["eventBus"],
  data() {
    return {
      active: false,
    };
  },
  props: {
    name: {
      type: [String, Number],
      required: true,
    },
  },
  computed: {
    classes() {
      return { active: this.active };
    },
  },
  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.active = name === this.name;
    });
  },
};
</script>
<style lang="scss" scoped>
$red: red;
.tabs-pane {
  padding: 1em;
  &.active {
    color: $red;
  }
}
</style>