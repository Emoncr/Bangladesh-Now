

import { useRouter } from "next/navigation"

const ShortNews = ({ info }) => {

    const router = useRouter();


    return (
        <div
            onClick={() => router.push("/login")}
            className='grid grid-cols-5 gap-3 items-center cursor-pointer'
        >
            <div className="image-container col-span-2">
                <img src={info.img1} alt="News image" />
            </div>
            <div className='news_content col-span-3'>
                <h4 className='text-sm min-[389px]:line-clamp-3 sm:text-sm   font-bold line-clamp-3 font-inter leading-tight'>
                    {info.title}
                    fsdfa
                </h4>
                <p className='text-[#999] text-[10px] font-inter font-medium mt-1 '>
                    {new Date(info.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>

    )
}

export default ShortNews