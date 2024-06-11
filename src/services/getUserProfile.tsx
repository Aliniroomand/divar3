import api from "../config/api";
import { getCookie } from "../utils/cookie";


const accessToken =getCookie("accessToken")
const refreshToken =getCookie("refreshToken")
 
const getUserProfile=()=>
    api.get("user/whoami",{headers:{Authorization :`bearer ${accessToken}`}});
export {getUserProfile}

