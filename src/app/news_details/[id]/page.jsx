import Comments from '@/components/Comments';
import PlainLayout from '@/components/PlainLayout'
import SearchForm from '@/components/SearchForm';
import SideNews from '@/components/SideNews';

async function getData(id) {
    let newsDetails = (await (await fetch(`${process.env.BASE_URL}/api/news_list/details?id=${id}`)).json())["data"];

    return newsDetails
}



const newsDetails = async ({ params }) => {
    const data = await getData(params.id);

    function generateTags(text) {
        const words = text.split(/\s+/);
        return words;
    }

    const tags = generateTags(data?.keywords);


    return (
        <PlainLayout>
            <section className='py-10 sm:py-12 bg-white'>
                <div className="container">
                    <div className="newsListNav  grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-x-12 w-full">

                        <div className='col-span-1 md:col-span-7 lg:col-span-8'>
                            <div className="news_list_heading pb-3  w-full ">
                                <h4 className='text-heading_color text-2xl sm:text-3xl lg:text-5xl font-bold font-inter lg:leading-snug'>
                                    {data?.title}
                                </h4>
                                <div className='flex items-center justify-start gap-5 sm:gap-8 sm:mt-5 lg:mt-8 mt-3'>
                                    <p className='text-[#999] text-[10px] sm:text-sm font-inter font-semibold '>Published: {new Date(data?.createdAt).toLocaleDateString()} </p>
                                    <p className='text-[#999] text-[10px] sm:text-sm font-inter font-semibold'>Comments: </p>
                                </div>
                            </div>
                            <div className='lg:py-6 py-3'>
                                <div className=''>
                                    <div className="image_container">
                                        <img className='w-full' src={data?.img1} alt="News Image" />
                                    </div>
                                    <div className="content mt-2 sm:mt-5 lg:mt-8">
                                        <p className='text-sm sm:text-base lg:text-lg font-inter font-normal text-justify leading-relaxed'>
                                            {data?.long_des}
                                        </p>
                                    </div>
                                    <div className='mt-3 md:mt-5'>
                                        <p className='text-lg md:text-xl text-heading_color font-bold font-inter'>Related Tags</p>
                                        <div className='flex items-end justify-start gap-1 sm:gap-3 lg:gap-5 flex-wrap mt-2 lg:mt-7'>
                                            {
                                                tags?.length !== 0 && tags?.map(el =>
                                                    <p className='px-3 py-2 bg-gray-300 rounded-md text-heading_color font-semibold'>{el}</p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className='Comments mt-5 sm:mt-8'>
                                        <Comments />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='hidden lg:block lg:col-span-1'></div> */}
                        <div className="searchbar col-span-1 md:col-span-5 lg:col-span-4">
                            <div className='hidden md:block'>
                                <SearchForm />
                            </div>
                            <div className="treanding_container md:mt-5">
                                <SideNews news={{ params: "type", value: "type=popular", heading: "Popular" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PlainLayout>
    )
}

export default newsDetails