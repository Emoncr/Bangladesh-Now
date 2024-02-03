"use client"
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

const SIteNavbar = ({ item }) => {
    const params = useParams();
  
    return (
        <li>
            <Link
                href={`/${item.name}/${item.id}`}

                className={`text-base font-inter ${params.category === item.name ? "text-brand !border-b-brand" : "text-[#2d3038]"} font-medium pb-2 border-b-2 border-b-transparent hover:text-brand hover:border-b-brand duration-500 capitalize text-center`}
            >
                {item.name}
            </Link>
        </li>
    )
}

export default SIteNavbar