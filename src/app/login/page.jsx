
import Link from 'next/link'
import React from 'react'

const Login = () => {

    return (
        <section className='bg-gray-100 min-h-screen'>
            <div className="container">
                <div className="min-h-screen  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 sm:max-w-[600px] w-full sm:mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand/60 to-brand/90 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div>
                                    <h3 className="text-2xl font-semibold font-inter">Login Now</h3>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <form >
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="relative">
                                                <input autoComplete="off" id="email" name="email" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                                <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold">Email Address</label>
                                            </div>
                                            <div className="relative">
                                                <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                                <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold">Password</label>
                                            </div>
                                            <div className="relative mt-3 flex items-center justify-end">
                                                <Link href={"/recover_password"} className="font-inter font-medium hover:underline hover:text-brand transition ">forget password?</Link>
                                            </div>
                                            <div className="relative mt-3">
                                                <button className="bg-brand text-white rounded-md px-6 py-2 font-inter font-semibold">Login</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login