<template>
  <div class="tabs-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "aslanTabsItem",
  data() {
    return {
      active: false,
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: [String, Number],
      required: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.active = name === this.name;
    });
  },
  computed: {
    classes() {
      return { active: this.active };
    },
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name, this);
    },
  },
};
</script>
<style lang="scss" scoped>
$blue: blue;
.tabs-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border: 1px solid red;
  height: 100%;
  padding: 0 1em;
  &.active {
    color: $blue;
  }
}
</style>