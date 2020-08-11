<template>
  <div class="popover" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" :class="{[`position-${position}`]:position}" v-if="visible">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: "aslanPopover",
  props: {
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
      }
    },
    trigger: {
      type: String,
      default: 'click',
      validator(value) {
        return ['hover', 'click'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    if (this.trigger === 'click') {
      this.$refs.popover && this.$refs.popover.addEventListener('click', this.onClick)
    } else {
      this.$refs.popover && this.$refs.popover.addEventListener('mouseenter', () => {
        this.open()
      })
      this.$refs.popover && this.$refs.popover.addEventListener('mouseleave', () => {
        this.close()
      })
    }
  },
  destroyed() {
    if (this.trigger === 'click') {
      this.$refs.popover && this.$refs.popover.removeEventListener('click', this.onClick)
    } else if (this.trigger === 'mouseenter') {
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseenter', () => {
        this.open()
      })
    } else if (this.trigger === 'mouseleave') {
      this.$refs.popover && this.$refs.popover.removeEventListener('mouseleave', () => {
        this.close()
      })
    }
  },
  methods: {
    positionContent() {//找到按钮的位置，从而改变popover内容的位置
      const { top, left, width, height } = this.$refs.triggerWrapper.getBoundingClientRect();
      const { contentWrapper } = this.$refs;

      const { height: height2 } = contentWrapper.getBoundingClientRect()
      document.body.appendChild(contentWrapper);
      const positions = {
        top: { left: left + window.scrollX, top: top + window.scrollY },
        bottom: { left: left + window.scrollX, top: top + height + scrollY },
        left: { left: (left + window.scrollX), top: (top + window.scrollY) + (height - height2) / 2 },
        right: { left: (left + window.scrollX + width), top: (top + window.scrollY) + (height - height2) / 2 }
      }
      contentWrapper.style.left = positions[this.position].left + 'px';
      contentWrapper.style.top = positions[this.position].top + 'px';
    },
    onClickDocument(e) {
      const { contentWrapper } = this.$refs;
      if (contentWrapper && (contentWrapper === e.target || contentWrapper.contains(e.target))) {
        return
      }
      if (this.$refs.popover &&
        (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      ) { return }
      this.close()
    },
    close() {
      this.visible = false;
      document.removeEventListener("click", this.onClickDocument);
    },
    open() {
      this.visible = true;
      setTimeout(() => {
        this.positionContent()
        document.addEventListener("click", this.onClickDocument);
      });
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {//防止冒泡，精准定位到triggerWrapper的点击事件
        if (this.visible === true) {
          this.close()
        } else {
          this.open()
        }
      }

    },
  },
};
</script>
<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;

  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px $border-color);
  background: white;

  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 8px solid transparent;
    width: 0px;
    height: 0px;
    position: absolute;
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;
    &::before,
    &::after {
      border-top-color: black;
      border-bottom: none;
      top: 100%;
      left: 10px;
    }
    &::after {
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  &.position-bottom {
    margin-top: 10px;
    &::before,
    &::after {
      left: 10px;
      border-top: none;
    }
    &::before {
      border-bottom-color: black;
      bottom: 100%;
    }
    &::after {
      border-bottom-color: white;
      bottom: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    margin-left: -10px;
    &::before,
    &::after {
      border-right: none;
      border-left-color: black;
      left: 100%;
      transform: translateY(-50%);
      top: 50%;
    }
    &::after {
      border-left-color: white;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    margin-left: 10px;
    &::before,
    &::after {
      border-left: none;
      border-right-color: black;
      right: 100%;
      transform: translateY(-50%);
      top: 50%;
    }
    &::after {
      border-right-color: white;
      right: calc(100% - 1px);
    }
  }
}
</style>

