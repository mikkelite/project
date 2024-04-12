<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div>
    <h1 id="review">Product Reviews</h1>

      <ul v-for="review in reviews">
        <p style="font-size: larger;">- -</p><li class="reviews">{{ review }}</li>
      </ul>
  </div>
</template>
<script>
import ProductService from '@/services/ProductService';

export default {
  name: 'ProductReview',
  props: ['ReviewId'],  
  data() {
    return {
      reviews: [],
    };
  },
  methods: {
    async getReview() {
      try {
        const response = await ProductService.getProductReview(this.ReviewId);
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
<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
#review{
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 900;
  font-size: large;
  text-align: center;
  color: #1b70c5;
}
.reviews{
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #1b70c5 !important;
  border-radius: 5px;
}
input {
  display: inline-block;
  margin: auto;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
}

li {
  width: 80%;
  display: block !important;
  padding: 10px;
  border: 1px solid #1b70c5 !important;
  border-radius: 3px;
}

li a {
  text-decoration: none;
  color: #0d22dd !important;
}

li a:hover {
  color: #333;
}

li:hover {
  background-color: #eee;
}
button {
  margin: 10px;
}
.name-section {
  display: flex;
}
.filter-area {
  width: 66%;
  top: 1%;
  padding: 8px 8px 2px 95px;
  margin-top: 2%;
}h1{
  margin-top: 0px;
}</style>

