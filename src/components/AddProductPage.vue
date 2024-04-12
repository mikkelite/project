<template>
  <div>

    <NavBar />
  </div>
  <div id="AddProduct">
    <form>
      <h2>Enter Product Details:</h2>
        <label>Name of the product</label>
        <input type="text" v-model="newProduct.nameString" required>
        <br />
        <label>Price of the product</label>
        <input type="number" v-model="newProduct.price" required>
        <br />
        <label>Stock Available</label>
        <input type="number" v-model="newProduct.NumberInStock" required>
        <br />
        <label>Description</label>
        <input type="text" v-model="newProduct.descriptionString" required>
        <br />
        <label>Any Specifications?</label> 
        <input type="text" v-model="newProduct.specificationString" required>
        <br />
        <label>URL for the Image</label> 
        <input type="text" v-model="newProduct.url" required>
        <button @click="PostProduct" type="submit" class="button">Submit Product</button>
    </form>
  </div>
</template>
<script>
import ProductService from '@/services/ProductService';
import NavBar from './NavBar.vue';
export default {
name:"AddProductPage",
components: {NavBar},
data(){
    return{
    newProduct:{
        nameString:"",
        price:0,
        NumberInStock:0,
        descriptionString : "",
        rating : 0,
        specificationString : "",
        reviews : [],
        url:''
        }, NavBar
    }
},
methods:{
    PostProduct(){
        ProductService.NewProduct(this.newProduct)
    }
}
}
</script>
<style>
body {
  font-family: Arial, sans-serif; 
  margin: 0; 
}
#AddProduct{ 
  border: 1px solid #ddd; 
  border-radius: 5px;
  padding:5%;
  display: block; 
  background-color: white;
}
h2 {
  text-align: center;

}
p{
    display: inline-flex;
    padding:10px
}
form {
  text-align: center;
  flex-direction: column;
  display: block; 
  background-color: white;
}

label {
  text-align: center;
  margin-bottom: 5px;
}

input{
    display: inline-block;
    margin: auto;
    box-sizing: border-box;
    margin: 10px;
    text-align: center;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 13px 12px 10px 50px ;
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
.button {
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

.button:hover {
  background-color: #1b70c5;
}
</style>
