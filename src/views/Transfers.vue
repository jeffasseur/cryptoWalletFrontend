<script>
import config from "./../../config/config";

// fetch transfers from server
let allTransfers;

if ( allTransfers === undefined ) {
    fetch(config.url + "transfers", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.status == "success") {
            allTransfers = data.transfers;
            console.log("fetched " + allTransfers);
        }
        else {
            console.log("Error");
        }
    })
    .catch(err => console.log(err));
} else {
    console.log("allTransfers already defined");
    console.log(allTransfers);
}
</script>


<template>
    <div>
        <h2>All Transfers</h2>
    </div>
    <div class="list">
        <ul>
            <li>
                Lijst
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import "./../sass/app.scss";
</style>