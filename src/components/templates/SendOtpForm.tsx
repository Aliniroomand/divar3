import React, { useState } from 'react';
import { sendOtp } from '../../services/auth';

const SendOtpForm = ({mobileNumber,setMobileNumber,setStep}) => {

    const [errorForInput,setErrorForInput]=useState<boolean>(false);

    const submitHandler =async (e) =>{
        e.preventDefault();
        const mobileNumberRegex = /^09[0-9]{9}$/;
        if(!mobileNumberRegex.test(mobileNumber)){
            setErrorForInput(true);
        } else {
            setErrorForInput(false);
            const {response,error}= await sendOtp(mobileNumber); 
            console.log({response,error});
            if(response){setStep(2)}
            if(error){console.log(error.response.data.message);}
        }


    }
    return (
        <form onSubmit={submitHandler}>
            <h1>ورود به حساب کاربری</h1>
            <p>برای استفاده از امکانات این سایت ،لطفا شماره موبایل خود را وارد کنید <br/>کد تأیید به این شماره پیامک خواهد شد</p>
            <label htmlFor="input"> شماره موبایل :</label>
            <input type="text" 
                    id='input'
                    onChange={(e) => {setMobileNumber(e.target.value)}}
                    value={mobileNumber|| ""} 
                    placeholder='09...'
                    dir='ltr'/>
           {errorForInput && <span> لطفا شماره موبایل را به فرمت درست وارد نمایید</span>  }       
            <button type='submit'>
                ارسال کدتایید
            </button>
        </form>
    );
};

export default SendOtpForm;