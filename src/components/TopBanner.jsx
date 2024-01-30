"use client"
import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'
import SIteNavbar from './SIteNavbar'
import { usePathname } from 'next/navigation'

const TopBanner = ({isLogin}) => {
    const pathName = usePathname()



 
    return (
        <>
            {
                !pathName.startsWith("/resister") && !pathName.startsWith("/login") && !pathName.startsWith("/recover_password") &&
                <>
                    <TopHeader isLogin={{isLogin}} ></TopHeader>
                    <section className='py-5 pb-0 bg-white shadow-brandShadow'>
                        <div className="container grid grid-cols-12 items-center">
                            <div className="logo col-span-4">
                                <Link href={"/"}>
                                    <img src="/assets/images/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            <div className="Addvertisment col-span-8 ">
                                <div className='flex items-center justify-end'>
                                    <Link href={"/"}>
                                        <img src="/assets/images/top-bannner.jpg" alt="Logo" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className="container flex items-center justify-center">
                                <SIteNavbar />
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default TopBanner