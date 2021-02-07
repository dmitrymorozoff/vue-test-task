<template>
  <div class="cart-header">
    <div>Наименование товара и описание</div>
    <div>Количество</div>
    <div>Цена</div>
    <div />
  </div>
</template>

<script>
export default {
  name: "CartHeader"
};
</script>

<style lang="scss">
.cart-header {
  width: 100%;
  display: flex;
  border-bottom: 1px solid lavender;
  font-size: 14px;
  color: black;
  font-weight: 600;
  padding: 15px;
  box-sizing: border-box;
  border-left: 3px solid #b2b2ff;
  background-color: #fafaff;

  > div {
    text-align: left;
    padding-left: 10px;

    &:nth-child(1) {
      width: 50%;
    }
    &:nth-child(2) {
      width: 25%;
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 10%;
    }
  }
}
</style>
