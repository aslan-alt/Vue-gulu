<template>
  <transition name="fade">
    <!-- <div > -->
    <div class="sider" v-if="show">
      <button @click="hide" class="tab">
        <slot name="button"></slot>
      </button>
      <div class="content">
        <slot name="content"></slot>
      </div>
    </div>
    <!-- </div> -->

  </transition>
</template>


<script>
export default {
  name: "aslanSider",
  data() {
    return {
      show: this.visible,
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hide() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  margin-left: -200px;
}
.sider {
  position: relative;
  > button {
    border: none;
    // position: absolute;
    // top: 0;
    // right: 0;
    &:focus {
      outline: none;
    }
  }
  .tab {
    width: 100%;
    border: none;
    padding: 10px 0;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50%;
  }
}
</style>

