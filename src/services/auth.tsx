import api from "../config/api"

const sendOtp = async (mobileNumber)=>{
try {
    const response= await api.post("auth/send-otp", {mobileNumber})
    return {response}
} catch (error) {
    return{error}
}
}

export {sendOtp }