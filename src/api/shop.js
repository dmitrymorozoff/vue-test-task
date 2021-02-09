import { Api } from "@/api/instance";
import { Utils } from "@/services/utils";

export const shop = {
  getProducts(state) {
    return Api.get("data.json").then(response => {
      const products = response.data.Value.Goods;
      return products.map(product => {
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
    });
  },
  getNames() {
    return Api.get("names.json");
  }
};
