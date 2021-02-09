<template>
  <div class="products">
    <h2>Список товаров</h2>
    <Collapse v-for="(group, key) in productGroups" :key="key">
      <CollapseHeader slot="header">{{ key }}</CollapseHeader>
      <CollapseContent slot="content">
        <ProductItem
          v-for="product in group"
          :key="product.productId"
          @click="clickOnProductItem(product)"
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
import { mapMutations, mapGetters, mapActions, mapState } from "vuex";
import { Utils } from "@/services/utils";

export default {
  name: "Products",
  components: {
    CollapseHeader,
    CollapseContent,
    Collapse,
    ProductItem
  },
  data() {
    return {
      interval: undefined
    };
  },
  computed: {
    ...mapGetters("products", ["listWithRoubles"]),
    ...mapState({
      listInCart: state => state.cart.list,
      listRequestStatus: state => state.products.listRequestStatus,
      productGroups() {
        return Utils.groupBy(this.listWithRoubles, "groupName");
      }
    })
  },
  created() {
    this.getNames();
    this.interval = setInterval(() => {
      this.updateDollarRate();
      this.getAllProducts();
    }, 5000);
  },
  beforeDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  },
  methods: {
    ...mapMutations({
      addProductToCart: "cart/addProductToCart",
      updateDollarRate: "updateDollarRate"
    }),
    ...mapActions("products", ["getNames", "getAllProducts"]),
    clickOnProductItem({ count, productId }) {
      if (this.listInCart.has(productId)) {
        if (this.listInCart.get(productId) < count) {
          this.addProductToCart(productId);
        }
      } else {
        this.addProductToCart(productId);
      }
    }
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
  margin-bottom: 20px;
}
</style>
