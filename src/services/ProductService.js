import http from "../../HttpRequests.js";

class ProductService {
  load() {
    return http.get("/products");
  }
  NewProduct(product) {
    return http.post("/products", product);
  }
}

export default new ProductService();
