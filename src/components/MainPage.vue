<template>
 <div>
    <NavBar />
    <router-link to="/AccountCreation" class="nav-button">Sign up</router-link>
    
 </div>
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
            <img :src="product.imageSrc" alt="/assets/favicon.ico"/>  
          </div>
                               
          <div id="Reviews">
            <button @click="renderReviews(product.id)" class="reviews-button">Reviews: {{ product.reviews.length }}</button>
          </div>
        </div>
        <br />
       Price: {{ product.price }} $ <br />
        {{ product.descriptionString }} <br />
       Rating: {{ product.rating }} /5
       
        <ProductReview v-if="showReviews && this.productId===product.id" :ReviewId="product.id"/>
        <button v-if="user.role==='Admin'" @click="deleteProduct(product)" class="delete-button">Delete</button>
      </li>
    </ul>
    <div class="logout">
       <button class="logout-button" to="/login" @click="logout">Logout </button>
    </div>
  </div>
  
  
</template>

<script>
import ProductService from '@/services/ProductService';
import ProductReview from './ProductReview.vue';
import NavBar from './NavBar.vue';




export default {
  name: 'ProductDisplayed',
  components:{ProductReview,NavBar},
 

  data() {
    return {
      products: [],
      user:{id:-1,fNmae:'',lName:'',email:'',password:'',role:''},  
      imageSource:"",  
      filterDescription: '',
      filterName: '',
      showReviews:false,
      productId:0
    };
  },
  methods: {
    logout(){         
        localStorage.removeItem('uid');
        window.location.reload();
     },
  
    async fetchProducts() {
      try {
        const response = await ProductService.load();
        console.log(response.data);
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async retrieveUserInfo(){
      const id = localStorage.getItem('uid');
      console.log("UID: " + id);
      
      if(id!==null){
        await UserDataService.get(id)
              .then(response => {
                  this.user = response.data;
              })
              .catch(error => {
                  console.log(error);
              })
            
          console.log(this.user)
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
    },   
 

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
    
    this.retrieveUserInfo();
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
  margin: 0;
  padding: 0;
}
.filter-area {
  width: auto; 
  margin-top: 5%;
  padding: 2%;
  position: fixed;
}
 
div.products {
  -webkit-margin-top-collapse:collapse
}
#Main{ 

  width: fit-content;
  margin-top: 17%;
  box-sizing: content-box;
  border: 1px solid #ddd; 
  border-radius: 5px;
  padding: 5%;
  display: block; 
  background-color: white;
}

div {
  box-sizing: content-box;
}
 

.reviews{
  background-color: white;
  display: block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #1b70c5;
  border-radius: 5px;
  
}
p {
    display: inline-flex;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size:x-large;
    font-style: italic,bold;
    color: #0056b3;
    padding: 10px;
    padding-right: 20px;
}
input {
  display: inline-block;
  margin: auto;
  box-sizing: border-box;
}
ul {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  list-style:none;
  padding: 5% ;
  margin: 0;
  box-sizing: border-box;
}



#showProducts {
  float:inline-start;
  display: block;
  box-sizing: content-box;
  width: fit-content; 
  margin-top: 5%;
  position: fixed;
  margin-top: 5%;
  background-color: aliceblue;
  padding: 10px;
}

.products {
  display:inherit;
  width: 80%;
  margin: 10px;
  padding: 5px;
  border: 1px solid ;
  border-radius: 5px;
  background-color:#648bb4bf;
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

button:hover {
  background-color: #3a7ca5; 
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
    position: absolute;
}
#NameProduct{
  font-family:  'Arial Narrow Bold', sans-serif;
  font-size:large;
  color:white;
  width: 80%;
  background: linear-gradient(#84a8cc 70%, rgb(80, 112, 170));
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
button,
a {
  outline: none; 
}

button:focus,
a:focus {
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.2); 
}
</style>
