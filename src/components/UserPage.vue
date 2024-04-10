<template>
    <h1>Account Creation</h1>  
        <form>     
            <br />
            <label>Enter First Name</label>
            <input type="text" required>
            <br />
            <label>Enter Last Name</label>
            <input type="text" required>    
            <br />
            <label>Enter Email Address</label> 
            <input type="email"  required>
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