import { RiDeleteBin6Fill } from "react-icons/ri";

const myBooking = () => {
    return (
        <div className='py-5 lg:py-10 px-5 pb-16 bg-[#F6F6F6] min-h-screen h-full'>
            <div className="heading_container">
                <p className='tiny_heading'>---Excellent Ambience---</p>
                <div className='divider_1'></div>
                <h2 className='heading '>MY BOOKINGS</h2>
                <div className='divider_2 '></div>
            </div>
            <div className='max-w-[992px] mx-auto bg-white p-5 md:p-8 lg:p-12 mt-5 sm:mt-8 lg:mt-16  '>
                <div className='grid grid-cols-1 md:grid-cols-3 '>
                    <p className='text-brandDark text-base sm:text-xl lg:text-2xl font-bold font-inter'>Total orders: 6</p>

                    <p className='text-brandDark text-base sm:text-xl lg:text-2xl font-bold font-inter'>total price: $88.2</p>
                    <div className='flex items-center justify-end'>
                        <button className='bg-brandSecoundry hover:bg-brandSecoundry/90 duration-300  text-white font-bold py-3 px-6 rounded-lg font-inter uppercase '>
                            Pay Now
                        </button>
                    </div>
                </div>
                <div className='mt-6'>
                    <div>
                        <div className="head grid grid-cols-12 bg-brandPrimary rounded-t-lg py-5 px-5 gap-2 ">
                            <p className='col-span-1 px-2 uppercase text-center font-inter font-base font-semibold text-white'>
                            </p>
                            <p className='col-span-3 px-2 uppercase text-center font-inter font-base font-semibold text-white'>Item Image</p>
                            <p className='col-span-4 px-2 uppercase font-inter font-base font-semibold text-white'>Item Name</p>
                            <p className='col-span-2 px-2 uppercase font-inter font-base font-semibold text-white'>price</p>
                            <p className='col-span-2 px-2 uppercase text-center font-inter font-base font-semibold text-white'>Action</p>
                        </div>

                        {/* Dynamic products will starts here */}
                        <div className="Product_Div grid grid-cols-12 bg-transparent rounded-t-lg py-5 px-5 gap-2 items-center">
                            <div className='col-span-1 uppercase text-center font-inter font-base font-semibold text-brandDark px-2'>
                                <p>2</p>
                            </div>
                            <div className='col-span-3  px-2'>
                                <div className='image-container flex items-center justify-center'>
                                    <img src="/dynamic images/Rectangle 67.png" alt="Product Image" />
                                </div>
                            </div>

                            <div className='col-span-4 px-2 '>
                                <p className='uppercase font-inter font-base font-semibold text-[#737373] line-clamp-2'>
                                    Testy salad with cickent egge Testy salad with cickent egge
                                </p>
                            </div>

                            <div className='col-span-2 px-2 '>
                                <p className='uppercase font-inter font-base font-semibold text-[#737373] line-clamp-1'>
                                    $80
                                </p>
                            </div>

                            <div className='col-span-2 px-2 flex items-center justify-center'>
                                <button className="p-2 bg-red-700 text-2xl text-white rounded-sm">
                                    <RiDeleteBin6Fill />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default myBooking