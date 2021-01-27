import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-f6096.firebaseio.com/",
});

export default instance;
