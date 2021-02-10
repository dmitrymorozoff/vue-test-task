import { Api } from "@/api/instance";
import { Utils } from "@/services/utils";

export const shop = {
  getProducts() {
    return Api.get("data.json").then(response => {
      const products = response.data.Value.Goods;
      return products.map(product => {
        return Utils.renameKeys(product, {
          C: "price",
          G: "groupId",
          T: "productId",
          P: "count"
        });
      });
    });
  },
  getNames() {
    return Api.get("names.json").then(response => {
      const names = response.data;

      for (const namesKey of Object.keys(names)) {
        names[namesKey] = Utils.renameKeys(names[namesKey], {
          G: "groupName",
          B: "products"
        });

        for (const productKey of Object.keys(names[namesKey].products)) {
          names[namesKey].products[productKey] = Utils.renameKeys(
            names[namesKey].products[productKey],
            {
              N: "productName",
              T: "productId"
            }
          );
        }
      }

      return names;
    });
  }
};
