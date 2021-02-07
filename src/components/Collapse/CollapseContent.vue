<template>
  <div class="collapse-content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CollapseContent"
};
</script>

<style scoped lang="scss">
.collapse-content {
  border: 1px solid lavender;
}
</style>
