<template>
  <div id="Main">
    
      <p>Enter description of product</p>
      <input type="text" id="description" v-model="filterDescription" />
      <p>Enter name of product</p>
      <input type="text" id="name" v-model="filterName" />
      <a href="http://localhost:8081/AccountCreation">Sign up</a>
      <a href="http://localhost:8081/login">Sign In</a>     
  
    <ul v-if="products.length">
      <li class="products" v-for="product in filterProducts" :key="product.id">
        <div class="name-section">
          <div id="NameProduct">{{ product.nameString }} &nbsp;&nbsp;</div> 
          <div class="image-container">
            <img :src="product.imageSrc"/>  
          </div>
                               
          <div id="Reviews">
            <button @click="renderReviews(product.id)" class="reviews-button">Reviews: {{ product.reviews.length }}</button>
          </div>
        </div>
        <br />
       Price: {{ product.price }} $ <br />
        {{ product.descriptionString }} <br />
       rating: {{ product.rating }} /5
       
        <ProductReview v-if="showReviews && this.productId===product.id" :ReviewId="product.id"/>

        <button  @click="deleteProduct(product)" class="delete-button">Delete</button>
      </li>
    </ul>
  </div>
  
</template>

<script>
import ProductService from '@/services/ProductService';
import ProductReview from './ProductReview.vue';



export default {
  name: 'ProductDisplayed',
  components:{ProductReview},

  data() {
    return {
      products: [],  
      imageSource:"",  
      filterDescription: '',
      filterName: '',
      showReviews:false,
      productId:0
    };
  },
  methods: {
  
    async fetchProducts() {
      try {
        const response = await ProductService.load();
        console.log(response.data);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    //
    async deleteProduct(product) {
      const confirmation = confirm(
        'Are you sure you want to delete this product?'
      );
      if (confirmation) {
        const response = await ProductService.deleteProduct(product);
        console.log(response.status);
        if (response.status == 200) {
          alert('Product deleted successfully!');
          location.reload();
        } else {
          alert('Error deleting product!');
        }
      }
    },
    //
    renderReviews(productId){
      this.showReviews=true
      this.productId=productId
    }
  },
  computed: {
    filterProducts() {
      //if both search boxes are empty
      if (this.filterDescription === '' && this.filterName === '') {
        return this.products;
      }
      //otherwise searches based on the input boxes
      else
        return this.products.filter((product) => {
          const lowerCaseDescription = product.descriptionString.toLowerCase();
          const lowerCaseName = product.nameString.toLowerCase();
          let descriptionMatch = '';
          let nameMatch = '';
          if (
            lowerCaseDescription.includes(this.filterDescription.toLowerCase())
          ) {
            descriptionMatch = this.filterDescription;
          }
          if (lowerCaseName.includes(this.filterName.toLowerCase())) {
            nameMatch = this.filterName;
          }
          return descriptionMatch || nameMatch;
        });
    },
  },

  mounted() {
    this.fetchProducts();
  },
};//
</script>

<style>
.image-container {
  max-width: 100%;
  overflow: hidden;
}
img{
  display: block;
  max-width: 100%;
  height: auto;
  height: 100px;
}
body {
  font-family: Arial, sans-serif;
  margin: auto;
  padding: 0;
 
}
p .reviews{
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #1b70c5;
  border-radius: 5px;
  
}
p {
  display: inline-flex;
  padding: 10px;
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
  padding: 13px 12px 10px 50px ;
  margin: 0;
  overflow: hidden;
}

.products {
  display: block ;
  margin: 10px;
  padding: 10px;
  border: 1px solid ;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
  background-image: radial-gradient( farthest-corner at 40px 40px,#4d80b4 10%, transparent 90%, rgb(73, 68, 143));
}

li a {
  text-decoration: none;
  
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

#Main{ 
  border: 1px solid #ddd; 
  border-radius: 5px;

  background-color: white;
}
.filter-area {
    height: auto;
    margin-top: auto;
}
#NameProduct{
  background: linear-gradient(#4d80b4 70%, rgb(80, 112, 170));
  border:3px #73a2d1;
  padding: 3px;
  border-style:ridge;
}

a {
  margin-bottom: 5px;
  margin-left: 10px;
}

.add-product-link, .delete-button, .reviews-button, .signup-link {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #4d80b4;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.add-product-link:hover, .delete-button:hover, .reviews-button:hover, .signup-link:hover {

  background-color: #4d80b4;

}
</style>
