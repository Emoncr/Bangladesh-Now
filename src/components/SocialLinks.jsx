"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, } from "react-icons/fa";






const SocialLinks = () => {
    const [data, setData] = useState([])


    useEffect(() => {
        (async () => {
            const data = await fetch("/api/socials");
            const res = await data.json();
            if (res.success === true) {
                setData(res.result)
            }
        })()
    }, [])





    return (
        <>
            {
                data.length !== 0 && data.map((link, idx) =>
                    <div key={idx} className='flex items-center justify-end gap-6'>
                        <p>
                            <Link href={`${link.facebook}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                                <FaFacebook />
                            </Link>
                        </p>
                        <p>
                            <Link href={`${link.twitter}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                                <FaTwitter />
                            </Link>
                        </p>
                        <p>
                            <Link href={`${link.linkedin}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                                <FaLinkedin />
                            </Link>
                        </p>
                        <p>
                            <Link href={`${link.youtube}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                                <FaYoutube ></FaYoutube>
                            </Link>
                        </p>
                    </div>

                )
            }
        </>
    )
}

export default SocialLinks