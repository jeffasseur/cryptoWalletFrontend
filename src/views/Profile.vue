<template>
    <div class="loggedin">
        <div class="personalData">
            <div class="personalData__img">
                <img src="../../public/logo-dark.png" alt="Logo Bugfix">
            </div>
            <div class="personalData__info">
                <h2>Jef Fasseur</h2>
                <p>jeffasseur@thomasmore.be</p>
            </div>
        </div>
    </div>

    <div class="notLoggedin">
        <div class="header">
            <h2>Welcome to Bugfix</h2>
            <a class="btn btn--primary" href="/#/login">Log in</a>
            <p>Or if you don't have an account yet</p>
            <a class="btn btn--primary-outline" href="/#/signup">Sign up</a>
        </div>
    </div>
</template>

<script>
// show div.loggedin if user is logged in
</script>

<style lang="scss" scoped>
@import './../sass/app.scss';
</style>