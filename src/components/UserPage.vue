<template>
<body>
    <form class="signup-form">
        <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" name="firstName" v-model="userRegisterRequest.fName" required>
            <p v-if="!CheckIfNumerical(userRegisterRequest.fName)">Please enter a valid name.</p>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" id="lastName" name="lastName" v-model="userRegisterRequest.lName" required>
            <p v-if="!CheckIfNumerical(userRegisterRequest.lName)">Please enter a valid name.</p>
        </div>
        <div class="form-group">
            <label for="email">Email Address</label>
            <input type="email" id="email" name="email" v-model="userRegisterRequest.email" required>
            <p v-if="!validateEmail(userRegisterRequest.email)">Please enter a valid email address.</p>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" name="password" v-model="userRegisterRequest.password" required>
        </div>
        <div class="form-group">
            <input type="submit" value="Create Account" @click="createUser">
        </div>
    </form>
</body>
</template>

<script>
import RegisterService from '@/services/RegisterService';

export default{
    name: "userRegister",
    data(){
        return{
            userRegisterRequest:{
                fName:"",
                lName:"",
                email:"",
                password:"",
                role:"User"
            }
        }
    },
    methods:{
    validateEmail(email) {
        const re = /^[\w.+_-]+@[a-zA-Z-0-9.]+\.[a-zA-Z]{2,}$/;//regex for email 
        return re.test(email);
    },
    CheckIfNumerical(field){
        return isNaN(field) && typeof field !== 'boolean';
    },
    createUser(event){
            
            if (this.validateEmail(this.userRegisterRequest.email) && this.CheckIfNumerical(this.userRegisterRequest.lName) && this.CheckIfNumerical(this.userRegisterRequest.fName)){  
                event.preventDefault();  
                RegisterService.createUser(this.userRegisterRequest)
                .then(response => {
                    let user = response.data;
                    console.log(user);
                    this.message = user;
                    this.$router.push({name: "MainPage"})
                })
                .catch(error => {
                    console.log(error.response.data);
                })
        }
       
    }, 
  },
}
</script>
<style>

body, html {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .signup-form {
            width: 100%;
            max-width: 400px;
            margin: auto; 
            padding: 30px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            text-align: start;
        }

        .form-group input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        .form-group input[type="submit"] {
           
            
            font-size: 16px;
            width: 100%;
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

        .form-group input[type="submit"]:hover {
            background-color: #0056b3;
        }
</style>

