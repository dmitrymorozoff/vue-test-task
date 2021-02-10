export const cart = {
  namespaced: true,
  state: () => ({
    list: new Map()
  }),
  mutations: {
    // Добавляем товар в корзину в виде пары ключ-значение айди товара-количество товара
    addProductToCart: (state, productId) => {
      const copiedList = new Map(state.list);
      if (copiedList.has(productId)) {
        copiedList.set(productId, state.list.get(productId) + 1);
      } else {
        copiedList.set(productId, 1);
      }
      state.list = copiedList;
    },
    // Удаляем товар из корзины по айди товара
    removeProductFromCart: (state, productId) => {
      const copiedList = new Map(state.list);
      copiedList.delete(productId);
      state.list = copiedList;
    },
    // Меням количество товара по айди товара
    setCount: (state, { id, count }) => {
      state.list = new Map(state.list).set(id, count);
    }
  }
};
