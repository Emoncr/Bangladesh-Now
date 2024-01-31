import Link from 'next/link'
import React from 'react'

const SIteNavbar = ({item}) => {
    return (
        <li>
            <Link href={"/"} className='text-base font-inter text-[#2d3038] font-medium pb-2 border-b-2 border-b-transparent hover:text-brand hover:border-b-brand duration-500 capitalize' >
                {item.name}
            </Link>
        </li>
    )
}

export default SIteNavbar