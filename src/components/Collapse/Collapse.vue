<template>
  <div class="collapse">
    <div class="collapse-trigger" @click="toggleCollapse">
      <div
        class="collapse-arrow"
        :style="{ transform: isVisible ? 'rotate(180deg)' : '' }"
      />
      <slot name="header"></slot>
    </div>
    <div v-show="isVisible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleCollapse() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style scoped lang="scss">
.collapse {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.collapse-trigger {
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  border-left: 3px solid #ffc389;
  background-color: #fff6ee;
  cursor: pointer;
}

.collapse-arrow {
  background-image: url("../../assets/arrow.svg");
  background-size: contain;
  display: inline-block;
  width: 12px;
  height: 12px;
  transition: 0.2s;
  margin-right: 15px;
}
</style>
