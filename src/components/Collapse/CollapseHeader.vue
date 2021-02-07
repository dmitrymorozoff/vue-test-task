<template>
  <div class="collapse-header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CollapseHeader"
};
</script>

<style scoped lang="scss">
.collapse-header {
  font-size: 16px;
  color: black;
}
</style>
