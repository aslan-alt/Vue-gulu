<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-show="visible" @click.stop>
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
  mounted() {
    console.log(this.$refs.trigger);
  },
  methods: {
    xxx() {
      this.visible = !this.visible;

      let eventHandler = () => {
        this.visible = false;
        document.removeEventListener("click", eventHandler);
      };

      if (this.visible === true) {
        setTimeout(() => {
          let {
            width,
            height,
            top,
            left,
          } = this.$refs.triggerWrapper.getBoundingClientRect();

          let contentElement = this.$refs.contentWrapper;
          document.body.appendChild(contentElement);

          contentElement.style.left = left + window.scrollX + "px";
          contentElement.style.top = top + scrollY + "px";

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
}
.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>

