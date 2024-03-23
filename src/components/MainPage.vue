<template>
<div>
    <p>Enter description of product</p>
<input type="text" id="description"> 
<p>Enter name of product</p>
<input type="text" id="name">  
    <ul v-if="products.length">
      <li v-for="product in products" :key="product.id">
        {{ product.nameString }} - {{ product.price }}
      </li>
    </ul>
</div>
</template>

<script>
import ProductService from '@/services/ProductService';

export default{

    name:"ProductDisplayed",

    data(){
        return{
        products:[]
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
}</style>