"use client"
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';


const SubscriberFrom = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!data.email) return toast.error("Email feild empty")



        const options = { method: "POST", body: JSON.stringify(data) }
        try {
            setLoading(true)
            const res = await (await fetch("/api/subscriber/create", options)).json();
            setLoading(false)
            if (res.success !== true) {
                toast.error(res.message)
            }
            else {
                toast.success(res.message)
            }
        } catch (error) {
            setLoading(false)
            toast.error('Login failed!')
        }
    }


    return (
        <>
            <form onSubmit={e => handleSubmit(e)} className="w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>
                <div className="border border-white  sm:flex sm:items-center sm:gap-4">

                    <input
                        onChange={e => setData({ ...data, email: e.target.value })}
                        type="email"
                        id="UserEmail"
                        placeholder="john@rhcp.com"
                        className="w-full border-none focus:border-transparent p-2 bg-transparent focus:outline-none caret-white text-white sm:text-sm"
                    />

                    <button
                        disabled={loading}
                        className="mt-1 w-full bg-brand px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-brand/90 sm:mt-0 sm:w-auto sm:shrink-0 font-inter">

                        {
                            loading ? "Loading..." : "Subscribe Now"
                        }
                    </button>
                </div>
            </form>
        </>
    )
}

export default SubscriberFrom