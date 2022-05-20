<script setup>
import { onMounted } from 'vue';
import config from '../../config/config';

onMounted(() => {

});

function Login(e) {
    console.log("clicked");

    // read input from form
    let email = document.querySelector('#inputEmail').value;
    let password = document.querySelector('#inputPassword').value;

    if (email !== "" && password !== "") {
        // send data to server
        fetch(config.url + 'users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status === "success") {
                    // redirect to homepage
                    window.location.href = '/#/'
                    console.log("Data: Success");
                } else {
                    // show error
                    console.log("Error");
                }
            })
            .catch(err => console.log("error"));
    } else {
        // show error
        console.log("Error");
    }

    e.preventDefault();

}
</script>

<template>
    <div class="login">
        <div class="loginForm">
            <form action="" method="POST" name="form-login">
                <h2>Log in</h2>

                <div class="loginForm__img">
                    <img src="../../public/logo-dark.png" alt="Logo Bugfix">
                </div>

                <div>
                    <label for="inputEmail">Email</label>
                    <input type="email" name="inputEmail" id="inputEmail" placeholder="Enter email">

                    <label for="inputPassword">Password</label>
                    <input type="password" name="inputPassword" id="inputPassword" placeholder="Enter password">
                    <a><small>Forgot Password?</small></a>
                </div>

                <div class="loginForm__submit">
                    <button type="submit" @click="Login" class="loginbtn btn btn--primary">Log in</button>
                    <a href="/signup">No account? Sign up</a>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.login {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>