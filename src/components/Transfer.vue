<template>
    <div>
        <p>{{ transfer.amount }}</p>
        <p></p>
        <p></p>
    </div>
</template>

<script>
import config from "./../../config/config";

    function getTransfers() {
        fetch(config.url + "/transfers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.transfers = data.transfers;
            })
            .catch(err => console.log(err));        

        return this.transfers;
    }




    export default {
        name: 'Transfer',
        props: {
            transfers: Array
        }
    }
</script>