import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-89f8b.firebaseio.com/",
});

export default instance;
