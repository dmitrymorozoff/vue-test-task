export const cart = {
  namespaced: true,
  state: () => ({
    list: []
  }),
  getters: {
    listWithRoubles: (state, getters, rootState) => {
      return state.list.map(product => {
        return {
          ...product,
          totalPriceInRouble:
            product.price * rootState.dollarRate * product.count
        };
      });
    },
    totalPriceInRouble: (state, getters, rootState) => {
      return state.list
        .map(item => item.price * rootState.dollarRate * item.count)
        .reduce((x, y) => x + y, 0)
        .toFixed(2);
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
      state.list = state.list.filter(product => product.productId !== payload);
    },
    setCount: (state, payload) => {
      const currentProduct = state.list.find(x => x.productId === payload.id);

      if (currentProduct) {
        currentProduct.count = payload.count;
        currentProduct.totalPriceInRouble =
          payload.count * currentProduct.priceInRouble;
      }
    }
  }
};
