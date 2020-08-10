<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon v-if="icon && !loading" class="icon" :name="icon"></g-icon>
    <g-icon v-if="loading" class="loading icon" name="loading"></g-icon>
    <div class="content">
      <slot />
    </div>
  </button>
</template>


<script>
import Icon from "./icon";

export default {
  name: "aslanButton",
  components: {
    "g-icon": Icon,
  },
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
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
$button-height: 32px;
$font-size: 14px;
$button-height: 32px;
$button-bg: white;
$button-active-bg: #eee;
$font-size: 14px;
$border-radius: 4px;
$color: #999;
$border-color: #999;
$border-color-hover: #666;
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
  font-size: $font-size;
  height: $button-height;
  border: 1px solid $border-color;
  padding: 0 1em;
  border-radius: $border-radius;
  background: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }

  &:active {
    border-color: $button-active-bg;
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

