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
                    <tr>
                        <td>{{ SingleR.name }}</td>
                        <td>{{ SingleR.year }}</td>
                        <td>{{ SingleR.pantone_value }}</td>
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
    name: "SingleResource",
    data() {
        return {
            SingleR: axios
                .get("https://reqres.in/api/unknown/2")
                .then(response => (this.SingleR = response.data.data))
        };
    }
};
</script>

<style>
h2 {
    font-size: 40px;
}
</style>
