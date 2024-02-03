"use client"
import { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import SIteNavbar from './SIteNavbar';
import { GrClose } from "react-icons/gr";
import SearchForm from './Site Forms/SearchForm';




const NavMobile = ({ navItems }) => {

    const [isMenuActive, setIsMenuActive] = useState(false)



    return (
        <>
            <div className='flex items-center justify-end'>
                <button
                    onClick={() => setIsMenuActive(true)}
                    className='text-2xl text-brand p-1 '>
                    <RiMenu3Line />
                </button>
            </div>
            {
               <div className={`absolute -top-5 right-0  ${isMenuActive ? "w-full" : "w-0"}  bg-white shadow-md z-50 h-screen transition-all duration-500 delay-200`}>

                    <div className='py-5 px-5 '>
                        <div className="close_btn ">
                            <button
                                onClick={() => setIsMenuActive(false)}
                                className='text-xl font-bold text-red-600 p-1'>
                                <GrClose></GrClose>
                            </button>
                        </div>
                        <div className="close_btn mt-4">
                            <SearchForm />
                        </div>
                        <ul className='grid grid-cols-2 items-center align-middle justify-center gap-10 pb-2 mt-12 '>
                            {
                                navItems?.length !== 0 && navItems?.map(item =>
                                    <SIteNavbar key={item.id} item={item} />
                                )
                            }
                        </ul>
                    </div>
                </div>
            }
        </>

    )
}

export default NavMobile