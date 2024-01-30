import React from 'react'

const News = ({ newsInfo }) => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-3'>
                <div className="image-container">
                    <img src={newsInfo.img1} alt="News image" />
                </div>
                <div className='news_content'>
                    <h4 className='text-base sm:text-lg lg:text-xl font-bold line-clamp-1 sm:line-clamp-2 font-inter leading-tight'>{newsInfo.title}</h4>
                    <p className='text-[#999] text-[10px] sm:text-sm font-inter font-medium mt-0 sm:mt-1'>
                        {new Date(newsInfo.createdAt).toLocaleDateString()}
                    </p>
                    <p className='text-sm sm:text-base line-clamp-5 text-des_color font-medium font-inter mt-1 '>
                        {newsInfo.short_des}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default News