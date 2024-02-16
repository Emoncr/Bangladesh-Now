import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'
import SIteNavbar from './SIteNavbar'
import NavMobile from './NavMobile';


async function getData() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/category/categories`);
        const data = await res.json()
        if (!data.success) {
            throw new Error("Navlist Fetch failed!")
        }
        return data.categories

    } catch (error) {
        console.log(error);
        throw new Error("Navlist Fetch failed!")
    }
}


const TopBanner = async () => {
    const navItems = await getData();
    return (
        <>
            <TopHeader></TopHeader>
            <section className='py-5 pb-0 bg-white shadow-brandShadow border-b-2 border-b-gray-200'>
                <div className="container grid grid-cols-12 items-center md:gap-10 relative py-5 md:py-0">
                    <div className="logo col-span-4">
                        <Link href={"/"}>
                            <img src="/assets/images/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="Addvertisment col-span-8 w-full ">
                        <div className='flex items-center justify-end'>
                            <Link href={"/"} className='hidden md:block'>
                                <img src="/assets/images/top-bannner.jpg" alt="Logo" />
                            </Link>
                        </div>

                        <div className='w-full md:hidden'>
                            <NavMobile navItems={navItems} />
                        </div>
                    </div>
                </div>
                <div className='md:mt-10 mt-0'>
                    <div className="container md:flex items-center justify-center hidden">
                        <nav>
                            <ul className='flex items-center justify-center gap-6 lg:gap-10  p-2'>
                                {
                                    navItems?.length !== 0 && navItems?.map(item =>
                                        <SIteNavbar key={item.id} item={item} />
                                    )
                                }
                            </ul>
                        </nav>

                    </div>
                </div>
            </section >
        </>

    )
}

export default TopBanner