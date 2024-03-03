import ShortNews from './ShortNews'

async function getData(newsTypeObj) {
    const { params, value, } = newsTypeObj;

    let newsData = (await (await fetch(`${process.env.BASE_URL}/api/news_list/${params}?${value}`)).json())["data"];
    return newsData
}


const SideNews = async ({ news }) => {
    const params = {
        ...news,
        params: news.params ? news.params : "category",
        value: news.value ? news.value : "catID=5",
        heading: "Entertainment",
    }
    const newsData = await getData(params);
    const { heading } = params;



    return (
        <div>
            <div className="news_list_heading pb-3 border-b-2 border-b-brand w-full ">
                <h5 className='text-brand text-lg font-inter font-bold'>{heading && heading}</h5>
            </div>
            <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-1 gap-3'>
                {
                    newsData?.length !== 0 && newsData?.map((info, index) =>
                        <ShortNews info={info} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default SideNews