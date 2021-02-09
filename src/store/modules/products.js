import { shop } from "@/api/shop";
import { RequestStatus } from "@/constants/request-status";

export const products = {
  namespaced: true,
  state: () => ({
    list: [],
    listRequestStatus: null,
    names: [],
    namesRequestStatus: null
  }),
  getters: {
    listWithRoubles: (state, getters, rootState) => {
      return state.list.map(product => ({
        priceInRouble: product.price * rootState.dollarRate,
        ...product
      }));
    }
  },
  actions: {
    getAllProducts: ({ commit, state }) => {
      commit("setAllProductsStatus", RequestStatus.PENDING);
      return shop
        .getProducts(state)
        .then(products => {
          commit("setAllProducts", products);
          commit("setAllProductsStatus", RequestStatus.SUCCESS);
        })
        .catch(error => {
          commit("setAllProductsStatus", RequestStatus.FAIL);
          console.error(error);
        });
    },
    getNames: ({ commit, dispatch }) => {
      commit("setNamesStatus", RequestStatus.PENDING);
      return shop
        .getNames()
        .then(({ data: names }) => {
          commit("setNames", names);
          dispatch("getAllProducts");
          commit("setNamesStatus", RequestStatus.SUCCESS);
        })
        .catch(error => {
          console.error(error);
          commit("setNamesStatus", RequestStatus.FAIL);
        });
    }
  },
  mutations: {
    setAllProducts: (state, products) => {
      state.list = products;
    },
    setAllProductsStatus: (state, payload) => {
      state.listRequestStatus = payload;
    },
    setNames: (state, names) => {
      state.names = names;
    },
    setNamesStatus: (state, payload) => {
      state.namesRequestStatus = payload;
    }
  }
};
