<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <i class="bx bx-home-alt-2"></i>
        Home
      </router-link>
      <router-link to="/wallet">
        <i class="bx bx-wallet"></i>
        Wallet
      </router-link>
      <router-link to="/transfers">
        <i class="bx bx-transfer-alt"></i>
        Transfers
      </router-link>
      <router-link to="/profile">
        <i class="bx bx-user"></i>
        Profile
      </router-link>
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
  background-color: #E4E4E4;
  padding: 16px;
  display: flex;
  gap: 16px;
  justify-content: center;
}

a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: underline;
  color: aqua;
}
</style>