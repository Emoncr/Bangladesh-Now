"use client"

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

const ProfileUpdateFrom = ({ userDetails }) => {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(userDetails)
  
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!data.firstName) return toast.error("FirstName feild empty")
        if (!data.lastName) return toast.error("LastName feild is empty")
        if (!data.mobile) return toast.error("Phone feild is empty")
        if (!data.email) return toast.error("Email feild empty")



        const options = { method: "POST", body: JSON.stringify(data), cache: "no-store" }
        try {
            setLoading(true)
            const res = await (await fetch(`/api/user/profile/update`, options)).json();
            setLoading(false)
            if (res.success !== true) {
                toast.error(res.message)
            }
            else {
                toast.success("Profile updated successfully")
                router.refresh()
            }
        } catch (error) {

            setLoading(false)
            toast.error('Resistration failed!')
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 items-center'>
                    <div className="relative">
                        <input
                            value={data.firstName}
                            onChange={e => setData({ ...data, firstName: e.target.value })}
                            autoComplete="off"
                            id="fistName" name="fistName"
                            type="text"
                            required
                            className="peer placeholder-transparent h-11 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold "
                            placeholder="First Name"
                        />

                        <label htmlFor="fistName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold">
                            First Name
                        </label>
                    </div>


                    <div className="relative">
                        <input
                            value={data.lastName}
                            onChange={e => setData({ ...data, lastName: e.target.value })}
                            autoComplete="off"
                            id="lastName" name="lastName"
                            type="text"
                            required
                            className="peer placeholder-transparent h-11 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold "
                            placeholder="Last name"
                        />

                        <label htmlFor="lastName" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold">
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="relative">
                    <input
                        value={data.mobile}
                        onChange={e => setData({ ...data, mobile: e.target.value })}
                        autoComplete="off"
                        id="phone" name="phone"
                        type="number"
                        required
                        className="peer placeholder-transparent h-[52px] w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-brand font-semibold "
                        placeholder="phone"
                    />

                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm font-inter font-semibold mt-2">
                        Phone
                    </label>
                </div>

                <div className="relative">
                    <input
                        value={data.email}
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
                <div className="relative mt-5 w-full">
                    <button
                        disabled={loading}
                        className="bg-brand text-white rounded-md px-6 py-2 font-inter font-semibold w-full">
                        {
                            loading ? "Loading..." : "Update Information"
                        }
                    </button>
                </div>

            </div>
        </form>
    )
}

export default ProfileUpdateFrom