<template>
  <div class="cart">
    <CartHeader />
    <div class="cart-items">
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
      <CartItem></CartItem>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartHeader
  }
};
</script>

<style lang="scss">
.cart {
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
}
.cart-items {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
