<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display:inline-block;">
      <slot></slot>
    </span>
  </div>
</template>


<script>
export default {
  name: "aslanPopover",
  data() {
    return {
      visible: false,
    };
  },
  mounted() { },
  methods: {
    positionContent() {//找到按钮的位置，从而改变popover内容的位置
      const { top, left } = this.$refs.triggerWrapper.getBoundingClientRect();
      let contentElement = this.$refs.contentWrapper;
      document.body.appendChild(contentElement);
      contentElement.style.left = left + window.scrollX + "px";
      contentElement.style.top = top + scrollY + "px";
    },
    onClickDocument(e) {
      if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {
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
  margin-top: -10px;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0.5em 1em;
  // box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0 1px 1px $border-color);
  background: white;
  transform: translateY(-100%);
  max-width: 20em;
  word-break: break-all;
  &::before,
  &::after {
    content: "";
    display: block;
    border: 8px solid transparent;
    border-top-color: black;
    width: 0px;
    height: 0px;
    position: absolute;
    top: 100%;
    left: 10px;
  }
  &::after {
    border-top-color: white;
    top: calc(100% - 1px);
  }
}
</style>

