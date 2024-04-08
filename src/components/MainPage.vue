<template>
<div>
<p>Enter description of product</p>
<input type="text" id="description" v-model="filterDescription"> 
<p>Enter name of product</p>
<input type="text" id="name" v-model="filterName">  
    <ul v-if="products.length">
      <li v-for="product in filterProducts" :key="product.id" >
        {{ product.nameString }} <br /> {{ product.price }} <br /> {{ product.descriptionString }}
        
        <button @click="deleteProduct(product)">Delete</button>
      </li>
    </ul>
    <a href="http://localhost:8081/AddProductPage" >AddProductPage</a>
</div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default{

    name:"ProductDisplayed",

    data(){
        return{
        products:[],
        filterDescription:'',
        filterName:''
        }    
    },
    methods:{
      async fetchProducts() {
      try {
        const response = await ProductService.load(); 
        console.log(response.data)
        this.products = response.data; 
      } catch (error) {
        console.error('Error fetching products:', error); 
      }
    },
    async deleteProduct(product){
      const confirmation = confirm("Are you sure you want to delete this product?");
      if(confirmation){
        const response=await ProductService.deleteProduct(product)
        console.log(response.status)
        if(response.status==200){
          alert("Product deleted successfully!");
          location.reload()
        }
        else {
          alert("Error deleting product!");
          
        }
      }
    }
 },
    computed:{
      filterProducts(){
      if(this.filterDescription === '' && this.filterName ===''){
        return this.products
      }
      else
      return this.products.filter((product) => {
        const lowerCaseDescription = product.descriptionString.toLowerCase();
        const lowerCaseName = product.nameString.toLowerCase();
        let descriptionMatch=''
        let nameMatch=''
        if(lowerCaseDescription.includes(this.filterDescription.toLowerCase())){
          descriptionMatch = this.filterDescription 
        }
        if(lowerCaseName.includes(this.filterName.toLowerCase())){
          nameMatch = this.filterName
        }
        return descriptionMatch || nameMatch;
      });
    }
    },
    mounted(){
        this.fetchProducts()
    }
}

</script>
<style>

body {
  font-family: Arial, sans-serif; 
  margin: 0; 
}
p{
    display: inline-flex;
    padding:10px
}
input{
    display: inline-block;
    margin: auto;
    box-sizing: border-box; 
}
ul {
  list-style: none;
  padding: 0;
  margin: 0; 
}

li {
  display: flex; 
  margin: 10px; 
  padding: 10px; 
  border: 1px solid #ddd; 
  border-radius: 5px; 
}

li a {
  text-decoration: none;
  color: #000;
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
</style>

