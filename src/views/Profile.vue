<script setup>
import { ref, onMounted } from 'vue';
import config from "./../../config/config";
let user = ref({
    firstname: '',
    lastname: '',
    email: '',
    balance: '',
});

onMounted( () => {
    if(localStorage.getItem('token') === null) {
        window.location.href = "/#/login";
    } else {
     fetch(config.url + "users/getByToken", {
        headers: {
            'Authorazation': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.status !== "success") {
                window.location.href = "/#/login";
            } else {
                user.value = data.data.user;
                console.log(user);
                return user;
            }
        })
        .catch(err => console.log(err));
    }
})
</script>


<template>
<div v-show="!user">
    <h1>Welcome to Bugfix</h1>
</div>
    <div v-show="!user" class="notLoggedin">
        <div class="header">
            <a class="btn btn--primary mb-4" href="/#/login">Log in</a>
            <p class="mb-4">Or if you don't have an account yet</p>
            <a class="btn btn--primary-outline" href="/#/register">Register</a>
        </div>
    </div>

    <div v-show="user">
        <h1>Profile</h1>
    </div>

    <div v-show="user">
        <div class="profile">
            <div class="profile__header">
                <div class="profile__header__img">
                    <img src="https://jeffasseur-visuals.be/wp-content/uploads/2022/05/Schermafbeelding-2022-05-29-om-17.01.32.png" alt="Profile pic">
                </div>
                <div class="profile__header__info">
                    <h1>{{user.firstname}} {{user.lastname}}</h1>
                    <p>{{user.email}}</p>
                </div>
            </div>
            <div class="profile__body__balance mb-4">
                <i class="bx bx-bug"></i>
                <h3>{{ user.balance }}</h3>
            </div>
            <div class="profile__footer">
                <a href="/#/login" class="btn btn--primary-outline">Log out</a>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@import './../sass/app.scss';

.profile__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.profile__header__img>img {
    width: 120px;
    height: 120px;
    object-fit: cover;
}

.profile__body__balance {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: .7em;
    background: $color-gradient;
    padding: 4rem 5rem;
    border-radius: 15px;
    color: $color-white;
    font-size: 2em;
    margin: 2em auto;
    max-width: 80vw;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px); 
}

.mb-4 {
    margin-bottom: 1.5rem;
}

@media screen and (min-width: 768px) {
    .profile__header {
        flex-direction: row;
        align-items: stretch;
    }

    .profile__header__img {
        width: 150px;
        height: 150px;
        margin-right: 1.5em;
    }
}
</style>