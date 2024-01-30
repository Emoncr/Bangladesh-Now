import Link from 'next/link'
import React from 'react'
import UserDropdown from "./UserDropdown";
import SocialLinks from "./SocialLinks";
import { checkLogin } from "@/utils/checkAuth";


const TopHeader = () => {

  const isLogin = checkLogin();

  return (
    <header className='py-3 bg-offWhite_bg'>
      <div className="container grid grid-cols-2 items-center">
        <div className='flex items-center justify-start gap-3'>
          {
            isLogin === false ?
            <>
                <p><Link href={"/resister"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Resister</Link></p>
                <p><Link href={"/login"} className='text-sm font-inter text-heading_color font-bold duration-500 hover:text-brand'>Login</Link></p>
              </>
              :
              <UserDropdown />
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