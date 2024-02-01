
import HeroSilder from './Sliders/HeroSilder';


async function getData(type) {
    try {
        let data = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=${type}`)).json())["data"];

        return data
    } catch (error) {
        throw new Error("Slider news data fetch failed")
    }
}


const NewsSlider = async ({newsType}) => {
    const newsData = await getData(newsType.type)



    return (
        <>

                <HeroSilder newsData={newsData} />

        </>
    )
}

export default NewsSlider