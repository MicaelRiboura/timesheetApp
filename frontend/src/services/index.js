import axios from "axios";

const baseUrl = "http://localhost:3333";
axios.create({
  baseURL: baseUrl,
});

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.getItem("TM:token").replaceAll('"', "");

export { axios, baseUrl };
