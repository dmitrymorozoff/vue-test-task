export const cart = {
  namespaced: true,
  state: () => ({
    list: []
  }),
  getters: {
    totalPriceInRouble: state => {
      if (state.list.length > 0) {
        return state.list
          .map(item => item.totalPriceInRouble)
          .reduce((x, y) => x + y)
          .toFixed(2);
      }
    }
  },
  mutations: {
    addProductToCart: (state, product) => {
      const currentProduct = state.list.find(
        x => x.productId === product.productId
      );

      if (currentProduct) {
        currentProduct.count += 1;
        currentProduct.totalPriceInRouble += product.priceInRouble;
      } else {
        state.list.push({
          ...product,
          totalPriceInRouble: product.priceInRouble,
          totalCount: product.count,
          count: 1
        });
      }
    },
    removeProductFromCart: (state, payload) => {
      const foundIndex = state.list.findIndex(x => x.productId === payload.id);

      if (foundIndex !== -1) {
        state.list.splice(foundIndex, 1);
      }
    },
    setCount: (state, payload) => {
      const foundIndex = state.list.findIndex(x => x.productId === payload.id);
      const currentProduct = state.list[foundIndex];

      if (foundIndex !== -1) {
        currentProduct.count = payload.count;
        currentProduct.totalPriceInRouble =
          payload.count * currentProduct.priceInRouble;
      }
    }
  }
};
