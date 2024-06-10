import React, { useState } from 'react';
import { checkOtp } from '../../services/auth';
import { setCookie } from '../../utils/cookie';

const checkOtpForm =  ( {mobileNumber, verifyCode, setVerifyCode,setStep}) => {
    const [verifyCodeError,setVerifyCodeError]=useState(false)
    const submitHandler=async (event)=>{
        event.preventDefault()

        if (verifyCode.length !==5 ){
            setVerifyCodeError(true)
            return
        };
    
        const {response , error} =await checkOtp(mobileNumber,verifyCode);
        if (response){
            setCookie(response.data)
        }if(error){
            console.log(error.response.data.message);
        }
    }




    return (
       <form onSubmit={submitHandler} >
        <h1>تایید کد اس ام اس شده</h1>
        <p>کد پیامک شده به شماره {mobileNumber}را وارد کنید</p>
        <label htmlFor="input">کد تأیید را وارد کنید</label>
        <input 
            type="text" 
            id='input'
            value={verifyCode ?? ""}
            placeholder='کد تایید...'
            onChange={(e)=>setVerifyCode(e.target.value)}
            />
        <button>تأیید شماره موبایل</button>
        <button onClick={()=>setStep(1)}>تغییر شماره موبایل</button>
        {verifyCodeError && <span> کد به درستی وارد نشده</span>}
       </form>
    );
};

export default checkOtpForm;








