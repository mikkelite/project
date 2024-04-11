<template>
    <div class="user-info">
    <h2>{{ title }}</h2>
    <div class="user-detail"><span v-if="user">Name: {{ user.fName}} {{ user.lName }} </span></div>
    <div class="user-detail"><span v-if="user">Email: {{ user.email }} </span></div>
    <div class="user-detail"><span v-if="user">Role: {{ user.role }}</span> </div>
</div>

</template>

<script>
import UserDataService from '@/services/UserDataService';
export default {
    name: "accountDetails",

    data(){
        return {
            uid: 0,
            title: "User Information",
            user: null,
        }
    },

    methods: {
        retrieveUserInfo(){
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
        this.retrieveUserInfo();
    },
}
</script>

<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        background-color: #f4f4f4;
        height: auto;
        width: auto;
    }
    .user-info {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 20px;
        max-width: 400px;
        margin: 10px auto;
    }
    .user-info h2 {
        color: #333;
        font-size: 24px;
    }
    .user-detail {
        margin-top: 10px;
        font-size: 16px;
    }
    .user-detail span {
        font-weight: bold;
    }
</style>