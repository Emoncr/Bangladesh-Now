import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'

const TopBanner = () => {
    return (
        <>
            <TopHeader></TopHeader>
            <section className='py-5 bg-white shadow-brandShadow'>
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
            </section>
        </>

    )
}

export default TopBanner