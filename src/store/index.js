import Vue from "vue";
import Vuex from "vuex";
import { cart } from "@/store/modules/cart";
import { products } from "@/store/modules/products";
import { Utils } from "@/services/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dollarRate: 100
  },
  mutations: {
    updateDollarRate: state => {
      const newDollarRate = Utils.getRandomInt(20, 80);
      state.dollarRate = newDollarRate;
    }
  },
  actions: {},
  modules: {
    cart,
    products
  }
});
