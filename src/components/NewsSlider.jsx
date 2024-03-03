
import HeroSilder from './Sliders/HeroSilder';


async function getData(type) {
    try {
        let data = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=${type}`)).json())["data"];

        return data
    } catch (error) {
        throw new Error("Slider news data fetch failed")
    }
}


const NewsSlider = async ({ newsType }) => {
    const params = newsType?.type ? newsType.type : "popular"
    console.log(params);
    const newsData = await getData(params)



    return (
        <>

            <HeroSilder newsData={newsData} />

        </>
    )
}

export default NewsSlider