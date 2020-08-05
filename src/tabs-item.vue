<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
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
    if (this.eventBus) {
      this.eventBus.$on("update:selected", (name, vm) => {
        this.active = name === this.name;
      });
    }
  },
  computed: {
    classes() {
      return {
        active: this.active,
        disabled: this.disabled,
      };
    },
  },
  methods: {
    onClick() {
      if (this.disabled) {
        return;
      }
      if (this.eventBus) {
        this.eventBus.$emit("update:selected", this.name, this);
        this.$emit("click", this);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$blue: red;
.tabs-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  height: 100%;
  padding: 0 1em;
  &.active {
    color: $blue;
  }
  &.disabled {
    color: gray;
    cursor: not-allowed;
  }
}
</style>