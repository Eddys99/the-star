<template>
    <div id = "register">
        <h1> Register </h1>
        <div class = "form-content">
            <label> Username </label>
            <input type = "text" name = "username" placeholder = "Username" v-model ="register.username">
            <label> Email </label>
            <input type = "text" name = "email" placeholder = "Email" v-model ="register.email">
            <label> Password </label>
            <input type = "password" name = "password" placeholder = "Password" v-model ="register.password">
            <label> Confirm password </label>
            <input type = "password" name = "password2" placeholder = "Confirm password" v-model ="register.password2">
            <button @click = "registerUser(register)" class = "btn"> Register </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register-user',

        data() {
            return {
                register: {
                    username: '',
                    email: '',
                    password: '',
                    password2: ''
                }
            }
        },

        methods: {
            registerUser (payload) {
                console.log(payload);
            }
        }
    }
</script>

<style scoped>
#register {
    color: white;
    padding: 0 250px 0 250px;
    margin: 50px auto auto auto;
    display: table;
}

label {
    padding: 15px;
    margin: 10px 0 10px 0;
}

input {
    padding: 15px;
    margin: 10px 0 10px 0;
    display: block;
    border: none;
    background: #191919;
    color: white;
    outline-width: 0;
    width: 350px;
    border-radius: 15px;
}

.btn {
    background-color: blueviolet;
    color: white;
    padding: 10px 25px 10px 25px;
    margin: 8px;
    border: none;
    border-radius: 25px;
    opacity: 0.9;
    cursor: pointer;
}

.form-content {
    background-color: #3a3a3a;
    padding: 50px;
    border-radius: 25px;
}

</style>
