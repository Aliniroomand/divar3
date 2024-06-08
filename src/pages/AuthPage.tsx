import React, { useState } from 'react';
import CheckOtpForm from '../components/templates/CheckOtpForm';
import SendOtpForm from '../components/templates/SendOtpForm';


const AuthPage = () => {
    const [step,setStep]=useState<number>(2)
    const [mobileNumber,setMobileNumber]=useState<number | null>(null)
    const [verifyCode,setVerifyCode]=useState<number | null>(null)

    return (
        <>
            {step === 1 && <CheckOtpForm/> }
            {step === 2 && <SendOtpForm mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} setStep={setStep} /> }
        </>
    );
};

export default AuthPage;