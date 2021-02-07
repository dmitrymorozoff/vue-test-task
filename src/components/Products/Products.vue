<template>
  <div class="products">
    <h2>Список товаров</h2>
    <Collapse v-for="(category, key) in products" :key="key">
      <CollapseHeader slot="header">{{ key }}</CollapseHeader>
      <CollapseContent slot="content">
        <ProductItem
          v-for="product in category"
          :key="product.T"
          :id="product.T"
          :categoryId="3"
          name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
          :count="product.P"
          :price="`${product.C} USD`"
        />
      </CollapseContent>
    </Collapse>
  </div>
</template>

<script>
import CollapseHeader from "@/components/Collapse/CollapseHeader";
import CollapseContent from "@/components/Collapse/CollapseContent";
import Collapse from "@/components/Collapse/Collapse";
import ProductItem from "@/components/Products/ProductItem";
import { mapState } from "vuex";
import { ActionTypes } from "@/store/action-types";

export default {
  name: "Products",
  components: {
    CollapseHeader,
    CollapseContent,
    Collapse,
    ProductItem
  },
  computed: mapState({
    products: state => state.products.list
  }),
  created() {
    this.$store.dispatch(ActionTypes.GET_ALL_PRODUCTS);
    this.$store.dispatch(ActionTypes.GET_NAMES);
  }
};
</script>

<style lang="scss">
.products {
  width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  margin-bottom: 40px;
}
</style>
