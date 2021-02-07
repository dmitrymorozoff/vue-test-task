<template>
  <div class="cart">
    <h2>Корзина товаров</h2>
    <CartHeader />
    <div class="cart-items">
      <CartItem
        category="Книги"
        name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
        :count="4"
        price="953 руб."
      ></CartItem>
      <CartItem
        category="Книги"
        name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
        :count="7"
        price="953 руб."
      ></CartItem>
      <CartItem
        category="Книги"
        name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
        :count="4"
        price="953 руб."
      ></CartItem>
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
