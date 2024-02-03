"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";



const UserDropdown = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleLogout = async (e) => {
        try {
            setLoading(true)
            const res = await (await fetch("/api/user/logout")).json();
            setLoading(false)
            router.refresh();
        } catch (error) {
            router.refresh();
            setLoading(false)
        }
    }



    return (
        <div className="dropdown group">
            <div role="button" className="group-item !border-none !p-0 !bg-transparent !text-4xl">
                <FaCircleUser className="border-2 !border-brand rounded-full" />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-md max-w-52 hidden group-hover:block  absolute bg-white shadow-lg w-full group-hover:item:bg-red-500">
                <li className="w-full">
                    <Link className="p-1 px-3 rounded-md transition w-full text-heading_color hover:bg-gray-200 block" href={"/profile"}>Profile</Link>
                </li>
                <li className="w-full">
                    <Link className="p-1 px-3 rounded-md transition w-full text-heading_color hover:bg-gray-200 block" href={"/my_comments"}>My Comments</Link>
                </li>
                <li className="mt-1">
                    <buton
                        disable={loading}
                        onClick={handleLogout}
                        className="p-1 px-3 rounded-md transition w-full text-heading_color hover:bg-gray-200 block cursor-pointer" href={"/profile"}>

                        {
                            loading ? "Loging out.." : "Logout"
                        }
                    </buton>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown