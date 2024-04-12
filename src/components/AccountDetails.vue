<template>
    <div class="user-info">
    <h2>{{ title }}</h2>
    <div class="user-detail"><span v-if="user">Name: {{ user.fName}} {{ user.lName }} </span></div>
    <div class="user-detail"><span v-if="user">Email: {{ user.email }} </span></div>
    <div class="user-detail"><span v-if="user">Role: {{ user.role }}</span> </div>
    <AddProductPage v-if="user.role==='Admin'"></AddProductPage>
</div>

</template>

<script>
import UserDataService from '@/services/UserDataService';
import AddProductPage from './AddProductPage.vue';
export default {
    name: "accountDetails",
    components:{AddProductPage},

    data(){
        return {
            uid: 0,
            title: "User Information",
            user: {id:-1,fNmae:'',lName:'',email:'',password:'',role:''},
        }
    },

    methods: {
        async retrieveUserInfo(){
        const id = localStorage.getItem('uid');
            console.log("UID: " + id);
            await UserDataService.get(id)
                .then(response => {
                    this.user = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
         console.log(this.user)
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
        padding: 1%;
        background-color: #f4f4f4;
        height: auto;
        width: auto;
    }
    h2 {
        font-size: small;
        padding: 0%;
        margin: 0;
    }
    .user-info {
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 5%;
        max-width: 400px;
        margin: 10px auto;
    }
    .user-info h2 {
        color: #333;
        font-size: 24px;
    }
    .user-detail {
        margin-top: 1px;
        font-size: 16px;
    }
    .user-detail span {
        font-weight: bold;
    }
</style>