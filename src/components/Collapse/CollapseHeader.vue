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
  font-size: 14px;
  color: black;
  font-weight: 600;
}
</style>
