import React from 'react'
import SearchForm from './SearchForm'
import News from './News'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'
import ShortNews from './ShortNews'
import SideNews from './SideNews'



async function getData() {

    let latest = (await (await fetch(`http://localhost:3000/api/news_list/latest`)).json())["data"];
    let entertainment = (await (await fetch(`http://localhost:3000/api/news_list/category?catID=8`)).json())["data"];

    return { entertainment: entertainment, latest: latest, }
}


const NewsList = async () => {

    const data = await getData()
    const { latest, entertainment } = data;



    return (
        <section className='py-10 sm:py-12 pb-96 bg-white'>
            <div className="container">
                <div className="newsListNav  grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-x-12 w-full">

                    <div className='col-span-1 md:col-span-7 lg:col-span-8'>
                        <div className="news_list_heading pb-3 border-b-2 border-b-brand w-full ">
                            <h4 className='text-brand text-2xl font-semibold font-inter'>Latest News</h4>
                        </div>
                        <div className='py-6'>
                            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 sm:gap-y-8 lg:gap-6 xl:gap-8 xl:gap-y-12'>
                                {
                                    latest.length !== 0 && latest.map((el, index) =>
                                        <div key={index}>
                                            <News newsInfo={el} />
                                            <div className="divider sm:hidden"></div>
                                        </div>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                    {/* <div className='hidden lg:block lg:col-span-1'></div> */}
                    <div className="searchbar col-span-1 md:col-span-5 lg:col-span-4">
                        <div className='hidden md:block'>
                            <SearchForm />
                        </div>
                        <div className="treanding_container md:mt-5">
                            <SideNews newsInfo={entertainment} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsList