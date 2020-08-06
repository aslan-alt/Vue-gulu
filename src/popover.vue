<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
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
      if (this.$refs.contentWrapper && this.$refs.contentWrapper.contains(e.target)) {
        return
      }
      // if (this.$refs.popover &&
      //   (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
      // ) { return }
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
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>

