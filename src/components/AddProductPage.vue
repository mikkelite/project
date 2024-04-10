<template>
    <form>
        <label>name of product</label>
        <input type="text" v-model="newProduct.nameString" required>
        <br />
        <label>price of product</label>
        <input type="number" v-model="newProduct.price" required>
        <br />
        <label>number in stock</label>
        <input type="number" v-model="newProduct.NumberInStock" required>
        <br />
        <label>description of product</label>
        <input type="text" v-model="newProduct.descriptionString" required>
        <br />
        <label>specifications of product</label> 
        <input type="text" v-model="newProduct.specificationString" required>
        <br />
        <button @click="PostProduct" type="submit">Submit Product</button>
    </form>
</template>
<script>
import ProductService from '@/services/ProductService';
export default {
name:"AddProductPage",
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
        }
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
p{
    display: inline-flex;
    padding:10px
}
input{
    display: inline-block;
    margin: auto;
    box-sizing: border-box;
    margin: 10px;
 
   
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
