<template>
  <div class="cart">
    <h2>Корзина товаров</h2>
    <CartHeader />
    <div class="cart-items">
      <CartItem
        v-for="(cartItem, index) in list"
        :key="index"
        :cartItem="cartItem"
        @remove-product-from-cart="removeProductFromCart"
      ></CartItem>
    </div>
    <div class="total-price">
      Общая стоимость
      <div class="total-price-value">{{ totalPriceInRouble || 0 }} руб.</div>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartHeader
  },
  computed: {
    ...mapGetters("cart", ["totalPriceInRouble"]),
    ...mapState("cart", ["list"])
  },
  methods: {
    ...mapMutations("cart", ["removeProductFromCart"])
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
