
import Link from 'next/link'
import React from 'react'
import UserDropdown from "./UserDropdown";
import SocialLinks from "./SocialLinks";



const TopHeader = ({ isLogin }) => {



  return (
    <header className='py-3 bg-offWhite_bg'>
      <div className="container grid grid-cols-2 items-center">
        <div className='flex items-center justify-start gap-3'>
          {
            isLogin ?
              <UserDropdown />
              :
              <>
                <p><Link href={"/resister"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Resister</Link></p>
                <p><Link href={"/login"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Login</Link></p>
              </>
          }
        </div>
        <div>
          <SocialLinks />

        </div>
      </div>
    </header>
  )
}

export default TopHeader