import axios from "axios";

const instance = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  timeout: 15000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  proxy: false
});

export default instance;
