import axios from "axios";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, } from "react-icons/fa";




const SocialLinks = () => {
    const data = []
 
    return (
        <div className='flex items-center justify-end gap-6'>
            <p>
                <Link href={`${data.length != 0 ? data[0].facebook:""}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaFacebook />
                </Link>
            </p>
            <p>
                <Link href={`${data.length != 0 ? data[0].facebook:""}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaTwitter />
                </Link>
            </p>
            <p>
                <Link  href={`${data.length != 0 ? data[0].facebook:""}`}  className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaLinkedin />
                </Link>
            </p>
            <p>
                <Link href={`${data.length != 0 ? data[0].facebook:""}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaYoutube ></FaYoutube>
                </Link>
            </p>
        </div>
    )
}

export default SocialLinks