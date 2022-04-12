import axios from "axios";

const instance = axios.create({
	baseURL: "https://dateme-backend.herokuapp.com",
});

export default instance;
