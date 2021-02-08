<template>
  <div class="product-item" v-on:click="$emit('add-product-to-cart', product)">
    <div class="product-item-value">
      {{ product.productName }} ({{ product.count }})
    </div>
    <div class="product-item-price">
      {{ product.price }}
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
  }
};
</script>

<style scoped lang="scss">
.product-item {
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

.product-item-value {
  width: 90%;
  display: flex;
  font-size: 14px;
  padding: 10px;
  box-sizing: border-box;
  text-align: left;
}

.product-item-price {
  width: 20%;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  box-sizing: border-box;
  text-align: right;
}
</style>
