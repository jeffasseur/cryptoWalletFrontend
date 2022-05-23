<template>
    <h1>Send BUGs</h1>
    <div class="send">
        <div class="sendForm">
            <form action="" method="POST" name="form-send" @submit.prevent="submit">

                <div class="sendForm__img">
                    <img src="../../public/logo-dark.png" alt="Logo Bugfix">
                </div>

                <div>
                    <label for="inputFirstname">firstname:</label>
                    <input v-model="data.firstname" type="text" placeholder="Enter firstname" required>

                    <label for="inputLasstname">laststname:</label>
                    <input v-model="data.lastname" type="text" placeholder="Enter lastname" required>
                </div>

                <div>
                    <label for="inputAmount">Amount:</label>
                    <input v-model="data.amount" type="number" name="inputAmount" id="inputAmount" placeholder="Enter amount" min="10" max="100" step="10" required>
                    <br>
                    <small>only decimals, like 10, 20, 30, ...</small>
                </div>

                <div>
                    <label for="message">Choose your message</label>
                    <select v-model="data.message" name="message" id="message">
                        <optgroup label="Design">
                            <option value="Design help">Design help</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Meeting deadlines">Meeting deadlines</option>
                        </optgroup>
                        <optgroup label="Development">
                            <option value="Development help">Development help</option>
                            <option value="Feedback">Feedback</option>
                            <option value="Meeting deadlines">Meeting deadlines</option>
                        </optgroup>
                    </select>
                </div>

                <div class="sendForm__submit">
                    <button type="submit" class="loginbtn btn btn--primary">Send</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue';
import config from '../../config/config';

export default {
    name: "Send",
    setup() {
        const data = reactive({
            firstname: '',
            lastname: '',
            amount: '',
            message: ''
        });

        const submit = async () => {
            console.log(data);
            const response = await fetch(config.url + 'transfers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    receiver: data.firstname + ' ' + data.lastname,
                    sender: "Jef Fasseur",
                    amount: data.amount,
                    description: data.message
                })
            });

            const json = await response.json();

            if (json.status === "success") {
                // redirect to homepage
                window.location.href = '/#/transfers';
                console.log("Success");
            } else {
                // show error
                console.log("Error");
            }
        };

        return {
            data,
            submit
        }
    }
}
</script>

<style lang="scss" scoped>
@import './../sass/app.scss';

.send {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
}

#inputAmount::after {
    content: 'BUG';
}
</style>