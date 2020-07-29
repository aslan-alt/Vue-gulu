<template>
  <div class="col" :class="colClass" :style="colStyle">
    <slot />
  </div>
</template>


<script>
export default {
  name: "aslanRow",
  props: {
    span: {
      type: [Number, String],
    },
    offset: {
      type: [Number, String],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },
  computed: {
    colStyle() {
      return {
        paddingLeft: this.gutter / 2 + "px",
        paddingRight: this.gutter / 2 + "px",
      };
    },
    colClass() {
      const { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
  },
};
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
  // background: grey;
  width: 50%;

  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class-prefix: offset-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
</style>

