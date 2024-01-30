
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, } from "react-icons/fa";


async function getData() {
    let res = await (await fetch(`http://localhost:3000/api/socials`)).json();
    return res.result
}


const SocialLinks = async () => {
    const data = await getData();


    return (
        <div className='flex items-center justify-end gap-6'>
            <p>
                <Link href={`${data.length != 0 && data[0].facebook}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaFacebook />
                </Link>
            </p>
            <p>
                <Link href={`${data.length != 0 && data[0].twitter}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaTwitter />
                </Link>
            </p>
            <p>
                <Link href={`${data.length != 0 && data[0].linkedin}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaLinkedin />
                </Link>
            </p>
            <p>
                <Link href={`${data.length != 0 && data[0].youtube}`} className='text-lg font-inter text-heading_color font-bold hover:text-brand duration-300'>
                    <FaYoutube ></FaYoutube>
                </Link>
            </p>
        </div>
    )
}

export default SocialLinks