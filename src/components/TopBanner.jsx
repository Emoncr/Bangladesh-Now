import React from 'react'
import TopHeader from './TopHeader'
import Link from 'next/link'
import SIteNavbar from './SIteNavbar'
import NavMobile from './NavMobile';
import NavHomeLink from './NavHomeLink';


async function getData() {
    try {
        const res = await fetch(`${process.env.BASE_URL}/api/category/categories`);
        const data = await res.json()
        if (!data.success) {
           console.log("Navlist Fetch failed!")
        }
        return data.categories

    } catch (error) {
       console.log("Navlist Fetch failed!")
    }
}


const TopBanner = async () => {
    const navItems = await getData();
    return (
        <>
            <TopHeader></TopHeader>
            <section className='pt-0 md:pt-5 pb-0 bg-white shadow-brandShadow border-b-2 border-b-gray-200'>
                <div className="container grid grid-cols-12 items-center md:gap-10 relative py-5 md:py-0">
                    <div className="logo col-span-4">
                        <Link href={"/"}>
                            <img className='object-fill h-14 w-20 sm:h-16 sm:w-24  lg:h-20 lg:w-28  xl:w-52 xl:h-32' src="/assets/images/logo.png" alt="Logo" />
                        </Link>
                    </div>
                    <div className="Addvertisment col-span-8 w-full ">
                        <div className='flex items-center justify-end'>
                            <Link href={"/"} className='hidden lg:block'>
                                <img src="/assets/images/top-bannner.jpg" alt="Logo" />
                            </Link>
                        </div>

                        <div className='w-full lg:hidden'>
                            <NavMobile navItems={navItems} />
                        </div>
                    </div>
                </div>
                <div className='md:mt-5 lg:mt-10 mt-0'>
                    <div className="container lg:flex items-center justify-center hidden">
                        <nav>
                            <ul className='flex items-center justify-center gap-6 lg:gap-8 xl:gap-10  p-2'>
                                <NavHomeLink/>
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