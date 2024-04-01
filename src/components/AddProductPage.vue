<template>
    <form>
        <label>name of product</label>
        <input v-model="newProduct.nameString">
        <label>price of product</label>
        <input v-model="newProduct.price">
        <label>number in stock</label>
        <input v-model="newProduct.NumberInStock">
        <label>description of product</label>
        <input v-model="newProduct.descriptionString">
        <label>specifications of product</label> 
        <input v-model="newProduct.specificationString">
        <button @click="PostProduct" type="submit"></button>
    </form>
</template>
<script>
import ProductService from '@/services/ProductService';
export default {
name:AddProductPage,
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