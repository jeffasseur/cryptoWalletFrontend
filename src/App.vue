<template>
  <header id="nav">
    <router-link to="/">
      <i class="bx bx-home-alt-2 bx-sm"></i>
      <span>Home</span>
    </router-link>
    <router-link to="/wallet">
      <i class="bx bx-wallet bx-sm"></i>
      <span>Wallet</span>
    </router-link>
    <router-link to="/transfers">
      <i class="bx bx-transfer-alt bx-sm"></i>
      <span>Transfers</span>
    </router-link>
    <router-link to="/profile">
      <i class="bx bx-user bx-sm"></i>
      <span>Profile</span>
    </router-link>
  </header>
  <router-view />
</template>

<style lang="scss">
@import './sass/app.scss';

body {
  margin: 0;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
}

a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
}

a:hover {
  color: $color-primary;
}

a>span:hover {
  text-decoration: underline;
  color: $color-primary;
}
</style>