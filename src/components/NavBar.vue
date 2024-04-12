<template>
    <div id="navbar">
    <p><img src="logo.png" alt="logo">Auto Parts Finder</p>
      <router-link to="/profile" class="nav-button">Profile</router-link>
      <router-link to="/" class="nav-button">Home Page</router-link>
      <router-link to="/AddProductPage" class="nav-button">Add Products</router-link>
      <router-link to="/accountDetails" class="nav-button">Account Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style>
  p{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size:x-large;
    font-style: italic,bold;
    color: #0056b3;
    padding: 10px;
    padding-right: 20px;
  }
  img{
    width: 50px;
    height: auto;
  }
  #navbar {
    background-color: white;
    padding: 10px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .nav-button {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    
    text-decoration:solid;
    margin-right: 20px;
  }
  
  .nav-button:hover {
    color: lightgray;

  }
  </style>
  