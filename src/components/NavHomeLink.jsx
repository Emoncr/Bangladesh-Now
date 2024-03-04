"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'



const NavHomeLink = () => {
    const params = useParams();

    return (
        <li>
            <Link
                href={"/"}

                className={`text-sm lg:text-base font-inter ${JSON.stringify(params) === "{}" ? "text-brand !border-b-brand" : "text-[#2d3038]"} font-medium pb-2 border-b-2 border-b-transparent hover:text-brand hover:border-b-brand duration-500 capitalize text-center`}
            >
               Home
            </Link>
        </li>
    )
}

export default NavHomeLink