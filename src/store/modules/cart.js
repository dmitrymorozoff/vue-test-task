import { ActionTypes } from "@/store/action-types";
import { MutationTypes } from "@/store/mutation-types";

export const cart = {
  state: () => ({
    list: []
  }),
  actions: {
    [ActionTypes.ADD_PRODUCT_TO_CART]: ({ commit }, product) => {
      commit(MutationTypes.ADD_PRODUCT_TO_CART, product);
    },
    [ActionTypes.REMOVE_PRODUCT_FROM_CART]: ({ commit }, payload) => {
      commit(MutationTypes.REMOVE_PRODUCT_FROM_CART, payload);
    }
  },
  mutations: {
    [MutationTypes.ADD_PRODUCT_TO_CART]: (state, product) => {
      const foundIndex = state.list.findIndex(
        x => x.productId === product.productId
      );
      const currentProduct = state.list[foundIndex];

      if (foundIndex !== -1) {
        currentProduct.count += 1;
        currentProduct.totalPrice += product.price;
      } else {
        state.list.push({
          ...product,
          totalPrice: product.price,
          count: 1
        });
      }
    },
    [MutationTypes.REMOVE_PRODUCT_FROM_CART]: (state, payload) => {
      const foundIndex = state.list.findIndex(x => x.productId === payload.id);
      const currentProduct = state.list[foundIndex];

      if (currentProduct.count === 1) {
        state.list.splice(foundIndex, 1);
      } else {
        currentProduct.count -= payload.count;
        currentProduct.totalPrice -= currentProduct.price;
      }
    }
  }
};
