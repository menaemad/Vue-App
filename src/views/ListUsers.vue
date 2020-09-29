<template>
    <div id="hoba">
        <h2>List Of All Users</h2>
        <div class="container">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="inf in UsersPage1" :key="inf.id">
                        <td>{{ inf.first_name }}</td>
                        <td>{{ inf.last_name }}</td>
                        <td>{{ inf.email }}</td>
                        <td><img v-bind:src="inf.avatar" height="50%" /></td>
                        <td>
                            <a href="#" class="badge badge-primary p-2"
                                >Details</a
                            >|
                            <a href="#" class="badge badge-danger p-2">Delete</a
                            >|
                            <a href="#" class="badge badge-success p-2">Edit</a>
                        </td>
                    </tr>
                    <tr v-for="inf in UsersPage2" :key="inf.id">
                        <td>{{ inf.first_name }}</td>
                        <td>{{ inf.last_name }}</td>
                        <td>{{ inf.email }}</td>
                        <td><img v-bind:src="inf.avatar" height="50%" /></td>
                        <td>
                            <a href="#" class="badge badge-primary p-2"
                                >Details</a
                            >|
                            <a href="#" class="badge badge-danger p-2">Delete</a
                            >|
                            <a href="#" class="badge badge-success p-2">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ListUsers",
    data() {
        return {
            UsersPage1: axios
                .get("https://reqres.in/api/users?page=1")
                .then(response => (this.UsersPage1 = response.data.data)),
            UsersPage2: axios
                .get("https://reqres.in/api/users?page=2")
                .then(response => (this.UsersPage2 = response.data.data))
        };
    }
};
</script>

<style>
h2 {
    font-size: 40px;
}
</style>
