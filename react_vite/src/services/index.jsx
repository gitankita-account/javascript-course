import axios from "axios";

export const httpService = axios.create();

httpService.interceptors.request.use((config) => {
  config.baseURL = "https://jsonplaceholder.typicode.com";

  return config;
});

httpService.interceptors.response.use((config) => {
  console.log(config, "axios response");
  return config.data;
});
