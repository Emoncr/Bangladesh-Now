
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaEarthAfrica } from "react-icons/fa";
import Link from 'next/link'
import React from 'react'

const TopHeader = () => {
  return (
    <header className='py-3 bg-offWhite_bg'>
      <div className="container grid grid-cols-2">
        <div className='flex items-center justify-start gap-3'>
          <p><Link href={"/resister"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Resister</Link></p>
          <p><Link href={"/login"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Login</Link></p>
        </div>
        <div className='flex items-center justify-end gap-6'>
          <p>
            <Link href={""} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
              <FaFacebook />
            </Link>
          </p>
          <p>
            <Link href={""} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
              <FaTwitter />
            </Link>
          </p>
          <p>
            <Link href={""} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
              <FaLinkedin />
            </Link>
          </p>
          <p>
            <Link href={""} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
              <FaYoutube ></FaYoutube>
            </Link>
          </p>
        </div>
      </div>
    </header>
  )
}

export default TopHeader