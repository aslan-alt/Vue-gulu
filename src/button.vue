<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <!-- <g-icon v-if="icon" :class="icon==='loading'?'icon loading':'icon' " :name="icon"></g-icon> -->
    <div class="content">
      <slot />
    </div>
  </button>
</template>


<script>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        console.log(value);
        return value === "left" || value === "right";
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.g-button {
  display: flex;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  border-radius: var(--border-radius);
  background: var(--button-bg);
  &:hover {
    border-color: var(--border-color-hover);
  }

  &:active {
    border-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>

