<template>
  <div class="collapse">
    <div class="collapse-trigger" @click="toggleCollapse">
      <slot name="header"></slot>
      <div
        class="collapse-arrow"
        :style="{ transform: isVisible ? 'rotate(180deg)' : '' }"
      />
    </div>
    <div v-show="isVisible">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    msg: String
  },
  data: function() {
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
  display: flex;
  flex-direction: column;
}

.collapse-trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: lavender;
}

.collapse-arrow {
  background-image: url("../../assets/arrow.svg");
  background-size: contain;
  display: inline-block;
  width: 15px;
  height: 15px;
  transition: .2s;
}
</style>