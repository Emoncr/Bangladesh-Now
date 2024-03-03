import FeatureNews from '@/components/FeatureNews'
import NewsList from '@/components/NewsList'
import NewsSlider from '@/components/NewsSlider'
import PlainLayout from '@/components/PlainLayout'
import React from 'react'

const CategoryNews = ({ params }) => {

    return (
        <PlainLayout>

            <div className='py-10 bg-offWhite_bg large_container'>
                <NewsSlider newsType={{ type: "popular", }} />
            </div>


            <NewsList
                news={{ endpoint: "category", params: `?catID=${params.id}`, heading: `${params.category}` }}
            />
        </PlainLayout>
    )
}

export default CategoryNews