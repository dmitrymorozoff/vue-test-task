import { ActionTypes } from "@/store/action-types";
import { MutationTypes } from "@/store/mutation-types";
import axios from "axios";
import { Utils } from "@/services/utils";

export const products = {
  state: () => ({
    list: [],
    names: []
  }),
  actions: {
    [ActionTypes.GET_ALL_PRODUCTS]: ({ commit }) => {
      axios.get(process.env.VUE_APP_BASE_URL + "data.json").then(response => {
        const productGroups = Utils.groupBy(response.data.Value.Goods, "G");
        commit(MutationTypes.SET_ALL_PRODUCTS_LIST, productGroups);
      });
    },
    [ActionTypes.GET_NAMES]: ({ commit }) => {
      axios.get(process.env.VUE_APP_BASE_URL + "names.json").then(response => {
        const names = response.data;
        commit(MutationTypes.SET_NAMES, names);
      });
    }
  },
  mutations: {
    [MutationTypes.SET_ALL_PRODUCTS_LIST]: (state, products) => {
      state.list = products;
    },
    [MutationTypes.SET_NAMES]: (state, names) => {
      state.names = names;
    }
  }
};
