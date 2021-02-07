<template>
  <div id="app">
    <div class="main">
      <Products />
      <Cart />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products/Products";
import Cart from "@/components/Cart/Cart";

export default {
  name: "App",
  components: {
    Products,
    Cart
  }
};
</script>

<style lang="scss">
body {
  background-color: #f0f3f5;
  display: flex;
  justify-content: center;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
