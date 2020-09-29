<template>
    <div id="hoba">
        <form method="post">
            <div class="container">
                <label for="uname"><b>Username</b></label>
                <input
                    type="text"
                    placeholder="Enter Username"
                    name="uname"
                    v-model="emailUser"
                    required
                />
                <br />
                <label for="psw"><b>Password</b></label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    name="psw"
                    v-model="passwordUser"
                    required
                /><br />

                <button type="submit" @click="LoginFunc()">Login</button><br />
            </div>
        </form>
    </div>
</template>

<script>
//import axios from "axios";
//import ListResources from "../views/ListResources.vue";

export default {
    name: "Login",
    data() {
        return {
            emailUser: "cerulean",
            passwordUser: "2000"
        };
    },
    methods: {
        LoginFunc: function() {
            //axios
              //  .post("https://reqres.in/api/login", {
                //    email: this.emailUser,
                  //  password: this.passwordUser
               // });
                //.then(response => {
                   // const data = response.data;
                   // console.log(response.data);
                //});
                this.$router.replace("ListResources.vue");
        }
    }
};
</script>

<style>
form {
    border: 3px solid #f1f1f1;
}

input[type="text"],
input[type="password"] {
    width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 50%;
}

button:hover {
    opacity: 0.8;
}

.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
}

.container {
    padding: 16px;
}

span.psw {
    float: right;
    padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
        display: block;
        float: none;
    }
    .cancelbtn {
        width: 100%;
    }
}
</style>
