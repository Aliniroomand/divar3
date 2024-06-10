import api from "../config/api"

// ارسال OTP
const sendOtp = async (mobileNumber)=>{
    try {
        const response= await api.post("auth/send-otp", {mobile:mobileNumber})
        return {response};
        } catch (error) {
            return{error};
            }
            }
            
            export {sendOtp }
//__________ارسال OTP_______
// چک کردن OTP
const checkOtp=async (mobileNumber,verifyCode)=>{
    try {
        const response = await api.post("/auth/check-otp",{mobile:mobileNumber ,code:verifyCode})
            return {response};
    }catch (error) {
        return {error}
    }

}
export {checkOtp}
//_______چک کردن OTP______
