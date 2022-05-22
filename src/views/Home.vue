<script setup>


</script>

<template>
    <div class="balance">
        <h1>Current Balance</h1>
        <div class="balance__amount">
            <i class="bx bx-bug"></i>
            <h2>150.00</h2>
        </div>
        <div class="balance__actions">
            <a href="#" class="btn btn--primary-outline">
                <i class="bx bx-arrow-to-top"></i>
                Send
            </a>
            <a href="#" class="btn btn--primary-outline">
                <i class="bx bx-arrow-to-bottom"></i>
                Receive
                </a>
        </div>
    </div>

    <div class="contacts">
        <div class="contacts__tiles">
            Contacts
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../sass/app.scss";

.balance {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5em;
}

.balance__amount {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .7em;
    background: $color-gradient;
    padding: 4rem 5rem;
    border-radius: 15px;
    color: $color-white;
    font-size: 2em;
}

.balance__actions {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1.5em;
}

.bx-search {
    font-size: 1.5em;
}

.search {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>