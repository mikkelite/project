<template>
    <div>
        <NavBar />
        <div class="logout">
            <router-link class="logout-button" to="/login" @click="logout">Logout </router-link>
            <router-link class="logout-button" to="/" >Home</router-link>
        </div>
        <!-- Only loads user name if it exists -->
        <div class="header">
            <h1 v-if="user"> Welcome to Your Dashboard, {{ user.fName }}!</h1>
        </div>
        <!-- Uses AccountDetails component -->
        <account-details></account-details>
    </div>

</template>

<script>
import UserDataService from '@/services/UserDataService';
import AccountDetails from "../components/AccountDetails";
import NavBar from './NavBar.vue';

export default {
    name: "userProfile",

    components: {
        AccountDetails,
        NavBar
    },

    data(){
        return {
            user: null,
            NavBar

        }
    },

    methods: {
        // event handler to remove uid from local storage and simulate the logout feature.
        logout(){         
            localStorage.removeItem('uid');
            this.$router.push({name: "MainPage"})
            
        },

        retrieveUser(){
            const id = localStorage.getItem('uid');
            console.log("UID: " + id);
            UserDataService.get(id)
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    },

    mounted(){
        this.retrieveUser();

    },
}
</script>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
        height: 40%;
        width: auto;
    }
    .header {
        position: relative;
        margin-top: 10px;
        background: #19619493;
        color: #fff;
        padding: 1px;
        text-align: center;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: small;
    }
    

    .welcome-message {
        font-size: 10px;
        color: #333;
    }
    .logout {
        display: flex;
        justify-content: flex-end;
        margin-top: 2px;
    }
    .logout-button {
       
        display: inline-block;
        margin: 10px;
        padding: 12px 20px;
        background-color: #4d80b4;
        color: white;
        text-decoration: none;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    }
    .logout-button:hover {
        background-color: #0056b3;
    }
</style>