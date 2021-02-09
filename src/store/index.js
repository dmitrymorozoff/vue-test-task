import Vue from "vue";
import Vuex from "vuex";
import { cart } from "@/store/modules/cart";
import { products } from "@/store/modules/products";
import { Utils } from "@/services/utils";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dollarRate: 60
  },
  mutations: {
    updateDollarRate: state => {
      state.dollarRate = Utils.getRandomInt(20, 80);
    }
  },
  actions: {},
  modules: {
    cart,
    products
  }
});
