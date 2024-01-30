import ShortNews from './ShortNews'

async function getData() {
    let entertainment = (await (await fetch(`${process.env.BASE_URL}/api/news_list/category?catID=8`)).json())["data"];

    return entertainment
}


const SideNews = async () => {
    const entertainment = await getData();

    return (
        <div>
            <div className="news_list_heading pb-3 border-b-2 border-b-brand w-full ">
                <h5 className='text-brand text-lg font-inter font-bold'>Trending</h5>
            </div>
            <div className='mt-4 grid sm:grid-cols-2 md:grid-cols-1 gap-3'>
                {
                    entertainment?.length !== 0 && entertainment?.map((info, index) =>
                        <ShortNews info={info} key={index} />
                    )
                }
            </div>
        </div>
    )
}

export default SideNews