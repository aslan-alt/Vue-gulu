<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>


<script>
export default {
  name: "aslanCollapse",

};
</script>
<style lang="scss" scoped>
$grey: grey;
.collapse {
  border: 1px solid $grey;
  border-radius: 4px;
}
</style>

