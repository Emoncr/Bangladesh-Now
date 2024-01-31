import FeatureNews from '@/components/FeatureNews'
import NewsList from '@/components/NewsList'
import PlainLayout from '@/components/PlainLayout'
import React from 'react'

const CategoryNews = ({ params }) => {
    return (
        <PlainLayout>
            <FeatureNews />
           
            <NewsList
                news={{ endpoint: "category", params: `?catID=${params.id}`, heading: `${params.category}` }}
            />
        </PlainLayout>
    )
}

export default CategoryNews