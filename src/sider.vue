<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
    </div>
  </transition>
</template>


<script>
export default {
  name: "aslanSider",
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    hide() {
      this.visible = !this.visible;
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
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>

