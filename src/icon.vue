<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`" />
  </svg>
</template>


<script>
import "./svg";
export default {
  name: "aslanIcon",
  props: ["name"],
};
</script>
<style lang="scss" scoped>
.g-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  display: flex;
}
</style>

