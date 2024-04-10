<template>
    <h1>Account Creation</h1>  
        <form style="display: grid">     
       
            <label>Enter First Name</label>
            <input type="text" required>
       
            <label>Enter Last Name</label>
            <input type="text" required>    
     
            <label>Enter Email Address</label> 
            <input type="email"  required>
      
            <button  @click="CreateUser" type="submit">Create User</button>
        </form>
</template>
<script>
export default{
    data(){
        return{
            User:{
                fName:"",
                lName:"", 
                role:"User", 
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
<style>
body {
  font-family: Arial, sans-serif; 
  margin: 0; 
}
label{
    margin-left: 10px;
}
p{
    display: inline-flex;
    padding:10px
}
button{
    width: fit-content
}
input{
    display: inline-block;
    margin: auto;
    box-sizing: border-box;
    margin: 10px;
    width: fit-content

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

