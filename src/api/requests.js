import axios from "axios";
import { baseURL } from "./config";


export let requests = {
    auth: {
        login: login =>
          axios.post(`${baseURL}/api/login`, login),

        signUp: signUp => 
        axios.post(`${baseURL}/api/register`, signUp),
    },
    
}