<template>
  <div class="cart">
    <h2>Корзина товаров</h2>
    <CartHeader />
    <div class="cart-items" v-if="listWithRoubles.length > 0">
      <CartItem
        v-for="(cartItem, index) in listWithRoubles"
        :key="index"
        :cartItem="cartItem"
        @click="removeProductFromCart"
      ></CartItem>
    </div>
    <div class="empty-cart" v-else>В корзине пока пусто</div>
    <div class="total-price">
      Общая стоимость
      <div class="total-price-value">{{ totalPriceInRouble || 0 }} руб.</div>
    </div>
  </div>
</template>

<script>
import CartHeader from "@/components/Cart/CartHeader";
import CartItem from "@/components/Cart/CartItem";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    CartItem,
    CartHeader
  },
  computed: {
    ...mapGetters("cart", ["totalPriceInRouble", "listWithRoubles"])
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

.empty-cart {
  padding: 20px;
  box-sizing: border-box;
  color: #a9a9a9;
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
