import axios from "axios";

const port = 8080;
// const port = 8081;

export default axios.create({
    baseURL: "http://localhost:"+port+"/api",
    headers: {
        "Content-type": "application/json"
    }
});
