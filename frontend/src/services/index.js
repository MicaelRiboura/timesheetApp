import axios from "axios";

const baseUrl = "http://localhost:3333";
axios.create({});

function setServiceToken(token) {
  console.log('setServiceToken::token: ', token);
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

axios.defaults.baseURL = baseUrl;

export { axios, setServiceToken };