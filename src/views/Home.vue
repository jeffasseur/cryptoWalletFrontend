<script setup>


</script>

<template>
    <h1>Welcome Jef</h1>
    <div class="balance">
        <div class="balance__amount">
            <i class="bx bx-bug"></i>
            <h2>150.00</h2>
        </div>
        <div class="balance__actions">
            <a href="#/send" class="btn btn--primary-outline">
                <i class="bx bx-arrow-to-top"></i>
                Send
            </a>
            <a href="#/transfers" class="btn btn--primary-outline">
                <i class="bx bx-arrow-to-bottom"></i>
                All transfers
                </a>
        </div>
    </div>

    <div class="assets">
        <h3>Assets</h3>
        <ul class="assets__list">
            <li>
                <i class="bx bx-bug"></i>
                <span>150</span>
                <p><strong>BUG</strong></p>
            </li>
            <li>
                <i class="bx bx-bitcoin"></i>
                <span>0.0001</span>
                <p><strong>BTC</strong></p>
            </li>
            <li>
                <i class="bx bx-coin-stack"></i>
                <span>0.02</span>
                <p><strong>ETH</strong></p>
            </li>
            <li>
                <i class="bx bx-coin-stack"></i>
                <span>72.45</span>
                <p><strong>RUNE</strong></p>
            </li>
            <li>
                <i class="bx bx-coin-stack"></i>
                <span>242.00</span>
                <p><strong>XRP</strong></p>
            </li>
        </ul>
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
.assets__list {
    background: $color-gray-light;
    margin: 0 1em;
    border-radius: 15px;
}

.assets__list>li {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1em;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 1.2em 1em;
    color: $color-text;
}

.assets__list>li>i, .balance__amount>i {
    font-size: 1.5em;
}

h3 {
    margin-bottom: 1em;
}
</style>