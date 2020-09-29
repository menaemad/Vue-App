<template>
    <div id="hoba">
        <h2>List Of Resources</h2>
        <div class="container">
            <table class="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Pantone Value</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="inf in ListR" :key="inf.id">
                        <td>{{ inf.name }}</td>
                        <td>{{ inf.year }}</td>
                        <td>{{ inf.pantone_value }}</td>
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
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ListResources",
    data() {
        return {
            ListR: axios
                .get("https://reqres.in/api/unknown")
                .then(response => (this.ListR = response.data.data))
        };
    }
};
</script>

<style>
h2 {
    font-size: 40px;
}
</style>
