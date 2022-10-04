<template>
    <div id = "auth">
        <div class = "form-content">
            <h1> Authenticate </h1>
            <label> Username </label>
            <input type = "text" name = "username" placeholder = "Username" v-model ="payload.username">
            <label> Password </label>
            <input type = "password" name = "password" placeholder = "Password" v-model ="payload.password">
            <button @click = "authenticateUser(payload)" class = "btn"> Login </button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import router from "@/router";

export default {
    name: 'authenticate-user',
    data: function() {
        return {
            payload: {
                username: null,
                password: null
            }
        }
    },
    methods: {
        authenticateUser(payload) {
            return axios({
                method: 'POST',
                url: `http://localhost:3035/user/authenticate`,
                data: payload,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                }
            })
            .then(response => {
                console.log("User authenticated: ", { response });
                return router.push('/');
            })
            .catch(error => {
                console.error("User failed to authenticate: ", { error });
                return router.push('/login');
            });
        },
    }
}

</script>

<style scoped>
h1 {
    margin-bottom: 25px;
    text-align: center;
}

#auth {
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
    padding: 15px 50px 25px 50px;
    border-radius: 25px;
}

</style>
