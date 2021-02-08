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
    <div class="total-price">
      Общая стоимость
      <div class="total-price-value">{{ totalPrice || 0 }} руб.</div>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";
import { mapGetters, mapState } from "vuex";
import { ActionTypes } from "@/store/action-types";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartHeader
  },
  computed: {
    ...mapGetters(["totalPrice"]),
    ...mapState({
      cart: state => state.cart.list
    })
  },
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

.total-price {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 15px 0;
  box-sizing: border-box;
}

.total-price-value {
  color: #4caf50;
  font-weight: 600;
  font-size: 16px;
  margin-left: 15px;
}
</style>
