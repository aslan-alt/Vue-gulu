<template>
  <div
    class="col"
    :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft:(gutter/2)+'px',paddingRight:(gutter/2)+'px'}"
  >
    <div class="xxx">
      <slot />
    </div>
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
  mounted() {
    console.log(this.gutter);
  },
};
</script>
<style lang="scss" scoped>
$width: 4.166666;
.xxx {
  border: 1px solid green;
}
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

