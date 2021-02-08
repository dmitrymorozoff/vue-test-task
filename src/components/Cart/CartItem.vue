<template>
  <div class="cart-item">
    <div>{{ cartItem.groupName }}, {{ cartItem.productName }}</div>
    <div><input type="number" v-model.number="count" /> шт.</div>
    <div>{{ cartItem.totalPrice.toFixed(2) }}</div>
    <div>
      <button
        @click="
          $emit('remove-product-from-cart', {
            id: cartItem.productId,
            count: 1
          })
        "
      >
        удалить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cartItem: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      count: this.cartItem.count
    };
  },
  watch: {
    cartItem: {
      immediate: true,
      deep: true,
      handler(newCartItem) {
        this.count = newCartItem.count;
      }
    }
  }
};
</script>

<style lang="scss">
.cart-item {
  width: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;

  > div {
    text-align: left;
    padding-left: 10px;
    line-height: 1.2;
    font-size: 14px;

    &:nth-child(1) {
      width: 50%;
    }

    &:nth-child(2) {
      width: 25%;

      input {
        width: 40%;
        margin-right: 5px;
      }
    }

    &:nth-child(3) {
      width: 15%;
    }

    &:nth-child(4) {
      width: 10%;

      button {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: #f95f54;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
