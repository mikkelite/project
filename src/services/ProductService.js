import http from "../../HttpRequests.js";

class ProductService {
  load() {
    return http.get("/products");
  }
}

export default new ProductService();
