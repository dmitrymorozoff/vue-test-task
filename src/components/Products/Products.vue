<template>
  <div class="products">
    <Collapse>
      <CollapseHeader slot="header">Книги</CollapseHeader>
      <CollapseContent slot="content">
        <ProductItem
          name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
          count="5"
          price="100 USD"
        />
        <ProductItem
          name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
          count="5"
          price="300 USD"
        />
        <ProductItem
          name="Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест, К. Штайн."
          count="5"
          price="500 USD"
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

export default {
  name: "Products",
  components: {
    CollapseHeader,
    CollapseContent,
    Collapse,
    ProductItem
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
