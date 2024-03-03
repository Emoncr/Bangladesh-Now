
import HeroSilder from './Sliders/HeroSilder';


// async function getData(type) {
//     try {
//         let data = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=${type}`)).json())["data"];

//         return data
//     } catch (error) {
//         throw new Error("Slider news data fetch failed")
//     }
// }

const getData = async (type) => {
    const res = await fetch(`${process.env.BASE_URL}/api/news_list/type?type=${type}`)
    if (!res.ok) {
        throw new Error("Slider API Calling Falied!")
    }
    return res.json()
}


const NewsSlider = async ({ newsType }) => {
    const params = newsType?.type ? newsType.type : "popular"

    const res = await getData(params)
    const newsData = res.data;


    return (
        <>

            <HeroSilder newsData={newsData} />

        </>
    )
}

export default NewsSlider