<template>
    <body>
        <form class="login-form" action="/login" method="post">
            <div class="form-control">
                <label for="username">Email</label>
                <input type="text" id="email" name="email" v-model="userLoginRequest.email" required>
            </div>
            <div class="form-control">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" v-model="userLoginRequest.password" required>
            </div>
            <div class="form-control">
                <input type="submit" value="Login" @click="login">
            </div>
        </form>
    </body>

</template>

<script>
import LoginService from "../services/LoginService";

export default{
    name: "userLogin",
    data(){
        return {
            userLoginRequest: {email: "", password:""},
            message: ""
        }
    },

    methods: {
        login(event){
            event.preventDefault();
            LoginService.login(this.userLoginRequest)
            .then(response => {
                let user = response.data;
                console.log(user);
                this.message = user;
                this.$router.push({name: "AddProductPage"})
            })
            .catch(error => {
                console.log(error.response.data);
            })
        }
    },

    mounted(){
        this.message = "";
    }
}

</script>

<style>
body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .login-form {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .form-control {
            margin-bottom: 20px;
        }

        .form-control label {
            display: block;
            margin-bottom: 5px;
        }

        .form-control input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .form-control input[type="submit"] {
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

        .form-control input[type="submit"]:hover {
            background-color: #004494;
        }
</style>