import axios from "axios";

const baseUrl = "http://localhost:3333";

axios.create({
  baseURL: baseUrl,
});

export { axios, baseUrl };
