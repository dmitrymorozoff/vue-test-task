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

h2 {
  font-weight: 600;
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
  justify-content: center;
  align-items: center;
}

.main {
  display: flex;
  justify-content: center;
  width: 85%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: -12px -12px 24px rgba(255, 255, 255, 0.6),
    12px 12px 24px rgba(0, 6, 39, 0.1);
}

@media only screen and (max-width: 1350px) {
  .main {
    flex-direction: column;
  }
}
</style>
