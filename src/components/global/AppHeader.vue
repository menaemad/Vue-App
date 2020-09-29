<template>
    <div>
        <router-link to="/" exact>Home</router-link> |
        <router-link to="/about">About</router-link>|
        <router-link to="/Help">Help</router-link>|
        <router-link to="/ListUsers">List Users</router-link>|
        <router-link to="/ListResources">List Resources</router-link> |
        <router-link to="/SingleResource">Single Resource</router-link> |
        <router-link to="/Register">Register</router-link> |
        <router-link to="/Login">Login</router-link>
    </div>


</template>

<script>
export default {
    name: "AppHeader"
};
</script>
