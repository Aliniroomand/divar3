import React, { useState } from 'react';
import CheckOtpForm from '../components/templates/CheckOtpForm';
import SendOtpForm from '../components/templates/SendOtpForm';

const AuthPage = () => {
    const [step,setStep]=useState(1)
    return (
        <>
            {step === 1 && <CheckOtpForm/> }
            {step === 2 && <SendOtpForm/> }
        </>
    );
};

export default AuthPage;