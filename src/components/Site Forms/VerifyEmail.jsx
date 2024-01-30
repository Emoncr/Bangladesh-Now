"use client"
import { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import toast from 'react-hot-toast';


const VerifyEmail = ({ propsInfo }) => {
    const { email, setEmail, activeForm, setActiveForm } = propsInfo
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!data.email) return toast("Email feild empty")

        const options = { method: "POST", body: JSON.stringify(data) }
        try {
            setLoading(true)
            const res = await (await fetch("/api/passwordRecover/verifyEmail", options)).json();
            setLoading(false)
            if (res.success !== true) {
                toast.error(res.message)
            }
            else{
                setActiveForm("otp")
                setEmail(data.email)
            }
        } catch (error) {
            setLoading(false)
            toast.error('Wrong email')
        }
    }




    return (
        <form onSubmit={e => handleSubmit(e)}>
            <h3 className="text-xl font-semibold font-inter">Enter your email</h3>
            <p className="text-sm font-medium font-inter text-gray-600 mt-1">Enter your registerd email. We will send an OTP to your email.</p>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                    <input
                        onChange={e => setData({ email: e.target.value })}

                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-[52px] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold"
                        placeholder="Email address"
                        required
                    />

                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold mt-2">Email Address</label>
                </div>


                <div className="relative mt-3">
                    <button
                    type='submit' 
                        disabled={loading}
                        className="bg-brand text-white rounded-md px-5 py-2 font-inter font-semibold ">
                        {
                            loading ? "Loading..." : <span className='flex items-center justify-center'> Next <MdArrowForwardIos className='ml-1' /></span>
                        }
                    </button>
                </div>

            </div>

        </form>
    )
}

export default VerifyEmail