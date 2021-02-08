<template>
  <div class="cart-item">
    <div>{{ cartItem.groupName }}, {{ cartItem.productName }}</div>
    <div><input type="number" :value="cartItem.count" :max="10" /> шт.</div>
    <div>{{ cartItem.totalPrice }}</div>
    <div>
      <button v-on:click="$emit('remove-product-from-cart', cartItem)">
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
