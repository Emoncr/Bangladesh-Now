"use client"
import React, { useState } from 'react'

import VerifyEmail from './VerifyEmail';
import VerifyOTP from './VerifyOTP';
import NewPassForm from './NewPassForm';

const RecoverPassForm = () => {
    const [email, setEmail] = useState("")
    const [activeForm, setActiveForm] = useState("email")



    return (
        <>
            {activeForm === "email" && <VerifyEmail propsInfo={{ email, setEmail,activeForm, setActiveForm }} />}
            {activeForm === "otp" && <VerifyOTP propsInfo={{ email, activeForm, setActiveForm }} />}
            {activeForm === "setNewPass" && <NewPassForm propsInfo={{ activeForm, setActiveForm, email }} />}
        </>
    )
}

export default RecoverPassForm