import React from 'react'

const ShortNews = () => {
    return (


        <div className='grid grid-cols-5 gap-3 items-center'>
            <div className="image-container col-span-2">
                <img src="/assets/images/feature 2.jpg " alt="News image" />
            </div>
            <div className='news_content col-span-3'>
                <h4 className='text-sm min-[389px]:line-clamp-3 sm:text-sm   font-bold line-clamp-3 font-inter leading-tight'>Donec vitae massa orc fusce vitae lorem at felis porta auctor
                Donec vitae massa orc fusce vitae lorem at felis porta auctor</h4>
                <p className='text-[#999] text-[10px] font-inter font-medium mt-1 '>Friday, 09 January 2015</p>
            </div>
        </div>



    )
}

export default ShortNews