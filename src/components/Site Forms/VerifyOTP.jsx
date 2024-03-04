"use client"
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { MdArrowForwardIos } from 'react-icons/md'

const VerifyOTP = ({ propsInfo }) => {
  const { email, setActiveForm } = propsInfo
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    email: email
  })


  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!data.otp) return toast.error("OTP feild empty")
    if (data.otp.length > 6) return toast.error("Invalid OTP")

    const options = { method: "POST", body: JSON.stringify(data) }
    try {
      setLoading(true)
      const res = await (await fetch("/api/passwordRecover/verifyOTP", options)).json();
      setLoading(false)
      if (res.success !== true) {
        toast.error(res.message)
      }
      else {
        setActiveForm("setNewPass")
      }
    } catch (error) {
      setLoading(false)
      toast.error('Wrong OTP')
    }
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <h3 className="text-xl font-semibold font-inter">Enter OTP</h3>
      <p className="text-sm font-medium font-inter text-gray-600 mt-1">We send you an OTP {email && `at ${email}`}</p>
      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

        <div className="relative ">
          <input
            onChange={e => setData({ ...data, otp: e.target.value })}
            autoComplete="off"
            id="OTP"
            name="OTP"
            type="number"
            className="peer placeholder-transparent h-[52px] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold "
            placeholder="Enter OTP"
            required
          />

          <label htmlFor="OTP" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold mt-2">Enter OTP</label>
        </div>

        <div className="relative mt-3">
          <button
            disabled={loading}
            className="bg-brand text-white rounded-md px-5 py-2 font-inter font-semibold flex items-center justify-center">
            {
              loading ? "Loading..." : <span className='flex items-center justify-center'> Verify OTP  <MdArrowForwardIos className='ml-1' /></span>
            }
          </button>
        </div>

      </div>
      <Toaster/>
    </form>
  )
}

export default VerifyOTP