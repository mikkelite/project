import http from "../../HttpRequests.js";

class ProductService {
  load() {
    return http.get("/products");
  }
  newProduct(id) {
    return http.post(`/products/${id}`);
  }
}

export default new ProductService();
