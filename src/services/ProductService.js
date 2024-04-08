import http from "../../HttpRequests.js";

class ProductService {
  load() {
    return http.get("/products");
  }
  NewProduct(product) {
    return http.post("/products", product);
  }
  deleteProduct(product) {
    return http.delete(`/products/${product.id}`);
  }
}

export default new ProductService();
