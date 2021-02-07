<template>
  <div class="cart-item">
    <div>
      Книги, Алгоритмы. Построение и анализ. Т. Кормен, Ч. Лейзерсон, Р. Ривест,
      К. Штайн.
    </div>
    <div><input type="text" /> шт.</div>
    <div>954 руб.</div>
    <div><button>удалить</button></div>
  </div>
</template>

<script>
export default {
  name: "CartItem"
};
</script>

<style lang="scss">
.cart-item {
  width: 100%;
  display: flex;
  padding: 10px;
  box-sizing: border-box;

  > div {
    text-align: left;
    padding-left: 10px;
    line-height: 1.2;
    font-size: 14px;

    &:nth-child(1) {
      width: 50%;
    }
    &:nth-child(2) {
      width: 25%;

      input {
        width: 40%;
        margin-right: 5px;
      }
    }
    &:nth-child(3) {
      width: 15%;
    }
    &:nth-child(4) {
      width: 10%;

      button {
        padding: 5px;
        box-sizing: border-box;
        border-radius: 3px;
        background-color: #f95f54;
        border: none;
        outline: none;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
