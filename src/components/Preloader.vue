<template>
  <transition name="fade">
    <div v-if="show" class="preloader">
      <div class="circle-elements">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.circle-elements {
  display: flex;
}

.circle {
  width: 15px;
  height: 15px;
  margin: 5px;
  background-color: #b2b2ff;
  border-radius: 50%;
  animation: scaleIn 0.7s ease infinite;
  transform: scale(0);

  @for $i from 1 to 6 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 0.095s;
    }
  }
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
