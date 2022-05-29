<script setup>
import { ref, onMounted } from 'vue';
import config from "./../../config/config";
let transfers = ref([1, 2]);

onMounted( () => {
    fetch(config.url + "transfers", {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            transfers.value = data.data.transfers;
            console.log(transfers);
        })
        .catch(err => console.log(err));
});
</script>

<template>
    <div>
        <h1>All Transfers</h1>
    </div>
    <div class="transfers">
        <ul>
            <li v-for="(transfer, index) in transfers" :key="index">
                <i class="bx bx-arrow-to-bottom icon" style="font-size: 1.2em;"></i>
                <p class="sender">{{ transfer.sender }}</p>
                <p>transfered</p>
                <p class="amount">{{ transfer.amount }}</p>
                <p class="coin">{{ transfer.coin }}</p>
                <p>to</p>
                <p class="receiver">{{ transfer.receiver }}</p>
            </li>
        </ul>
    </div>

    <div class="send">
        <a href="#/send" class="btn btn--primary" style="width: 90vw; font-size: 1.1em;">
            <i class="bx bx-arrow-to-top"></i>
            Send
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import "./../sass/app.scss";

.transfers {
    display: flex;
    justify-content: flex-start;
    margin: 0 auto;
}

ul {
    list-style: none;
    padding: 0;
    text-align: left;
    width: 90vw;
}

li {
    display: flex;
    gap: 6px;
    margin: 1em 0;
    background-color: $color-secondary-orange;
    padding: 1em 2em;
    border-radius: 5px;
    box-shadow: $box-shadow-orange;
    transition: transform .5s ease-in-out;
}

li:hover {
    transform: scale(1.2);
}
</style>