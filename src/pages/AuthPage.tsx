import React, { useState } from 'react';
import CheckOtpForm from '../components/templates/CheckOtpForm';
import SendOtpForm from '../components/templates/SendOtpForm';


const AuthPage = () => {
    const [step,setStep]=useState<number>(1)
    const [mobileNumber,setMobileNumber]=useState<number | null>(null)
    const [verifyCode,setVerifyCode]=useState<number | null >(null)

    return (
        <>
            {step === 2 && <CheckOtpForm mobileNumber={mobileNumber} verifyCode={verifyCode} setVerifyCode={setVerifyCode} setStep={setStep} /> }
            {step === 1 && <SendOtpForm mobileNumber={mobileNumber} setMobileNumber={setMobileNumber} setStep={setStep} /> }
        </>
    );
};

export default AuthPage;




