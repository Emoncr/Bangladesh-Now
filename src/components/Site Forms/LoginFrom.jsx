"use client"
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';


const LoginFrom = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!data.email) return toast("Email feild empty")
        if (!data.password) return toast("Password feild is empty")


        const options = { method: "POST", body: JSON.stringify(data) }
        try {
            setLoading(true)
            const res = await (await fetch("/api/user/login", options)).json();
            setLoading(false)
            if (res.success !== true) {
                toast.error(res.message)
            }
            else {
                window.location.href = '/';
            }
        } catch (error) {
            setLoading(false)
            toast.error('Login failed!')
        }
    }


    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                    <input
                        onChange={e => setData({ ...data, email: e.target.value })}
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
                <div className="relative ">
                    <input
                        onChange={e => setData({ ...data, password: e.target.value })}
                        autoComplete="off"
                        id="password"
                        name="password"
                        type="password"
                        className="peer placeholder-transparent h-[52px] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold "
                        placeholder="Password"
                        required
                    />

                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold mt-2">Password</label>
                </div>
                <div className="relative mt-3 flex items-center justify-end">
                    <Link href={"/recover_password"} className="font-inter font-medium hover:underline hover:text-brand transition ">forget password?</Link>
                </div>
                <div className="relative mt-3 w-full">
                    <button   disabled={loading} className="bg-brand text-white rounded-md px-6 py-2 font-inter font-semibold w-full">
                        {
                            loading ? "Loading..." : "Login"
                        }
                    </button>
                </div>
                <div className="relative mt-5 ">
                    <p className="font-inter font-medium  text-center transition ">Don't have account? <Link href={"/resister"} className='hover:text-brand hover:underline underline' >Create a new accout</Link> </p>
                </div>
            </div>
        </form>
    )
}

export default LoginFrom