"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { FaClock } from "react-icons/fa";





const HeroSilder = ({newsData}) => {
    //====SLider Functions=====//
    function SamplePrevArrow({ onClick }) {
        return (
            <div className='hidden'>
                <BsArrowLeft className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }
    function SampleNextArrow({ onClick }) {
        return (
            <div className='hidden'>
                <BsArrowRight className='text-white text-xl sm:text-xl group-hover:text-brand-blue ' />
            </div>
        )
    }

    const settings = {
        dots: true,
        infinite: true,
        lazyLoad: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow to="next" />,
        prevArrow: <SamplePrevArrow to="prev" />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px"
                }}
            >
                <ul style={{ bottom: 35, position: 'relative', }}>
                    {dots}
                </ul>
            </div>
        ),

    };


    return (
        <div className='slider_cotnainer slider_custom_dot'>
            <Slider className=' mx-auto sm:max-w-full' {...settings}>
                {
                    newsData?.length !== 0 && newsData?.map((el, index) =>
                        <div key={index}>
                            <Link href={`/${el.Categories.name}/details/${el.id}`}>
                                <div className="image_container relative group">
                                    <img src={el.img1} className='w-full object-cover' alt="feature" />

                                    <div className='absolute w-full pb-5 px-4 bottom-0 z-10'>
                                        <div className='flex items-center justify-start'>
                                            <p className=' bg-brand text-white font-inter text-sm font-bold px-3 rounded-md py-2 capitalize'>{el.type}</p>
                                        </div>

                                        <h2 className='text-white font-bold font-inter text-lg line-clamp-2 mt-2 transition group-hover:text-brand group-hover:underline'>{el.title}</h2>
                                        <p className='text-xs text-white mt-2 font-inter font-semibold flex items-center justify-start gap-1'> <FaClock /> {new Date(el.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/40">
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </Slider>
        </div >
    )
}

export default HeroSilder