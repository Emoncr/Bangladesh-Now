import React from 'react'
import ShortNews from './ShortNews'

const SideNews = () => {
    return (
        <div>
            <div className="news_list_heading pb-3 border-b-2 border-b-brand w-full ">
                <h5 className='text-brand text-lg font-inter font-bold'>Trending</h5>
            </div>
            <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-1 gap-3'>
                <ShortNews />
                <ShortNews />
            </div>
        </div>
    )
}

export default SideNews