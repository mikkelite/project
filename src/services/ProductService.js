import http from '../../HttpRequests.js';

class ProductService {
  load() {
    return http.get('/products');
  }
  NewProduct(product) {
    return http.post('/products', product);
  }
  deleteProduct(product) {
    return http.delete(`/products/${product.id}`);
  }
  getProductReview(productId) {
    return http.get(`/products/${productId}/reviews`);
  }
}

export default new ProductService();
