import axios from "axios";

const orkestraApi = axios.create({
  baseURL: "https://dev.orkestra.mx/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.VUE_APP_ORKESTRA_API_KEY}`,
  },
});

export default orkestraApi;
