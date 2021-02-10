<template>
  <div class="product-item" @click="$emit('click', product.productId)">
    <transition
      :name="order === 1 ? 'fade-green' : 'fade-red'"
      :duration="1500"
      mode="out-in"
    >
      <div class="product-item-bg" :key="product.priceInRouble" />
    </transition>
    <div class="product-item-value">
      {{ product.productName }} ({{ product.count }})
    </div>
    <div class="product-item-price">
      {{ product.priceInRouble.toFixed(2) }} руб.
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      order: undefined
    };
  },
  watch: {
    product: {
      deep: true,
      handler(newProp, oldProp) {
        if (newProp.priceInRouble > oldProp.priceInRouble) {
          this.order = 1;
        }
        if (newProp.priceInRouble < oldProp.priceInRouble) {
          this.order = -1;
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.product-item {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lavender;
  cursor: pointer;

  &:hover {
    background-color: #f0f3f5;
  }

  &:last-child {
    border-bottom: none;
  }
}

.product-item-bg {
  position: absolute;
  width: 100%;
  height: 100%;
}

.product-item-value {
  width: 75%;
  display: flex;
  font-size: 13px;
  line-height: 1.7;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: left;
  z-index: 2;
}

.product-item-price {
  width: 25%;
  font-weight: bold;
  font-size: 14px;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: right;
  z-index: 2;
  border-left: 1px solid #dddcdc;
}

.fade-green-enter-active {
  transition: background-color 0.5s ease;
}
.fade-green-leave-active {
  transition: background-color 0.5s ease;
}
.fade-green-enter,
.fade-green-leave-to {
  background-color: #cbebcb;
}

.fade-red-enter-active {
  transition: background-color 0.5s ease;
}
.fade-red-leave-active {
  transition: background-color 0.5s ease;
}
.fade-red-enter,
.fade-red-leave-to {
  background-color: #ebcbcb;
}
</style>
