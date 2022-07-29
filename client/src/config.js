import axios from "axios";

// const axios = require("axios");

export const axiosInstance = axios.create({
    baseURL : "https://amanecommerce.herokuapp.com/api/"
});