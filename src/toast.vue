<template>
  <div class="wrapper" :class="toastClasses">
    <div class="toast" ref="toast">
      <div class="message">
        <div v-if="enableHtml" v-html="$slots.default[0]"></div>
        <slot v-if="!enableHtml"></slot>
      </div>
      <div class="line" ref="line"></div>
      <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "aslanToast",
  props: {
    autoClose: {
      type: Boolean,
      default: false,
    },
    autoCloseDelay: {
      type: Number,
      default: 3,
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "middle",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      },
    },
  },
  computed: {
    toastClasses() {
      return { [`position-${this.position}`]: true };
    },
  },
  mounted() {
    this.updateStyles();
    this.execAutoClose();

    // this.$refs.line.style.height =
  },
  methods: {
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      this.$emit("close");
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 500ms;
@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-down {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}
@keyframes slide-middle {
  0% {
    opacity: 0;

    transform: translateX(250%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  &.position-top {
    top: 0;

    .toast {
      animation: slide-down $animation-duration linear;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.position-bottom {
    bottom: 0;
    transform: translateX(-50%);

    .toast {
      animation: slide-up $animation-duration linear;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    .toast {
      animation: slide-middle $animation-duration linear;
    }
  }
}

.toast {
  line-height: 1.8;
  min-height: $toast-height;
  color: white;
  font-size: $font-size;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
  .line {
    height: 100%;
    border-left: 1px solid #666;
    margin-left: 16px;
  }

  .message {
    padding: 8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
}
</style>