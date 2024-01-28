import React from 'react'
import SearchForm from './SearchForm'

const NewsList = () => {
    return (
        <section className='py-12 pb-96 bg-white'>
            <div className="container">
                <div className="newsListNav grid grid-cols-12 gap-5">
                    <div className='col-span-8'>
                    <div className="news_list_heading pb-3 border-b border-b-brand  ">
                        <h4 className='text-brand text-2xl font-semibold'>Latest News</h4>
                    </div>
                    <div>
                        <h1>NEs</h1>
                    </div>
                    </div>
                    <div className="searchbar grid-cols-4">
                        <SearchForm/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsList