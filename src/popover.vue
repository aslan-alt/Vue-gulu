<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
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
  methods: {
    xxx() {
      this.visible = !this.visible;
      console.log("改变样式");
      let eventHandler = () => {
        this.visible = false;
        document.removeEventListener("click", eventHandler);
        console.log("删除事件");
      };
      if (this.visible === true) {
        setTimeout(() => {
          console.log("添加事件");
          document.addEventListener("click", eventHandler);
        }, 500);
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
  .content-wrapper {
    position: absolute;
    bottom: 100%;
    left: 0%;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>

