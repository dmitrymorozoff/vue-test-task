<template>
  <div class="product-item">
    <div class="product-item-value">{{ name }} ({{ count }})</div>
    <div class="product-item-price">
      {{ price }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    name: String,
    count: Number,
    price: String
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
