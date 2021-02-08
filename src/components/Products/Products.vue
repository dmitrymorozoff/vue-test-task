<template>
  <div class="products">
    <h2>Список товаров</h2>
    <Collapse v-for="(group, key) in productGroups" :key="key">
      <CollapseHeader slot="header">{{ key }}</CollapseHeader>
      <CollapseContent slot="content">
        <ProductItem
          v-for="product in group"
          @add-product-to-cart="addProductToCart"
          :key="product.productId"
          :product="product"
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
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "Products",
  components: {
    CollapseHeader,
    CollapseContent,
    Collapse,
    ProductItem
  },
  computed: {
    ...mapGetters("products", ["productGroups"])
  },
  created() {
    this.getNames();
  },
  methods: {
    ...mapMutations("cart", ["addProductToCart"]),
    ...mapActions("products", ["getNames"])
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
