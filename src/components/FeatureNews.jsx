import { FaClock } from "react-icons/fa";


async function getData() {

  let feature = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=feature`)).json())["data"];
  let popular = (await (await fetch(`${process.env.BASE_URL}/api/news_list/type?type=popular`)).json())["data"];

  return { feature, popular }
}

const FeatureNews = async () => {
  const data = await getData()
  const { feature, popular } = data;



  return (
    <section className='py-12 bg-offWhite_bg'>
      <div className="container">


        <div className="main_feature grid grid-cols-2 gap-5">
          {
            feature?.length !== 0 && feature?.map((el, index) =>
              <div key={index}>
                <div className="image_container relative ">
                  <img src={el.img1} className='w-full object-cover' alt="feature" />

                  <div className='absolute w-full pb-5 px-4 bottom-0 z-10'>
                    <div className='flex items-center justify-start'>
                      <p className=' bg-brand text-white font-inter font-bold px-3 rounded-md py-2 capitalize'>{el.type}</p>
                    </div>

                    <h2 className='text-white font-bold font-inter text-3xl line-clamp-2 mt-2 '>{el.title}</h2>
                    <p className='text-base text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> {new Date(el.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40"></div>
                </div>
              </div>
            )
          }
        </div> 






        <div className="other_feature mt-5 grid grid-cols-3 gap-4">

          {
            popular?.length !== 0 && popular?.map((el, index) =>
              <div key={index}>
                <div className="image_container relative ">
                  <img src={el.img1} className='w-full object-cover' alt="feature" />

                  <div className='absolute w-full pb-5 px-4 bottom-0 z-10'>
                    <div className='flex items-center justify-start'>
                      <p className=' bg-brand text-white font-inter text-sm font-bold px-3 rounded-md py-2 capitalize'>{el.type}</p>
                    </div>

                    <h2 className='text-white font-bold font-inter text-lg line-clamp-2 mt-2 '>{el.title}</h2>
                    <p className='text-xs text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> {new Date(el.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40">
                  </div>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </section>
  )
}

export default FeatureNews