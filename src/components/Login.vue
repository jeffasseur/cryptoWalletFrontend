<script setup>
import { ref, onMounted } from 'vue';
import config from '../../config/config';
let error = ref({
    status: '',
    message: ''
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
                if (data.status == "success") {
                    let token = data.data.token;
                    localStorage.setItem('token', token);
                    // redirect to homepage
                    window.location.href = '/#/';
                    return console.log("Success");
                } else {
                    // show error
                     error.value = data;
                     console.log(error);
                     return error;
                }
            })
            .catch(err => console.log(err));    
    } else {
        // show error
         let error = res.json({
            status: "failed",
            message: "Fill in your email and password"
        });
        return error;
    }

    e.preventDefault();

}
</script>

<template>
    <h1>Log in</h1>
    <div class="login">
        <div class="loginForm">
            <form name="form-login" @submit.prevent="submit">

                <div class="loginForm__img">
                    <img src="../../public/logo-dark.png" alt="Logo Bugfix">
                </div>

                <div v-show="error" class="loginForm__error">
                    <p v-show="error">{{ error.message }}</p>
                </div>

                <div>
                    <label for="inputEmail">Email:</label>
                    <input type="email" name="inputEmail" id="inputEmail" placeholder="Enter email">
                </div>

                <div>
                    <label for="inputPassword">Password:</label>
                    <input type="password" name="inputPassword" id="inputPassword" placeholder="Enter password">
                    <small>Forgot password?</small>
                </div>

                <div class="loginForm__submit">
                    <button type="submit" @click="Login" class="loginbtn btn btn--primary">Log in</button>
                    <a href="/#/register">No account? Sign up</a>
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