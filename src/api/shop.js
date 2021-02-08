import { Api } from "@/api/instance";

export const shop = {
  getProducts() {
    return Api.get("data.json");
  },
  getNames() {
    return Api.get("names.json");
  }
};
