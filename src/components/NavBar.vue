<template>
    <div id="navbar">
    <p><img id="logo" src="logo.png" alt="logo">Auto Parts Finder</p>
      <router-link to="/profile" class="nav-button">Account Details</router-link>
      <router-link to="/" class="nav-button">Home Page</router-link>
      <router-link to="/AddProductPage" class="nav-button">Add Products</router-link>
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
    font-size:medium;
    font-style: italic,bold;
    color: #0056b3;
    padding: 0px;
    
  }
  #logo{
    width: 50px;
    height: 50px;
  }
  #navbar {
    background-color: white;
    padding: 0px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .nav-button {
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    padding: 2px;
    text-decoration:solid;
    margin-right: 20px;
  }
  
  .nav-button:hover {
    color: lightgray;

  }
  </style>
  