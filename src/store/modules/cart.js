export const cart = {
  namespaced: true,
  state: () => ({
    list: new Map()
  }),
  mutations: {
    addProductToCart: (state, productId) => {
      const copiedList = new Map(state.list);
      if (copiedList.has(productId)) {
        copiedList.set(productId, state.list.get(productId) + 1);
      } else {
        copiedList.set(productId, 1);
      }
      state.list = copiedList;
    },
    removeProductFromCart: (state, payload) => {
      const copiedList = new Map(state.list);
      copiedList.delete(payload);
      state.list = copiedList;
    },
    setCount: (state, payload) => {
      state.list = new Map(state.list).set(payload.id, payload.count);
    }
  }
};
