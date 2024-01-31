import Link from "next/link";

const ShortNews = ({ info }) => {




    return (
        <div
            className='grid grid-cols-5 gap-3 items-center group'
        >
            <div className="image-container col-span-2">
                <Link href={`/news_details/${info.id}`}>
                    <img src={info.img1} alt="News image" />
                </Link>
            </div>
            <div className='news_content col-span-3'>
                <Link href={`/news_details/${info.id}`}>
                    <h4 className='text-sm min-[389px]:line-clamp-3 sm:text-sm   font-bold line-clamp-3 font-inter leading-tight text-heading_color group-hover:text-brand transition group-hover:underline'>
                        {info.title}
                    </h4>
                </Link>
                <p className='text-[#999] text-[10px] font-inter font-medium mt-1 '>
                    {new Date(info.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    )
}

export default ShortNews