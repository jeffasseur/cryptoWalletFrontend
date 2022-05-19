<template>
    <nav>
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
    </nav>
    <router-view />
</template>

<script>
export default {
    name: 'Navigation',
}
</script>

<style lang="scss" scoped>
@import "./../sass/app.scss";
</style>