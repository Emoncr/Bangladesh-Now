import Link from "next/link";
import { FaClock } from "react-icons/fa";
import NewsSlider from "./NewsSlider";


async function getData() {
  try {
    let data = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=feature`)).json())["data"];


    return data
  } catch (error) {
    throw new Error("feature and popular news data fetch failed")
  }
}

const FeatureNews = async () => {
  const newsData = await getData()




  return (
    <section className='py-12 bg-offWhite_bg'>
      <div className="large_container">


        <div className="main_feature grid grid-cols-1 md:grid-cols-2 gap-5 md:px-4">
          {
            newsData?.length !== 0 && newsData?.map((el, index) =>
              <div key={index}>
                <Link href={`/${el.Categories.name}/details/${el.id}`}>
                  <div className="image_container relative group">
                    <img src={el.img1} className='w-full object-cover' alt="feature" />

                    <div className='absolute w-full pb-5 px-4 bottom-0 z-10'>
                      <div className='flex items-center justify-start'>
                        <p className=' bg-brand text-white font-inter font-bold px-2 py-1 sm:px-3 rounded-md sm:py-2 capitalize text-xs sm:text-sm'>{el.type}</p>
                      </div>

                      <h2 className='text-white font-bold font-inter text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl line-clamp-2 mt-2 transition group-hover:text-brand group-hover:underline '>{el.title}</h2>
                      <p className='text-sm  sm:flex text-white mt-2 font-inter font-semibold hidden items-center justify-start gap-1'> <FaClock /> {new Date(el.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40"></div>
                  </div>
                </Link>
              </div>
            )
          }
        </div>






        <div className="other_feature mt-5 ">

          <NewsSlider newsType={{ type: "popular" }} />

        </div>
      </div>
    </section >
  )
}

export default FeatureNews