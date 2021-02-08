<template>
  <div class="cart">
    <h2>Корзина товаров</h2>
    <CartHeader />
    <div class="cart-items">
      <CartItem
        v-for="(cartItem, index) in cart"
        :key="index"
        :cartItem="cartItem"
        v-on:remove-product-from-cart="removeProductFromCart"
      ></CartItem>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";
import { mapState } from "vuex";
import { ActionTypes } from "@/store/action-types";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartHeader
  },
  computed: mapState({
    cart: state => state.cart.list
  }),
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch(ActionTypes.REMOVE_PRODUCT_FROM_CART, {
        id: product.productId,
        count: 1
      });
    }
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
