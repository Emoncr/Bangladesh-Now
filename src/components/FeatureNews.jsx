import { FaClock } from "react-icons/fa";
const FeatureNews = () => {
  return (
    <section className='py-12 bg-offWhite_bg'>
      <div className="container">
        <div className="main_feature grid grid-cols-2 gap-5">
          <div >
            <div className="image_container relative ">
              <img src="/assets/images/feature1.jpg" className='w-full object-cover' alt="feature" />
              <div className='absolute w-full pb-5 px-4 bottom-0'>
                <div className='flex items-center justify-start'>
                  <p className=' bg-brand text-white font-inter font-bold px-3 rounded-md py-2'>Sprots</p>
                </div>

                <h2 className='text-white font-bold font-inter text-3xl line-clamp-2 mt-2 '>The generated Lorem Ipsum is therefore always free from . </h2>
                <p className='text-base text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> Oct 6, 2016</p>
              </div>
            </div>
          </div>
          <div>
            <div className="image_container relative ">
              <img src="/assets/images/feature 2.jpg" className='w-full object-cover' alt="feature" />
              <div className='absolute w-full pb-5 px-4 bottom-0'>
                <div className='flex items-center justify-start'>
                  <p className=' bg-brand text-white font-inter font-bold px-3 rounded-md py-2'>business</p>
                </div>

                <h2 className='text-white font-bold font-inter text-3xl line-clamp-2 mt-2 '>The generated Lorem Ipsum is therefore always free from . </h2>
                <p className='text-base text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> Oct 6, 2016</p>
              </div>
            </div>
          </div>
        </div>

        <div className="other_feature mt-5 grid grid-cols-3 gap-4">
          <div >
            <div className="image_container relative ">
              <img src="/assets/images/feature1.jpg" className='w-full object-cover' alt="feature" />
              <div className='absolute w-full pb-5 px-4 bottom-0'>
                <div className='flex items-center justify-start'>
                  <p className=' bg-brand text-white font-inter text-sm font-bold px-3 rounded-md py-2'>Sprots</p>
                </div>

                <h2 className='text-white font-bold font-inter text-xl line-clamp-2 mt-2 '>The generated Lorem Ipsum is therefore always free from . </h2>
                <p className='text-xs text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> Oct 6, 2016</p>
              </div>
            </div>
          </div>
          <div >
            <div className="image_container relative ">
              <img src="/assets/images/feature1.jpg" className='w-full object-cover' alt="feature" />
              <div className='absolute w-full pb-5 px-4 bottom-0'>
                <div className='flex items-center justify-start'>
                  <p className=' bg-brand text-white font-inter text-sm font-bold px-3 rounded-md py-2'>Sprots</p>
                </div>

                <h2 className='text-white font-bold font-inter text-xl line-clamp-2 mt-2 '>The generated Lorem Ipsum is therefore always free from . </h2>
                <p className='text-xs text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> Oct 6, 2016</p>
              </div>
            </div>
          </div>
          <div >
            <div className="image_container relative ">
              <img src="/assets/images/feature1.jpg" className='w-full object-cover' alt="feature" />
              <div className='absolute w-full pb-5 px-4 bottom-0'>
                <div className='flex items-center justify-start'>
                  <p className=' bg-brand text-white font-inter text-sm font-bold px-3 rounded-md py-2'>Sprots</p>
                </div>

                <h2 className='text-white font-bold font-inter text-xl line-clamp-2 mt-2 '>The generated Lorem Ipsum is therefore always free from . </h2>
                <p className='text-xs text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> Oct 6, 2016</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureNews