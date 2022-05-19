<script setup>
let loggedin = false;

if (loggedin) {
    document.querySelector('#logout').classList.remove('d-none');
}

</script>

<template>
    <div class="login">
        <div class="loginForm">
            <form action="" method="POST">
                <h2>Log in</h2>

                <label for="inputEmail">Email</label>
                <input type="text" name="inputEmail" id="inputEmail">

                <label for="inputPassword">Password</label>
                <input type="text" name="inputPassword" id="inputPassword">
                <p><small>Forgot Password?</small></p>

                <button type="submit" class="btn btn--primary">Log in</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.login {
    height: 100vh;
    background: $color-gradient;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>