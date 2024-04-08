<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <h1>Product Reviews</h1>
    <div v-for="review in reviews">
      <p>Reviews:{{ review }}</p>
      <ul></ul>
    </div>
  </div>
</template>
<script>
import ProductService from '@/services/ProductService';

export default {
  name: 'ProductReview',
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    async getReview() {
      try {
        const id = this.$route.params.id;
        const response = await ProductService.getProductReview(id);
        this.reviews = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
  },
  mounted() {
    this.getReview();
  },
};
</script>
<style></style>
