<template>
    <div class="search">
        <input type="search" name="searchbar" id="searchbar">
        <label for="searchbar" class="btn"><i class="bx bx-search"></i></label>
    </div>
    
    <div class="balance">
        <h3>Current Balance</h3>
        <div class="balance__amount">
            <i class="bx bx-bug"></i>
            <p>150.00</p>
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
    font-size: 1.2em;
}

.balance__actions {
    width: 100%;
    display: flex;
    justify-content: space-around;
}
</style>