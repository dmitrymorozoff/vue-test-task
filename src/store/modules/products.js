import { ActionTypes } from "@/store/action-types";
import { MutationTypes } from "@/store/mutation-types";
import { shop } from "@/api/shop";
import { RequestStatus } from "@/constants/request-status";
import { Utils } from "@/services/utils";

export const products = {
  state: () => ({
    list: [],
    listRequestStatus: null,
    names: [],
    namesRequestStatus: null
  }),
  getters: {
    productGroups: state => {
      return Utils.groupBy(state.list, "groupName");
    }
  },
  actions: {
    [ActionTypes.GET_ALL_PRODUCTS]: ({ commit, state }) => {
      commit(MutationTypes.SET_ALL_PRODUCTS_STATUS, RequestStatus.PENDING);
      return shop
        .getProducts()
        .then(response => {
          const products = response.data.Value.Goods;
          const newProducts = products.map(product => {
            const groupName = state.names[product.G].G;
            const productName = state.names[product.G].B[product.T].N;
            return {
              groupName,
              productName,
              ...Utils.renameKeys(product, {
                C: "price",
                G: "groupId",
                T: "productId",
                P: "count"
              })
            };
          });

          commit(MutationTypes.SET_ALL_PRODUCTS, newProducts);
          commit(MutationTypes.SET_ALL_PRODUCTS_STATUS, RequestStatus.SUCCESS);
        })
        .catch(error => {
          commit(MutationTypes.SET_ALL_PRODUCTS_STATUS, RequestStatus.FAIL);
          console.error(error);
        });
    },
    [ActionTypes.GET_NAMES]: ({ commit, dispatch }) => {
      commit(MutationTypes.SET_NAMES_STATUS, RequestStatus.PENDING);
      return shop
        .getNames()
        .then(response => {
          const names = response.data;
          commit(MutationTypes.SET_NAMES, names);
          dispatch(ActionTypes.GET_ALL_PRODUCTS);
          commit(MutationTypes.SET_NAMES_STATUS, RequestStatus.SUCCESS);
        })
        .catch(error => {
          console.error(error);
          commit(MutationTypes.SET_NAMES_STATUS, RequestStatus.FAIL);
        });
    }
  },
  mutations: {
    [MutationTypes.SET_ALL_PRODUCTS]: (state, products) => {
      state.list = products;
    },
    [MutationTypes.SET_ALL_PRODUCTS_STATUS]: (state, payload) => {
      state.listRequestStatus = payload;
    },
    [MutationTypes.SET_NAMES]: (state, names) => {
      state.names = names;
    },
    [MutationTypes.SET_NAMES_STATUS]: (state, payload) => {
      state.namesRequestStatus = payload;
    }
  }
};
