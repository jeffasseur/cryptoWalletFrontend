<script setup>
import { onMounted } from 'vue';
import config from '../../config/config';

function Register(e) {
    console.log("clicked");

    // read input from form
    let firstname = document.querySelector('#inputFirstname').value;
    let lastname = document.querySelector('#inputLastname').value;
    let email = document.querySelector('#inputEmail').value;
    let password = document.querySelector('#inputPassword').value;

    if (email !== "" && password !== "" && firstname !== "" && lastname !== "") {
        // send data to server
        fetch(config.url + 'users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.status === "success") {
                    // redirect to loginpage
                    window.location.href = '/#/login'
                    console.log("Data: Success");
                }
            })
            .catch(err => console.log(err));
    } else {
        // show error
        console.log("Error");
    }

    e.preventDefault();

}
</script>

<template>
    <h1>Register</h1>
    <div class="Register">
        <div class="registerForm">
            <form action="" method="POST" name="form-register">

                <div class="registerForm__img">
                    <img src="../../public/logo-dark.png" alt="Logo Bugfix">
                </div>

                <div>
                    <label for="inputFirstname">Firstname:</label>
                    <input type="text" name="inputFirstname" id="inputFirstname" placeholder="Enter firstname">
                </div>

                <div>
                    <label for="inputLastname">Lastname:</label>
                    <input type="text" name="inputLastname" id="inputLastname" placeholder="Enter lastname">
                </div>

                <div>
                    <label for="inputEmail">Email:</label>
                    <input type="email" name="inputEmail" id="inputEmail" placeholder="Enter email">
                </div>

                <div>
                    <label for="inputPassword">Password:</label>
                    <input type="password" name="inputPassword" id="inputPassword" placeholder="Enter password">
                    <small><a href="#">Forgot password?</a></small>
                </div>

                <div class="loginForm__submit">
                    <button type="submit" @click="Register" class="loginbtn btn btn--primary">Register</button>
                    <a href="/#/login">already have an account? Log in</a>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './../sass/app.scss';

.register {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>