<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/wallet">Wallet</router-link>
      <router-link to="/transfers">Transfers</router-link>
      <router-link to="/profile">Profile</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  background-color: lightgray;
  padding: 30px;
  display: flex;
  gap: 16px;
  justify-content: center;
}
</style>
