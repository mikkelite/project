<template>
    <div>
        <div class="logout">
            <router-link class="logout-button" to="/login" @click="logout">Logout </router-link>
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

export default {
    name: "userProfile",

    components: {
        AccountDetails
    },

    data(){
        return {
            user: null

        }
    },

    methods: {
        // event handler to remove uid from local storage and simulate the logout feature.
        logout(){         
            localStorage.removeItem('uid');
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
        padding: 20x;
        background-color: #f4f4f4;
        height: auto;
        width: auto;
    }
    .header {
        background: #4baaee;
        color: #fff;
        padding: 10px 0;
        text-align: center;
    }
    .content {}

    .welcome-message {
        font-size: 20px;
        color: #333;
    }
    .logout {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;
    }
    .logout-button {
        display: inline-block;
        margin-top: 20px;
        padding: 10px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 5px;
    }
    .logout-button:hover {
        background-color: #0056b3;
    }
</style>