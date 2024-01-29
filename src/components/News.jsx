import React from 'react'

const News = () => {
    return (
        <div>
            <div className='grid grid-cols-1 gap-3'>
                <div className="image-container">
                    <img src="/assets/images/feature 2.jpg " alt="News image" />
                </div>
                <div className='news_content'>
                    <h4 className='text-base sm:text-lg lg:text-xl font-bold line-clamp-1 sm:line-clamp-2 font-inter leading-tight'>Donec vitae massa orc fusce vitae lorem at felis porta auctor</h4>
                    <p className='text-[#999] text-[10px] sm:text-sm font-inter font-medium mt-0 sm:mt-1'>Friday, 09 January 2015</p>
                    <p className='text-sm sm:text-base line-clamp-5 text-des_color font-medium font-inter mt-1 '>
                        Nulla aliquam nisi sed lorem rhoncus ut adipiscing leo semper. Vestibulum sit amet libero ante, a porta augue. Morbi ornare, leo a tristique rutrum, arcu nulla ornare purus, et pharetra tortor lectus at lectus. Cras congue rhoncus eros et facilisis. Maecenas vehicula pretium turpis, in volutpat mauris imperdiet vel. Nulla facilisi. Sed at justo sem, at iaculis ligula phasellus ligula tortor
                    </p>
                </div>
            </div>
       
        </div>
    )
}

export default News