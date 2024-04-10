<template>
<form>
    <h1>Account Creation</h1>      
        <br />
        <label>Enter First Name</label>
        <input v-model="newProduct.price" required>
        <br />
        <label>Enter Last Name</label>
        <input v-model="newProduct.NumberInStock" required>    
        <br />
        <label>Enter Email Address</label> 
        <input type="email" v-model= required>
        <br />
        <button @click="CreateUser" type="submit">Create User</button>
    </form>
</template>
<script>
export default{
    data(){
        return{
            User:{
                fName:"",
                lName:"", 
                role:"", 
                password:""
            }
        }
    },
    methods:{
        CreateUser(){

        }

    }

}
</script>