<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>


<script>
export default {
  name: "aslanCollapseItem",
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      open: false
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on('update:selected', (names) => {
      console.log(name)
      if (names.indexOf(this.name) >= 0) {
        this.open = true
      } else {
        this.open = false
      }
    })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeSelected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  },
  inject: ['eventBus']
};
</script>
<style lang="scss" scoped>
.collapseItem {
  > .title {
    border: 1px solid grey;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>

